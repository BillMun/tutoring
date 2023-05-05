import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Splash from './components/Splash'

const App = () =>{
    return(
        <div id='main'>
            <Routes>
                <Route index element ={<Splash/>}/>
            </Routes>
       </div>
    )
}

export default App