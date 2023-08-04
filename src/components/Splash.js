import React from "react";
import { Link } from "react-router-dom";
import "../../scss/splash.scss"


export default function Splash(){

    return(
        <div className="wrapper">
            <h1>
             Zeta Math Tutoring
            </h1>
            <div>
                <h4>
                    Imparting a deep understanding and passion for mathematics
                </h4>
            </div>
                <div className="splashContainer">
                    <div className="contentContainer">
                    <Link to='/about'>
                        <img class='photo' id="splashPhoto" src="/BillProfile.jpg" alt="a photo of Bill Munkacsy"/> 
                    </Link>
                    <div>
                        <p id="splashText"> 
                        Instructor Bill Munkacsy unlocks his students' math potential through engagement and knowledge. 
                   
                        <p>
                        Math tutoring services in the Charlottesville, VA area include:
                        </p>
                        </p>      
                        <ul >
                            <li>SAT/ACT math</li>
                            <li>GRE math</li>
                            <li>Algebra</li>
                            <li>Algebra II</li>
                            <li>Algebra III</li>
                            <li>Pre-calculus</li>
                            <li>Calculus</li>
                            <li>Geometry</li>
                            <li>Euclidean geometry</li>
                            <li>Challenge problems</li>
                            <li>Project based learning</li>
                            <li>Problem solving strategies</li>
                        </ul>         
                
                    </div>
                    </div>
                </div>

        </div>
    )
}

