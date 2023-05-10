import React from "react";
import { Link } from "react-router-dom";

export default function Splash(){

    return(
        <div className="splash">
            <h1>
             Zeta Math Tutoring
            </h1>
            <div>
                <h4>
                    Specializing in imparting a deep understanding and passion for Mathematics
                </h4>
            </div>
   
                <div className="splashAbout">
                    <Link id='profilePhoto' to='/about'>
                        <img id='photo' src="/BillProfile.jpg" alt="a photo of Bill Munkacsy"/> 
                    </Link>
                    <p id="splashText"> 
                        Instructor Bill Munkacsy unlocks his student's potential in Mathematics through engagement and knowledge. 
                        {'\n'}
                        <p>
                        Subjects/Services Include:
                        </p>
                        <li>SAT/ACT Mathematics</li>
                        <li>GRE Mathematics</li>
                        <li>Algebra</li>
                        <li>Algebra II</li>
                        <li>Algebra III</li>
                        <li>Pre-Calculus</li>
                        <li>Calculus</li>
                        <li>Geometry</li>
                        <li>Euclidean Geometry</li>
                        <li>Middle School Mathematics</li>
                    </p>
                    
                </div>

        </div>
    )
}