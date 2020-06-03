import React from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './ResumeComp.css'

function ResumeComp() {
    return(
        <div class="jumbotron">
            <h1 class="display-3">Dennis Dayan</h1>
            <h3 class="display-8">555-810-5973 | dennisdayanwork@gmail.com</h3>
            <p class="lead">Work Experience:</p>
            <p class="fourTitle">Four Springs Capital Trust (July 2019 - August 2019)</p>
            <p class="fourDesc">At Four Springs, I learned the intricies of the financial market while working with cutting edge technology</p>
            <p class="infoTitle">InfoAge (February 2020 - Present)</p>
            <p class="infoDesc">At InfoAge I am responsible for the upkeep and safety of some of the most rare computers and mainframes in existence</p>
            <p class="lead">Personal Recommendations:</p>
            <p class="woz">"One of the most revolutionary computer scientists of our time"</p>
            <p class="wozA">Steve Wozniak</p>
            <p class="bezo">"The one man I couldn't take down"</p>
            <p class="bezoA">Jeff Bezos</p>
            <p class="ari">"Slightly irritating"</p>
            <p class="ariA">No one ever</p>
            <h4 class="oneMoreThing">Use the the navigation bar to find out more</h4>


        </div>
    );
}
export default ResumeComp;