import React, {useState, useEffect} from 'react'
import Navabar from './components/Navbar'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import WebFooter from './components/WebFooter'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import NavbarSignup from './components/NavbarSignup'
import {BrowserRouter as Router, Route}from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () =>{
    const [isAdded, setIsAdded] = useState('')
    const [isLogin, setIslogin] = useState(false)
    const getIslogin = (login) =>{
        setIslogin(login)
    }

    const CheckIsAdded = (check) =>{
       setIsAdded(check)
    }

    return(
        <Router> 
            <div>
            <Navbar isLogedIn={isLogin}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={()=> <LoginPage getISLogin={getIslogin}/>}/>
            <Route path="/all" exact component={()=><AllNotes isAdded={isAdded}/>}/>
            <Route path="/create" exact component={()=><CreateNote CheckIsAdded={CheckIsAdded}/>}/>
            <Route path="/signup" exact component={SignUp}/>
            {/* <WebFooter/> */}
       </div>

        </Router>
        
    )
}

export default App