import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './about.css'
// import ME from '../../assets/about-me.jpg'
import ME from '../../assets/bc.png'
import {FaAward} from 'react-icons/fa'
import {RiFolderChartFill, RiLoopLeftFill} from 'react-icons/ri'
import Typewriter from 'typewriter-effect';

/* ============= version 3 header typewritter  ================= */
const Header = () => {
    return (
        <header>
            {/* Header Section */}
            <div className="Typeef">
                <Typewriter 
                onInit = {(typewriter) => {
                    typewriter
                        .typeString("Hello I'm a ")
                        .typeString("Undergraduate")
                        .pauseFor(1000)
                        .deleteChars(13)
                        .typeString("Developer")
                        .pauseFor(1000)
                        .deleteChars(9)
                        .typeString("Researcher")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm Sharon Wong <br>")
                        .pauseFor(1000)
                        .typeString("Neuroscience & Comp Sci Researcher")
                        .start();
                    }}
                />

            </div>
            <div className="me">
                <img src={ME} alt="me" />
            </div> 

        </header>
        
    )
}
export default Header