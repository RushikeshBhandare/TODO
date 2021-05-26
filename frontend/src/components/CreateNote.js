import React from 'react' 
require('./style/createNote.css')

const CreateNote = () =>{
    return(
        <div className="createNote-Container">
           
                <div className="createNote-block-title">
                    <input placeholder="title"/>
                </div>
                <div className="createNote-block-description">
                    <textarea placeholder="Description"/>
                </div>

        </div>
    )
}

export default CreateNote
