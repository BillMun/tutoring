import React from 'react'
import "../../scss/splash.scss"

export default function Contact (){
    return(
        <div id='wrapper'>
            <div className='splashContainer'>
                <div className='contactUsText'>
                    <h4>For questions or to schedule tutoring services, please reach us at:</h4>
                    <a href='mailto:ZetaMathTutoring@gmail.com'>ZetaMathTutoring@gmail.com</a>
                    <br/>
                    <br/>
                    <a href='tel:434-249-1330'>434-249-1330</a>
                </div>
            </div>
        </div>
    )
}