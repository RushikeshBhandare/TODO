import React from 'react'
import Navabar from './components/Navbar'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'

const App = () =>{
    return(
        <div>
            <Navabar/>
            <CreateNote/>
            {/* <AllNotes/> */}
       </div>
    )
}

export default App