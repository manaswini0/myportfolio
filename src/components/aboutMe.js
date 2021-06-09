import React,{ useState } from "react";


import './aboutMe.css';
import {Link} from "react-router-dom";
import {Button} from "./button";
import myPic from "./my_pic.jpeg";
import resume from "./5th June.pdf";

function AboutMe() {
    return (
        <div className = "about-container">
            <div className = "aboutme-container">
            <p>Hey there! Welcome!<br/>
                I am a Manaswini B from UB. I am a senior majoring in computer science. I love to code and design. Please feel free to explore my portfolio.
                I also write to express my feelings. I have linked my instagram account with my writings, have a look if you can and drop your thoughts in the comment section. Lastly feel free to connect using any social media site links I have linked.Thanks!

            </p>
                <div className = "info-container">
                <img alt = "profile" id = "profile_pic" src = {myPic} width="500" height="500" align="right" />
                    <div className = "resume-container">
                        <a href = {resume} target="_blank">
                My Resume
                        </a>

                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>


                    <br/>
                    <br/>
                    My Projects
                    </div>
                    <div className = "heading-container">
                    <p>
                        Curator
                    </p>
                    </div>
                    <p>
                        What is Curator?<br/>
                        An application which enables users to share and curate music.
                        A unique amalgamation of Spotify and Instagram. Curator lets you share almost from 5 million songs.
                        <br/>
                        <br />
                        How was it built?<br/>
                        The project was built using the Agile methodoligies with keeping users needs in mind and not compromising on any aspect of the project.
                        A robust UI/UX was designed using Figma and a webapp was built using react. Later, a mobile version of the same app was built using react native.

                    </p>
                    <p>
                        <div className = "heading-container">
                        Ping Pong Game<br/><br/>
                        </div>
                        A simple yet elegant fun game of ping pong.<br/>
                        <br/>
                        How was it built?<br/>
                        Based on a robust python framework called pygame which makes the simple game of ping-pong robust.
                    </p>
                    <p>
                        <div className = "heading-container">
                            IO-ChatApp<br/><br/>
                        </div>
                        A chat app based on IO sockets which lets people communicate in real time.<br/>
                        <br/>
                        How was it built?<br/>
                        The chat app was built based on the flask framework in python using sockets to connect users in real time.
                        The frontend was designed using JavaScript and Jquery.
                    </p>


                </div>
            </div>
        </div>

    );
}

export default AboutMe;

