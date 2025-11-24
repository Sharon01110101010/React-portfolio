// import React from 'react'
// import './header.css'
// import CTA from './CTA'
// // import ME from '../../assets/me.jpg'
// import HeaderSocials from './HeaderSocials'


/* ============= version 1 header  ================= */
// const Header = () => {
//     return (
//         <header>
//             <div className="contanier header__container">
//                 <h5> Hello I'm </h5>
//                 <h1>Sharon Wong </h1>
//                 <h5 className="text-light">Studnet in Earlham College </h5>
//                 <CTA />
//                 <HeaderSocials/>
//                 {/* <div className="me">
//                     <img src={ME} alt="me" />
//                 </div> */}

//                 <a href="#contact" className='scroll__down'>Scroll Down</a>
//             </div> 
//         </header>
        
//     )
// }
// export default Header


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

/* ============= version 2 header raw  ================= */
// const Header = () => {
//     return (
//         <header>
//         </header>
        
//     )
// }
// export default Header


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
                        .typeString("Ph.D. student in Biomedical Engineering.")
                        .pauseFor(1200)
                        .deleteChars(40)
                        .typeString("creator")
                        .pauseFor(1000)
                        .deleteChars(9)
                        .typeString("tinker")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("I'm Sharon Wong <br>")
                        .pauseFor(1000)
                        .typeString("Neuroprosthetics Researcher")
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