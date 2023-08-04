import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Splash from './components/Splash'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import "../scss/styles.scss"
import Services from './components/Services'
import Footer from './components/Footer'

const App = () =>{
    const location = useLocation()
    const hideFooter = location.pathname === "/contact"
    return(
        <div id='main'>
            <NavBar/>
            <Routes>
                <Route index element ={<Splash/>}/>
                <Route path={'/about'} element={<AboutMe/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/services'} element={<Services/>}/>
            </Routes>
            {!hideFooter && <Footer/>}
       </div>
    )
}

export default App