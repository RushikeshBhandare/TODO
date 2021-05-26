import React from 'react'
import Navabar from './components/Navbar'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import WebFooter from './components/WebFooter'
import {BrowserRouter as Router, Route}from 'react-router-dom' 

const App = () =>{
    return(
        <Router>
            <div>
            <Navabar/>
            <Route path="/" exact component={AllNotes}/>
            <Route path="/create" exact component={CreateNote}/>
           
            {/* <WebFooter/> */}
       </div>

        </Router>
        
    )
}

export default App