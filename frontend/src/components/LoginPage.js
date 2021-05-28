import React, {useState, useEffect} from 'react'
import {Link} from  'react-router-dom' 
import axios from 'axios'
import AllNotes from './AllNotes'
require ('./style/login.css')

const LoginPage = (props) =>{

    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [isLogin, setIslogIn] = useState(false)


    const onClickLogin = (e) => {
        console.log(email);
        console.log(password);
        const isEverything = false
        if(isEverything){

        }
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setIslogIn(true)
            props.getISLogin(true)
        }else{
            props.getISLogin(false)
            setIslogIn(false)
        }

    },[isLogin])
    
    const formOnSubmit = async(e) =>{
        e.preventDefault();
     
        try{
            const data ={
                email: email,
                password: password 
            }
            const result = await axios.post('/users/login', data)
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('userData', result.data)
            console.log('result data', result.data)
            console.log('result', result)
            if(result.data === 'email or password incorrect'){
                alert(result.data)
            }else{
                setIslogIn(true)
            }

        }catch(error){
            console.log("Error for the loging in ")
            console.log("error While Loging in ",error)
        }
    }

    if(isLogin){
        return <AllNotes/>
    }else{

    return(
        <div className="login-container">
            <div className="login-Welcome">
                <h2>Welcome </h2>
            </div>  
            <div className="login-mainBlock">
               <form onSubmit={(e)=>{formOnSubmit(e)}}>
                    <div>
                         <label className="login-lable">User name</label>
                    </div>
                    <div className="login-input">
                            <input 
                                required 
                                placeholder="Username"
                                onChange={(e)=>{setUserName(e.target.value)}}
                            />
                    </div>
                    <div>
                            <label className="login-lable">User name</label>
                    </div>
                    <div className="login-input">
                            <input 
                                type = "password"
                                required 
                                placeholder="password"
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                    </div>
                    <div className="login">
                        <button 
                            className="login button"
                            onClick={(e)=>{onClickLogin(e)}}
                        >
                            logIn
                        </button>
                    </div>
                    <div className="new-resister">
                            <Link to="/Signup" className="res">new Registration</Link>
                            {/* <a className="res"></a> */}
                    </div>
               </form>
               
            </div>
        </div>
    )
    }
}

export default LoginPage