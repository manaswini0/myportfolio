import React,{ useState } from "react";
// import button
import {Link} from "react-router-dom";

import './navbar.css';
import click from "@testing-library/user-event";
import {Button} from "./button";
// import {Button} from "./button.js";

function Navbar() {
    const [click,setClick] = useState(false);
    const HandleClick =() => setClick(!click);
    const closeMobileMenu  =() => setClick(false);
    const [button,setButton] = useState(true);

    const showButton =()=>{
        if (window.innerWidth<=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <nav className = "navbar">
            <div className="navbar-container">
                <Link to="/" className = "navbar-logo">
                    <center>MANASWINI BURUGUPALLI </center>
                </Link>
                <div className='menu-icon' onClick={HandleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className = 'nav-item'>
                        <Link to ='/' className = 'nav-links' onClick ={closeMobileMenu} >
                            Home
                        </Link>

                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/services' className = 'nav-links' onClick ={closeMobileMenu} >
                           Services
                        </Link>

                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/products' className = 'nav-links' onClick ={closeMobileMenu} >
                            Products
                        </Link>

                    </li>
                    <li className = 'nav-item'>
                        <Link to ='/sign-up' className = 'nav-links-mobile' onClick ={closeMobileMenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    );
}

export default Navbar;
