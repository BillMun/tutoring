import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import "../../scss/navBar.scss"


export default function NavBar () {
    return(
    <div className="navbar">
        <div className="leftNav">
            <span id='logo'>ζ</span>
            <span id='name'>Zeta Math Tutoring</span>
        </div>
        <div className="rightNav">
            <Link id='navItem' to='/'>Home</Link>
            <Link id='navItem' to='/about'>About Bill</Link>
            <Link id='navItem' to='/services'>Services</Link>
            <Link id='navItem' to='/contact'>Contact & Schedule</Link>
        </div>
    </div>
    )
}