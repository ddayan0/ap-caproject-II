import React from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
// im beyond the point of caring if inline styling is appropriate or not
// it renders, its fine
//...i hope
function SkillsComp(){
    return(
         <div class="jumbotron">
            <h1 class="display-3">Skills:</h1>
            <center>
            <p class="fourTitle">C++/C Programming</p>
            <p class="infoTitle">Java/Python Programming</p>
            <p class="infoTitle">ReactJS + General Web Development</p>
            <p class="infoTitle">x86_64 ASM Experience</p>
            <p class="infoTitle">NSA/Ghidra</p>
            <p class="infoTitle">Git + GitHub Deployment</p>
            <p class="infoTitle">SQL</p>
            <p class="infoTitle">Linux/Unix</p>
            </center> 



            
        </div>
    );
}

export default SkillsComp;