import React from 'react'
require('./style/alert.css')

const AlertMassage = ({text, isClickedOn}) =>{
    const onClickButton = ()=>{
        isClickedOn(true)
    }
    return(
        <div className="alert-massage">
            <div className="alert-block">
            <div className="alert-text">
                User Added please click on to login 
            </div>
            <div className="alert-button">
                <button onClick={()=>{onClickButton()}}>Ok</button>
            </div>
            </div>
        </div>
    )
}

export  default AlertMassage