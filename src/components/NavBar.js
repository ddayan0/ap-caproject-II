import React from 'react';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './NavBar.css' 
// navbar app function!
// lets hope this works!

function NavBar() {
    return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Dennis Dayan</a>
        <ul class="nav-item active">
            <a class="nav-link" href="/resume">Resume</a>
        </ul>
        <ul class="nav-item active">
            <a class="nav-link" href="/academics">Academics</a>
        </ul>
        <ul class="nav-item active">
            <a class="nav-link" href="/skills">Skills</a>
        </ul>
        <ul class="nav-item active">
            <a class="nav-link" href="/interests">Interests</a>
        </ul>
    </nav>
    );
}

export default NavBar;