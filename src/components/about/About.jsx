import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {RiFolderChartFill} from 'react-icons/ri'
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';


/* ============= version 3 -- header in about blue ================= */


// const About = () => {
//     return (
//       <>
//         {/* Header Section */}
//         <div className="container header__container">
//           <h5>Hello, I'm</h5>
//           <h1>Sharon Wong</h1>
//           <h5 className="text-light">Student at Earlham College</h5>
//           <CTA />
//           <HeaderSocials />
//         </div>
  
//         {/* About Section */}
//         <section id="about">
//           <div className="container about__container">
//             <div className="about__me">
//               <div className="about__me-image">
//                 <img src={ME} alt="About Image" />
//               </div>
//             </div>
  
//             <div className="about__content">
//               <p>
//               I am a rising senior at Earlham College, pursuing a double major in Computer Science and Neuroscience. This year, I am applying to Ph.D. programs with a keen interest in neuroengineering and human-computer interface research. My academic journey has provided me with a strong interdisciplinary foundation that I am excited to build upon in graduate studies. Thank you for visiting my website. If you have any questions or would like to discuss my research interests further, please feel free to email me or send a message through the contact form. I look forward to connecting with you!
//             </p>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };
  
//   export default About


/* ============= version 4 copy sw ================= */

const About = () => {
  return (
    <>

      {/* About Section */}
      <section id="about">
         <h5>Get To Know </h5>
          <h2> About Me</h2>
          <CTA />
          <HeaderSocials/>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
        
          <div className="about__content">

            <p>
            I am a rising senior at Earlham College, pursuing a double major in Computer Science and Neuroscience. This year, I am applying to Ph.D. programs with a keen interest in neuroengineering and human-computer interface research. My academic journey has provided me with a strong interdisciplinary foundation that I am excited to build upon in graduate studies. Thank you for visiting my website. If you have any questions or would like to discuss my research interests further, please feel free to email me or send a message through the contact form. I look forward to connecting with you!
          </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
