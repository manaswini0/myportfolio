import React,{ useState } from "react";


import './header.css';
import {Link} from "react-router-dom";
import {Button} from "./button";
import git_logo from "./GitHub-Mark-64px.png"
import linkedin_logo from "./LI-In-Bug.png"
import insta from "./Instagram_Glyph_Gradient_RGB.png"
import insta1 from "./glyph-logo_May2016.png"
import myPic from "./my_pic.jpeg";


function Header() {
    return (
        <div className = "header-container">
            <div className = "name-container">
            Manaswini Burugupalli
                <a href="https://www.linkedin.com/in/manaswini-burugupalli/">
                <img alt = "profile" id = "profile_pic" src = {linkedin_logo} width="60" height="60" align="right" />
                </a>
                <a href="https://github.com/manaswini0">
                <img alt = "profile" id = "profile_pic" src = {git_logo} width="60" height="60" align="right" />
                </a>
                <a href="https://www.instagram.com/wordsbymanu/">
                <img alt = "profile" id = "profile_pic" src = {insta1} width="60" height="60" align="right" />
                </a>

            </div>


        </div>

    );
}

export default Header;

