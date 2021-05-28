import React, {useState} from 'react'
import axios from 'axios'
require('./style/allNotes.css')

const NotesBlock = ({title, description, day, month, year, NoteID}) =>{
    
    const [deleted, setDeleted] = useState(false)

    const onClickDelete = async ()=>{
  
        console.log(NoteID)
      
        try {
            const config = {
                headers:{
                    authtoken: localStorage.getItem('token')
                }
            }
            const check = {
                _id:NoteID
            }
            axios.post('/notes/delete', check, config)
            // console.log("delete ",dalete)
            setDeleted(true)

        }catch(error){
            console.log("error while deletin ", error)
        }



    }

    if(deleted){
        return(<></>)
    }else{       
        return(
            <div key={title} className="block-container">
                <div  className="block-delete">
                <strong onClick={()=>{onClickDelete()}} className="delete-Text">X</strong> 
                </div>
                <div className="block-title">
                <strong>{title}...</strong> 
                </div>
                <div className="block-body">
                    {description}...
                </div>
                <div className="block-date">
                    {month} {day} {year}
                </div>
            </div>
        )
    }

}

export default NotesBlock