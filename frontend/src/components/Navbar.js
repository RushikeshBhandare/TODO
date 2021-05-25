import React from 'react'
require('./style/navbar.css')



const Navbar = () =>{
    return (
        <div className="navbar-container">
           <div className="navbar-Logo navbar-item ">
                <h2>NOTES</h2>
            </div>
            <div className="navbar-item">
                <ul>
                    <li>Profile </li>
                    <li>About </li>
                    <li>LogOut </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar