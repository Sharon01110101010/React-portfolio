import React from 'react'
import './portfolio.css'
import APT from '../../assets/APT.pdf'
import AWA from '../../assets/AWA.pdf'
import Stark from '../../assets/Stark.pdf'
import UPenn_sfn_ab from '../../assets/UPenn_sfn_ab.pdf'
import Enhancing from '../../assets/Enhancing.pdf'
import Twist1 from '../../assets/Twist1.pdf'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.jpg'
import IMG3 from '../../assets/p3.png'
import IMG4 from '../../assets/p4.jpg'
import IMG5 from '../../assets/p5.jpg'
import IMG6 from '../../assets/p6.jpg'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// PROJECT

const data = [
    {
        id: 1,
        image: IMG5,
        webtitle: 'Platt lab',
        title: 'Predicting Entrepreneurial Pitch Success Using Behavioral, Textual, and EEG Neuroforecasting',
        PDF: UPenn_sfn_ab,
        Web: "https://plattlabs.rocks/"
    },
    {
        id: 2,
        image: IMG6,
        webtitle: 'EC CS',
        title: 'Enhancing the Detection of Alzheimer\'s Disease Using Magnetic Resonance Imaging Data through Convolutional Neural Networks. ',
        PDF: Enhancing,
        Web: "https://cs.earlham.edu/"
    },
    {
        id: 3,
        image: IMG4,
        webtitle: 'Michale Lerner',
        title: 'Prioritizing Cancer Drug Targets with Monte Carlo Simulations of Network Diffusion',
        PDF: Twist1,
        Web: "https://earlham.edu/faculty-staff/michael-lerner/"
    },
    {
        id: 4,
        image: IMG1,
        webtitle: 'Human Fussion',
        title: 'Transducing Slow and Fast Tactile Feedback Using FSR and Piezo Sensors for Sensory Prostheses',
        PDF: APT,
        Web: "https://case.edu/humanfusions/"
    },
    {
        id: 5,
        image: IMG2,
        webtitle: 'EC CS',
        title: 'Heuristics reserach on Anytime Weighted A* (AWA*) algorithm with cost units in Korfs puzzles domain. ',
        PDF: AWA,
        Web: "https://cs.earlham.edu/"
    },
    {
        id: 6,
        image: IMG3,
        webtitle: 'Yadav lab',
        title: 'Sensory Discrimination Via Spinal Cord Stimulation Induced Artificial Sensation In Rodents',
        PDF: Stark,
        Web: "https://yadavlabs.com/"
    }
]
// {
//     id:5,
//     image: IMG3,
//     webtitle: 'Human Fussion',
//     title: 'Studying Sensory Discrimination Via Spinal Cord Stimulation Induced Artificial Sensation In Rodents',
//     PDF: Stark,
//     Web:"https://yadavlabs.com/"
// },

// {
//     id:6,
//     image: IMG3,
//     webtitle: 'Human Fussion',
//     title: 'Studying Sensory Discrimination Via Spinal Cord Stimulation Induced Artificial Sensation In Rodents',
//     PDF: Stark,
//     Web:"https://yadavlabs.com/"
// },

// {
//     id:4,
//     image: IMG3,
//     webtitle: 'Human Fussion',
//     title: 'Studying Sensory Discrimination Via Spinal Cord Stimulation Induced Artificial Sensation In Rodents',
//     PDF: Stark,
//     Web:"https://yadavlabs.com/"
// }

const Portfolio = () => {
    console.log("Portfolio Data:", data);
    return (
        <section id='portfolio'>
            <h5> My Recent Research</h5>
            <h2> Project</h2>

            <div className="container portfolio__container">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.portfolio__arrow_right',
                        prevEl: '.portfolio__arrow_left',
                        clickable: true,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper"
                >
                    {
                        data.map(({ id, image, webtitle, title, PDF, Web }) => {
                            return (
                                <SwiperSlide key={id} className='portfolio__item'>
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={webtitle} />
                                    </div>
                                    <h3> {title}</h3>
                                    <div className="portfolio__item-cta">
                                        <a href={PDF} download className='btn'> Download pdf</a>
                                        <a href={Web} className='btn btn-primary' target='_blank' rel='noreferrer'>Website</a>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="portfolio__arrow portfolio__arrow_left">
                        <BsArrowLeftCircleFill />
                    </div>
                    <div className="portfolio__arrow portfolio__arrow_right">
                        <BsArrowRightCircleFill />
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

// const Portfolio = () => {
//     return (
//         <section id='portfolio'>
//             <h5> My Recent Research</h5>
//             <h2> Project</h2>

//             <div className="contanier portfolio__contanier">
//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG1} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={APT} download className='btn'> Download pdf</a>
//                         <a href="https://case.edu/humanfusions/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>
//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG2} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={AWA} download className='btn'> Download pdf</a>
//                         <a href="https://earlham.edu/faculty-staff/sofia-lemons/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>

//                 </article>

//                 <article className='portfolio__item'>
//                     <div className="portfolio__item-image">
//                         <img src={IMG3} alt=''/>
//                     </div>
//                     <h3> This is a project title</h3>
//                     <div className="portfolio__item-cta">
//                         <a href={Stark} download className='btn'> Download pdf</a>
//                         <a href="https://yadavlabs.com/" className='btn btn-primary' target='_bland'>Website</a>
//                     </div>

//                 </article>
//             </div>
//         </section>
//     )
// }

export default Portfolio





