import React from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
// im not even bothering to change the classNames and make a CSS file for this
// just more wasted code, not necessary!
function AcademicsComp(){
    return (
        <div class="jumbotron">
            <h1 class="display-3">Academics</h1>
            <h3 class="display-8">Red Bank Regional High School | GPA: 95</h3>
            <p class="lead">Notable Classes:</p>
            <p class="fourTitle">AP Computer Science Principles</p>
            <p class="fourDesc">AP CS P taught me the intricate basics and the foundations of computer science while challenging me with an AP class in my freshman year</p>
            <p class="infoTitle">Honours Computer Science 2</p>
            <p class="infoDesc">H CS 2 taught me Python and laid the groundwork for other languages such as Java</p>
            <p class="infoTitle">AP Computer Science A</p>
            <p class="infoDesc">AP CS A taught me Java and how to be a better programmer in general.</p>
            <p class="lead">Notable Accomplishments:</p>
            <p class="woz">No. 1 Cyberpatriot team in New Jersey</p>
            <p class="bezo">No. 1 FBLA Computer Problem Solving score</p>
            <p class="ari">Finishing top 100 nationwide in the Cyberpatriot semi-finals</p>


        </div>
    );
}

export default AcademicsComp;