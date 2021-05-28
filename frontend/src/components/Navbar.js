import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
require('./style/navbar.css')



const Navbar = (props) =>{
    
    const [token, setToken] = useState('')

    //useEffect
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    },[token, props.isLogedIn])

    const ReamoveAuthToken = () =>{
        localStorage.removeItem('token')
        setToken('')
    } 
    if(token){
        return (
            <div className="navbar-container">
               <Link to ="/"  style={{ textDecoration: 'none' }}>
                <div className="navbar-Logo navbar-item ">
                    <h2 className="logo-text">NOTES</h2>
                </div>
                </Link>
                <div className="navbar-item">
                    <ul>
                        <li>About </li>
                        <Link to="/profile"  style={{ textDecoration: 'none' }}><li>Profile</li></Link>
                        <Link to="/Home" onClick={()=>{ReamoveAuthToken()}}  style={{ textDecoration: 'none' }}><li>LogOut</li></Link>
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