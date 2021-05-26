import React from 'react'
require('./style/allNotes.css')

const NotesBlock = ({title, description, day, month, year}) =>{
    return(
        <div key={title} className="block-container">
            <div className="block-delete">
               <strong className="delete-Text">X</strong> 
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

export default NotesBlock