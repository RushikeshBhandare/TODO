import React from 'react'
import {Link} from 'react-router-dom'
require('./style/navbar.css')



const NavbarSignup = () =>{

    const ReamoveAuthToken = () =>{
        const token = localStorage.getItem('token')
        console.log('Token :- ', token)
        
        localStorage.removeItem('token')
        const afterToken = localStorage.getItem('token') 
        console.log('after token :- ', afterToken)
    }

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

export default NavbarSignup