import React from 'react'
require('./style/home.css')

const Home = () =>{
    return (
        <div className="HomeContainer">
            <div className="Write-Container">
                <h1>write</h1>
            </div>
            <div className="Write-Container">
              <h1>Anything</h1>    
            </div>
            <div className="Write-Container">
                <h1>Anywhere</h1>
            </div>
        </div>
    )
}

export default Home