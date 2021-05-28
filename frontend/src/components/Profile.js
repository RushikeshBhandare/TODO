import React, {useState, useEffect} from 'react'
require('./style/profile.css')

const Profile = ( ) =>{

    const [userId, setUserid] = useState('');
    const [email, setEmail] = useState('');
    const [mobileno, setMobileNo] = useState(0);
    const [username, setUserName] = useState('');
    
    useEffect(()=>{
        setUserid(localStorage.getItem('userId'))
        setUserName(localStorage.getItem('username'))
        setEmail( localStorage  .getItem('email'))
        setMobileNo(localStorage.getItem('mobileno'))
    })

    return(
        <div className="Profile-Container">
            <div className="UserProfile">
                <div className="profile">
                    {username[0]} 
                </div>
                <div className="userName ">
                    {username}
                </div>
            </div>
           
        </div>
    )
}

export default Profile