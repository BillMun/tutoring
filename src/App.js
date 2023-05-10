import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Splash from './components/Splash'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'

const App = () =>{
    return(
        <div id='main'>
            <NavBar/>
            <Routes>
                <Route index element ={<Splash/>}/>
                <Route path={'/about'} element={<AboutMe/>}/>
            </Routes>
       </div>
    )
}

export default App