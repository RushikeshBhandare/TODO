import React, {useState, useEffect} from 'react'
import {Link} from  'react-router-dom' 
import axios from 'axios'
require ('./style/signUp.css')

const SignUp = () =>{
    // users data states
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [isMale, setIsMale] = useState('');
    const [isFeMale, setIsFeMale] = useState('');
    const [passwordNotMatch, setPasswodNotMatch] = useState('')


    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [mobileno, setMobileNo] = useState(0)

    //for validations
    const [isPassSelected, setIsPassSelected] = useState('')

    const [isUsernameAlradyTaken, setIsUsernameAlradyTaken] = useState('') 
    const [isEmailAlradyTaken, setIsEmailAlradyTaken] = useState('')

    useEffect(()=>{
        if(password == conformPassword){
            setPasswodNotMatch('')
        }else{
            setPasswodNotMatch('Password Not match')
        }
        console.log('pass')
    }, [conformPassword])

    //Check username 
    useEffect(()=>{
        const usernameCheck = async()=>{
            try{
                const check = {
                    username
                }
                const data = await axios.post('/users/username', check)
                if(data.data === "user found"){
                    setIsUsernameAlradyTaken('user alrady exist')
                } 
                else{
                    setIsUsernameAlradyTaken('')
                }
                console.log(data)

            }catch(error){
                console.log(error)
            }
        }
        usernameCheck();
    }, [username])


      //Check email 
      useEffect(()=>{
        const usernameCheck = async()=>{
            try{
                const check = {
                    email
                }
                const data = await axios.post('/users/email', check)
                if(data.data === "email found"){
                    setIsEmailAlradyTaken('email alrady exist')
                } 
                else{
                    setIsEmailAlradyTaken('')
                }
                console.log(data)

            }catch(error){
                console.log(error)
            }
        }
        usernameCheck();
    }, [email])


    const onClickLogin = (e) => {
       
    }

    // Password istructions
    const changeOnsFocus = ()=>{
        setIsPassSelected('Minimum 8 characte, contain number and Uppercase character')
        
    }
    const changeOnBlur = ()=>{
        setIsPassSelected('')
     
    }
    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(isEmailAlradyTaken != ''){
            alert('check Email')
            return;
        }
        if(isEmailAlradyTaken !=''){
            alert('check username')
            return;
        }

        if(password === conformPassword){

            var WhichGender = ''
            if(isFeMale == 'on'){
                WhichGender='Female'
            }else if(isMale == 'on'){
                WhichGender = 'Male'
            }
           
            console.log('Isfemail :- ', WhichGender)
            const data = {
                username : username,
                password : password,
                gender : WhichGender,
                age : age,
                email : email,
                mobileno : mobileno
            }  
            try{
                const submitForm = async() =>{
                    await axios.post('/users/add', data)
                }
                submitForm();
                console.log('form Submited')
            }catch(error){
                console.log(error)
            }

            
            console.log(data)
        }else{{
            // alert()
        }}

    }
  

    return(
        <div className="signUp-container">
            <div className="signUp-Welcome">
                <h2>New User </h2>
            </div>  
            <div className="signUp-mainBlock">
               <form onSubmit={(e)=>{onFormSubmit(e)}}>
                   {/* Username  */}
                    <div>
                         <label className="signUp-lable">Create User name*</label>
                    </div>
                    <div className="signUp-input">
                            <input 
                                required 
                                placeholder="Create username"
                                onChange={(e)=>{setUserName(e.target.value)}}
                            />
                           <span className="passMatch">{isUsernameAlradyTaken}</span> 

                    </div>
                    
                    {/* Password */}

                    <div>
                            <label className="signUp-lable">Create Password*</label>
                    </div>
                    <div className="signUp-input">
                            <input 
                                type = "password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                required 
                                placeholder="Create password"
                                onFocus={()=>{changeOnsFocus()}}
                                onBlur={()=>{changeOnBlur()}}
                                onChange={(e)=>{setPassword(e.target.value)}}
                            />
                           <span className="passMatch-valid">{isPassSelected}</span>  

                    </div>
                    
                    <div>
                            <label className="signUp-lable">Conform password*</label>
                    </div>
                    <div className="signUp-input">
                            <input 
                                type = "password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                required 
                                placeholder="Conform password"
                                onChange={(e)=>{setConformPassword(e.target.value)}}
                            />
                           <span className="passMatch">{passwordNotMatch}</span> 
                    </div>


                    {/* gender */}
                    <div>
                            <label className="signUp-lable">Select gender</label>
                    </div>
                    <div className="signUp-radio">
                            <input 
                                type="radio"
                                name="gender" 
                                 onChange={(e)=>{setIsMale(e.target.value)}}
                            />Male
                            
                            <input 
                                type="radio"
                                name="gender"
                                 onChange={(e)=>{setIsFeMale(e.target.value)}}
                            />Female
                    </div>

                    {/* Age */}

                    <div>
                            <label className="signUp-lable">Age</label>
                    </div>
                    <div className="signUp-Age">
                        
                        <input 
                            type="date"
                            onChange={(e)=>{setAge(e.target.value)}}
                        />

                    </div>


                    {/* Email  */}
                    <div>
                         <label className="signUp-lable">Email*</label>
                    </div>
                    <div className="signUp-input">
                            <input 
                                type="email"
                                required 
                                placeholder="Email"
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                           <span className="passMatch">{isEmailAlradyTaken}</span> 

                    </div>

                    {/* Mobile no  */}
                    <div>
                         <label className="signUp-lable">Mobile NO</label>
                    </div>
                    <div className="signUp-input">
                            <input 
                                type="number"
                                placeholder="Create username"
                                onChange={(e)=>{setMobileNo(e.target.value)}}
                            />
                    </div>

                    {/* signUP Button */}

                    <div className="signUp">
                        <button 
                            className="signUp button"
                            onClick={(e)=>{onClickLogin(e)}}
                        >
                            SignUp
                        </button>
                    </div>
                 
               </form>
               
            </div>
        </div>
    )
}

export default SignUp