import React from "react";

export default function AboutMe (){
    return(
        <div className="aboutContainer">
            <h1>
                Bill Munkacsy
            </h1>
            <div className="aboutMeContainer">
            <p id='aboutMeText'>
                Bill Munkacsy earned a Bachelor of Science in Mathematics from UC Davis in 2006. 
                Since then Bill has taught High School and Middle School math in public schools for 12 years. Bill currently holds a Virginia Teaching Certificate. 
            </p>
            <img id='photoAbout' src='/LinkedInProfilePhoto.JPG' alt='A photo of Bill Munkacsy'/>
            </div>
        </div>
    )
}