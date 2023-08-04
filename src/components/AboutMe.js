import React from "react";
import "../../scss/splash.scss"

export default function AboutMe (){
    return(
        <div className="wrapper">
            <h1 id='aboutTitle'>
                Experience & Teaching Philosophy
            </h1>
            <div className="splashContainer">
                <div className='aboutMeText'>
                    <p className='title'>Professional Experience</p>
                    <p>
                    Bill Munkacsy earned a Bachelor of Science in Mathematics from UC Davis. Bill has lived in the Charlottesville area for over 10 years.
                        <br/>
                        <br/>
                        He taught at Albemarle High School, Fluvanna County High School, and Buford Middle school for a total of 12 years. Bill holds a current Virginia Teaching License.
                    </p>

                    <p className='title'>Teaching Philosophy</p>
                    <div>
                    <p>
                    Students learn and master math topics through concepts, challenging problems, and stretching their current understanding.
                        <br/>
                        <br/>
                        Learning from textbooks or online programs often leads to an incomplete understanding. Students benefit from skilled teachers who can answer their questions and help with challenges at every step.
                        <br/>
                        <br/>
                        There are many levels of understanding a math concept:
                    </p>
                     
                        <ul>
                            <li>Early on, proper notation and organized writing and problem solving improve comprehension</li>
                            <li>  Creating figures and recognizing patterns allows students to go deeper into a concept</li>
                            <li>Students explore edge cases and create their own functions and problems around a concept</li>
                            <li>They start to see how the concept applies in their own lives and experience and can articulate it.</li>
                        </ul>
                     
                        <br/>
                        <br/>
                        Example questions for students:
                        <ul>
                            <li>What is a linear function?</li>
                            <li>How are they written in their general form? </li>
                            <li>What are other ways you can write them?</li>
                            <li>What do they look like graphed?</li> 
                            <li>Why do they look that way?</li>
                            <li> How and where is the concept of linear used in science?</li>
                            <li>Where do you see linear functions in your life?</li>
                            
                        </ul>
                    </div>
            </div>
                <img className='photo' id='aboutPhoto' src='/LinkedInProfilePhoto.jpg' alt='A photo of Bill Munkacsy'/>
            </div>
        </div>
    )
}