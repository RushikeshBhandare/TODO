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

    },[isLogin, props])
    
    const formOnSubmit = async(e) =>{
        e.preventDefault();
     
        try{
            const check ={
                email: email,
                password: password 
            }
            const result = await axios.post('users/login', check)
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('userId', result.data._id)
            localStorage.setItem('email', result.data.email)
            localStorage.setItem('mobileno', result.data.mobileno)
            localStorage.setItem('username', result.data.username)
           
            if(result.data === 'email or password incorrect'){
                alert(result.data)
            }else{
                setIslogIn(true)
            }

        }catch(error){
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
                         <label className="login-lable">Email ID</label>
                    </div>
                    <div className="login-input">
                            <input 
                                required 
                                placeholder="Email ID"
                                onChange={(e)=>{setUserName(e.target.value)}}
                            />
                    </div>
                    <div>
                            <label className="login-lable">Password</label>
                    </div>
                    <div className="login-input">
                            <input 
                                type = "password"
                                required 
                                placeholder="Password"
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