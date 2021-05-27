import React, {useState, useEffect} from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
require('./style/createNote.css')


const CreateNote = () =>{
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(()=>{

    })

    const onClickSubmit = async(e) =>{
        try{
            const NoteData = {
                title: title,
                description:description,
                date: new Date()
            }
            await axios.post('/notes/add', NoteData)
            
        }catch(error){
            console.log('while Creating : ', error )
        }
        console.log('clicked on click')
        console.log(title)
        console.log(new Date())


        e.preventDefault();
        <Link to="/"/>

    }
    
    return(
        <div className="CreateNote">
            <div className="createNote-Text" onClick={(e)=>{onClickSubmit(e)}}>
              <Link to="/all" className="CreteNoteHere">
                  <div className="JustText"><strong>CLICK HERE TO CREATE</strong> </div>           
              </Link>
            </div>
            <div className="createNote-Container">
                <div className="createNote-block-title">
                    <input placeholder="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                    <textarea 
                        className="createNote-description" 
                        rows="18" cols="30" 
                        placeholder="Description"
                        onChange={(e)=>{setDescription(e.target.value)}}    
                    />

                </div>            
            </div>
            
           
        </div>
        
    )
}

export default CreateNote
