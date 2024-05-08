// import React from 'react'
// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
// import './testimonials.css'



// import PHO1 from '../../assets/t1.jpg'
// import PHO2 from '../../assets/t2.jpg'
// import PHO3 from '../../assets/t3.jpg'
// import PHO4 from '../../assets/t4.jpg'
// import { useState } from "react"
 

// const data = [
//   {
//     photo: PHO1,
//     title : 'Stark Neuroscience Sympothesis'
//   },
//   {
//     photo: PHO2,
//     title : 'Dr. Amol P. Yadav lab'
//   },

//   {
//     photo: PHO3,
//     title : 'APT center Sympothesis with my mentors'
//   },

//   {
//     photo: PHO4,
//     title : 'APT center Sympothesis with Dr. Dustin Tyler'
//   }
  
// ]

// const testimonials = () => {
//   const [slide, setSlide] = useState(0);

//   const nextSlide = () => {
//     setSlide (slide === data.length - 1 ? 0: slide +1);

//   };

//   const prevSlide = () => {
//     setSlide (slide === 0 ? data.length - 1 : slide -1);

//   };



//   return (
//     <section id='testimonials'>
//   <h5> In Conference</h5>
//   <h2> Photo Gallary</h2>

//   <div className="container testimonials__container">
//     <BsArrowLeftCircleFill className='arrow arrow_left' onClick={prevSlide}/>
//     {
//     data.map(({photo,title},index) => {
//       return(
//         <div className={slide === index ? "slide": "slide slide_hidden"}>
//           <img src={photo} key={index}/>
//           <h5 className='photo__title'>{ title }</h5>
//         </div>);
    
            
//     })}
//     <BsArrowRightCircleFill className='arrow arrow_right' onClick={nextSlide}/>
//     <span className='indicators'>
//       {data.map((_, index) => {
//         return (
//           <button key ={index} onClick = { () => setSlide(index)} className={ slide === index ? "indicator": "indicator indicator_inactive"}></button>
//         );
//       })}
//     </span>



//   </div>
//   </section>

// )};


// export default testimonials


import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './testimonials.css';

import PHO1 from '../../assets/t1.jpg';
import PHO2 from '../../assets/t2.jpg';
import PHO3 from '../../assets/t3.jpg';
import PHO4 from '../../assets/t4.jpg';

const data = [
  {
    photo: PHO1,
    title: 'Stark Neuroscience Symposium',
  },
  {
    photo: PHO2,
    title: 'Dr. Amol P. Yadav Lab',
  },
  {
    photo: PHO3,
    title: 'APT Center Symposium with My Mentors',
  },
  {
    photo: PHO4,
    title: 'APT Center Symposium with Dr. Dustin Tyler',
  },
];

// Use PascalCase for component naming
const Testimonials = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <section id="testimonials">
      <h5>In Conference</h5>
      <h2>Photo Gallery</h2>

      <div className="container testimonials__container">
        <BsArrowLeftCircleFill className="arrow arrow_left" onClick={prevSlide} />
        {data.map(({ photo, title }, index) => (
          <div className={slide === index ? 'slide' : 'slide slide_hidden'} key={index}>
            <img src={photo} alt={title} />
            <h5 className="photo__title">{title}</h5>
          </div>
        ))}
        <BsArrowRightCircleFill className="arrow arrow_right" onClick={nextSlide} />
        <span className="indicators">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={slide === index ? 'indicator' : 'indicator indicator_inactive'}
            />
          ))}
        </span>
      </div>
    </section>
  );
};

export default Testimonials;
