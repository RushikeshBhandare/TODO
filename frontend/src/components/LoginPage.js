import React, {useState, useEffect} from 'react'
import {Link} from  'react-router-dom' 
require ('./style/login.css')

const LoginPage = () =>{

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('')

    const onClickLogin = (e) => {
        console.log(username);
        console.log(password);
        const isEverything = false
        if(isEverything){

        }

    }
    
    const formOnSubmit = (e) =>{
        e.preventDefault();
        console.log('hello')
    }


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
                            <Link to="/create" className="res">new Registration</Link>
                            {/* <a className="res"></a> */}
                    </div>
               </form>
               
            </div>
        </div>
    )
}

export default LoginPage