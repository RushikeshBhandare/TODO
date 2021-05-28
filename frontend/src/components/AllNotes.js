import React, {useState, useEffect} from 'react'
import NotesBlock from './NotesBlock'
import {Link} from 'react-router-dom'
import axios from 'axios'

require ('./style/allNotes.css')

const AllNotes = (props) =>{
   
    const [Notes, setNotes] = useState([])
    useEffect(()=>{
        

        const getNotes = async()=>{
            try{
                const config = {
                    headers:{
                        authtoken: localStorage.getItem('token')
                    }
                }
                const res = await axios.get('/notes', config)
                setNotes(res.data)
                console.log('Notes', res)
            }catch(error){
                console.log(error)
            }
        }

        getNotes();

    }, [props.isAdded])

    Notes.reverse()
    const printNotes = Notes.map((note)=>{
        const title =  note.title.slice(0, 25)
        const description = note.description.slice(0, 250)
        const day = new Date(note.date).getDay()
        const month = new Date(note.date).getMonth()
        const year = new Date(note.date).getFullYear()
        const months = ['Jan', 'Feb', 'Mar', 'Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
              
        return(
            <NotesBlock title={title} description={description} day={day} month={months[month]} year={year}/>
        )
    })

    const onClickCreate = (e) =>{
        
    }
    return (
        <div>
            <div>
                <button className="CreateNote-button">
                    <Link to ="create" className="Link-CR"> Create New</Link>    
                </button>
            </div>
            <div className="allNotes-container">
                {printNotes}
            </div>
        </div>
        
    )
}

export default AllNotes