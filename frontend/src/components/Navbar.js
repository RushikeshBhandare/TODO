import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
require('./style/navbar.css')



const Navbar = (props) =>{
    
    const [token, setToken] = useState('')

    //useEffect
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
        console.log("called")
    },[token, props.isLogedIn])

    const ReamoveAuthToken = () =>{
        const token = localStorage.getItem('token')
        console.log('Token :- ', token)
        
        localStorage.removeItem('token')
        const afterToken = localStorage.getItem('token') 
        console.log('after token :- ', afterToken)
        setToken('')
    } 
    if(token){
        return (
            <div className="navbar-container">
            <div className="navbar-Logo navbar-item ">
                    <h2>NOTES</h2>
                </div>
                <div className="navbar-item">
                    <ul>
                        <li>Profile </li>
                        <li>About</li>
                        <Link to="/Home" onClick={()=>{ReamoveAuthToken()}}><li>LogOut</li></Link>
                    </ul>
                </div>
            </div>
        )
    }else{      
        return (
            <div className="navbar-container">
            <div className="navbar-Logo navbar-item ">
                    <h2>NOTES</h2>
                </div>
                <div className="navbar-item">
                    <ul>
                        <Link to="/login" onClick={()=>{ReamoveAuthToken()}}><li>Login</li></Link>
                        <Link to="/signup" onClick={()=>{ReamoveAuthToken()}}><li>Signup</li></Link>
                    </ul>
                </div>
            </div>
    )
    }
    
}

export default Navbar