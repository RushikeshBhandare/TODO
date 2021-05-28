import React, {useState, useEffect} from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import WebFooter from './components/WebFooter'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route}from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './components/Home'
import AlertMassage from './components/AlertMassage'
import Profile from './components/Profile'

const App = () =>{
    const [isAdded, setIsAdded] = useState('')
    const [isLogin, setIslogin] = useState(false)
    const [hasAuthtoken, SetHasAuthtoken] = useState(false)
    useEffect(()=>{
        const authtoken = localStorage.getItem('token')
        if(authtoken){
            SetHasAuthtoken(true)
        }else{
           SetHasAuthtoken(false)
        }
    },[SetHasAuthtoken])

    const getIslogin = (login) =>{
        setIslogin(login)
    }

    const CheckIsAdded = (check) =>{
       setIsAdded(check)
    }

    const checkAuthToken = () =>{
        if(hasAuthtoken){
            return <AllNotes/>
        }else{
            return <Home/>
        }
    }
    return(
        <Router> 
            <div>
            <Navbar isLogedIn={isLogin}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={()=>{return checkAuthToken()}}/>
            <Route path="/login" exact component={()=> <LoginPage getISLogin={getIslogin}/>}/>
            <Route path="/all" exact component={()=><AllNotes isAdded={isAdded}/>}/>
            <Route path="/create" exact component={()=><CreateNote CheckIsAdded={CheckIsAdded}/>}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/al" exact component={AlertMassage}/>
            <WebFooter/>
     
          </div>

        </Router>
        
    )
}

export default App