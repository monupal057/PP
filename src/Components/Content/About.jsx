import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
        Hello, I'm Monu Pal, a web developer with a passion for creating dynamic and user-centric applications. I hold a Bachelor’s degree in Electronic and Communication Engineering from Guru Tegh Bahadur Institute of Technology and have honed my skills in frontend technologies like React.js, Redux Toolkit, JavaScript, and Tailwind CSS. 
          <br />
          My experience spans developing responsive e-commerce and blog platforms, securing user authentication with Firebase, and integrating Stripe for seamless payments. Having worked with teams at SJSV Ventures and Pepcoding.
          <br />
          I continuously seek opportunities to innovate and optimize web solutions. Outside of coding, I enjoy exploring technology trends, mentoring, and enhancing my skills through continuous learning.
        </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About