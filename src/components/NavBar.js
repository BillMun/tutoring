import React from "react";
import {Link, useNavigate} from 'react-router-dom'


export default function NavBar () {
    return(
    <div className="navbar">
        <div>
            <span id='logo'>ζ</span>
            <span id='name'>Zeta Math Tutoring</span>
        </div>
        <div >
            <Link id='navItem' to='/'>Home</Link>
            <Link id='navItem' to='/about'>About Bill</Link>
        </div>
    </div>
    )
}