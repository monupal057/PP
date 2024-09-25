import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {

    const social = [
        {
          link: 'https://www.linkedin.com/in/monu-pal-825808201/',
          icon: <FaLinkedinIn/>,
        },
        {
          link: 'https://github.com/monupal057',
          icon: <AiFillGithub/>,
        },
        {
          link: 'https://www.instagram.com/monupal057/?hl=en',
          icon: <FaInstagram/>,
        }
      ]
      
    return (
        <footer className='md:flex md:px-10 lg:flex bg-white dark:bg-slate-800 text-black dark:text-white lg:px-48 px-4 py-5 justify-between border-t border-slate-800'>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>Copyright © 2024. All rights are reserved</h2>
                </div>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2  uppercase'>Contact</h2>
                        <a href="mailto:chiragjain.jain7@gmail.com" className='text-[16px]  hover:text-fuchsia-800 transition-all duration-150 ease-in-out cursor-pointer'>Email: monupal057@gmail.com</a>
                        <p className='text-[16px] pb-5 hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>Phone: +91-9910867168</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
                        <div className='flex space-x-4'>
                            {social.map((social, index) => (
                                <a key={index} target="_blank" href={social.link} className=' hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px]'>
                                    {social.icon}
                                </div>                    
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
