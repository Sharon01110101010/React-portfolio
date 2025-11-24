import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'
import { RiFolderChartFill } from 'react-icons/ri'
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';


/* ============= version 1 about   ================= */

// const About = () => {
//     return (
//         <section id='about'>
//             <h5>Get To Know </h5>
//             <h2> About Me</h2>
//             <div className="container about__container">
//                 <div className="about__me">
//                     <div className="about__me-image">
//                         <img src={ME} alt="About Image"/>
//                      </div>
//                 </div>
//                 <div className="about__content">
//                     <div className="about__cards">
//                         <article className='about__card'>
//                             <FaAward className='about__icon'/>
//                             <h5> Experience </h5>
//                             <small>3+ Years Reseraching </small>
//                         </article>
//                         <article className='about__card'>
//                             <RiFolderChartFill className='about__icon'/>
//                             <h5> Projects</h5>
//                             <small>Undergraded Reseasrch</small>
//                         </article>
//                     </div>
//                     <p>
//                     My name is Sharon Wong, and I am a rising junior at Earlham College, 
//                     pursuing a double major in Computer Science and Neuroscience.
//                     </p>

//                     <a href='#contact' className='btn btn-primary'>Let's Talk </a>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default About




/* ============= version 2 about raw  ================= */

// const About = () => {
//     return (
//         <section id='about'>
//         </section>
//     )
// }
// export default About


/* ============= version 3 -- about w/ download ================= */

const About = () => {
  return (
    <>

      {/* About Section */}
      <section id="about">
        <h5>Get To Know </h5>
        <h2> About Me</h2>
        <CTA />
        <HeaderSocials />
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">

            <p>
              I am a first-year Ph.D. student in Biomedical Engineering at Purdue University, working in Dr. Kevin Otto’s Neuroprosthesis Lab. My research focuses on the electrode–tissue interface, neural implants, and strategies to maintain long-term stability of chronic ultramicroelectrodes. With a background in Computer Science and Neuroscience from Earlham College, I am now expanding my training in neural engineering, electrochemistry, and bioelectronic medicine. Thank you for visiting my website. If you would like to connect or discuss my research, please feel free to reach out by email or through the contact form.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;




/* ============= version 4 -- header in about with type effect ================= */

// import React from 'react'
// import './about.css'
// import ME from '../../assets/about-me.jpg'
// import {FaAward} from 'react-icons/fa'
// import {RiFolderChartFill} from 'react-icons/ri'
// import './header.css';
// import CTA from './CTA';
// import HeaderSocials from './HeaderSocials';
// import Typewriter from 'typewriter-effect';

// const About = () => {
//   return (
//     <>
//       {/* Header Section */}
//       <div className="Typeef">
//         <Typewriter 
//           onInit = {(typewriter) => {
//             typewriter 
//             .typeString("Hello, I'm")
//             .pauseFor(1000)
//             .typeString("<h1>Sharon Wong</h1>") 
//             .start();
//           }}
//           />
//         < CTA />
//         <HeaderSocials />
//       </div>


//       <section id="about">
//         <div className="container about__container">
//           <div className="about__me">
//             <div className="about__me-image">
//               <img src={ME} alt="About Image" />
//             </div>
//           </div>

//           <div className="about__content">
//             <p>
//             I am a rising senior at Earlham College, pursuing a double major in Computer Science and Neuroscience. This year, I am applying to Ph.D. programs with a keen interest in neuroengineering and human-computer interface research. My academic journey has provided me with a strong interdisciplinary foundation that I am excited to build upon in graduate studies. Thank you for visiting my website. If you have any questions or would like to discuss my research interests further, please feel free to email me or send a message through the contact form. I look forward to connecting with you!
//           </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default About;

