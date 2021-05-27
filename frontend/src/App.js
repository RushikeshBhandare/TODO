import React from 'react'
import Navabar from './components/Navbar'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import WebFooter from './components/WebFooter'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Route}from 'react-router-dom' 

const App = () =>{
    
    return(
        <Router> 
            <div>
            <Navabar/>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/all" exact component={AllNotes}/>
            <Route path="/create" exact component={CreateNote}/>
            <Route path="/signup" exact component={SignUp}/>
            {/* <WebFooter/> */}
       </div>

        </Router>
        
    )
}

export default App