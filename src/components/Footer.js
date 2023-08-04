import React from "react";
import "../../scss/footer.scss"

export default function Footer ({hideFooter}){
    if(hideFooter){
        return null
    }
    return(

        <div className='footer'>
            <p>ζ Zeta Math Tutoring
            <br></br>

            Math Tutoring in the Charlottesville, VA area
            </p>
            <div>
                <span>Contact:</span>
                <a href="mailto:ZetaMathTutoring@gmail.com" className='footerItem'>ZetaMathTutoring@gmail.com</a>
                <a href="tel:434-249-1330" className='footerItem'>434-249-1330</a>
            </div>
        </div>
    )
}