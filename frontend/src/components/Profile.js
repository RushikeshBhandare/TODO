import React, {useState, useEffect} from 'react'
import axios from 'axios'
require('./style/profile.css')

const Profile = ( ) =>{

    
    const [email, setEmail] = useState('');
    const [mobileno, setMobileNo] = useState(0);
    const [username, setUserName] = useState('');
    const [token, setToken] = useState('');

    useEffect(()=>{
        
        setUserName(localStorage.getItem('username'))
        setEmail( localStorage  .getItem('email'))
        setMobileNo(localStorage.getItem('mobileno'))
        setToken(localStorage.getItem('token'))
    })

    const onClickDelete = async()=>{
    
       const inputFromUser =  prompt(`type "delete" to delete account All your data will permanently lost`)
        console.log(inputFromUser)
        if (inputFromUser === "delete"){
            try{
                const config = {
                    headers:{
                        authtoken: token
                    }
                }
              
               const DNote = await axios.post('/notes/deleteall', {},config)
               const Duser = await axios.post('/users/delete', {}, config)
               console.log("Notes Deleted")

            }catch(error){
                alert(error)
            }
        }else{
            console.log('nothing')
        }
    }

    return(
        <div className="Profile-Container">
            <div className="UserProfile">
                <div className="profile">
                    {username[0]} 
                </div>
                <div className="userName ">
                    {username}
                </div>
                <div className="email ">
                   Email: {email}
                </div>
                <div className="mobile-no ">
                    No: {mobileno}
                </div>

                <div className="Delete">
                    <button onClick={()=>{onClickDelete()}} className="deleteButton">Delete Account</button>
                </div>
                
            </div>
           
        </div>
    )
}

export default Profile