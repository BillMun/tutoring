import React from "react";
import "../../scss/splash.scss"

export default function Services (){
    return(
        <div class='wrapper' id="footer">
            <div>
            <h1>Services Offered</h1>
            <ul>
                <li>One-on-one tutoring as support for a middle, high school, or college class</li>
                <li>SAT math and GRE math prep</li>
                <li>Math enrichment outside of classes</li>
                <li>Designing and teaching customized individual or home school group classes</li>
                <li>Group tutoring</li>
            </ul>
            <p>Bill offers tutoring in his home in Charlottesville, the central public library downtown, or for an additional travel fee, in the student's home.</p>
            <h1>Prices</h1>
            <p>For one-on-one tutoring:</p>
            <ul>
                <li id='footerItem'>$35/half hour </li>
                <li id='footerItem'>$65/hour</li>
            </ul>
            <p>Please contact Bill regarding design/group rates.</p>
            </div>
        </div>
    )
}