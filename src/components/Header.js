import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

import LogoWhite from '../assets/img/header/logo-white.png';

import Nav from './Nav';
import Social from './Socials';


const headerVariant = {
  hidden: {
    padding: '84px 0',
    background: 'none',
  },

  show: {
    padding: '14px 0',
    background: 'rgba(0,0,0,0.3)',
    transition: {
      type: 'spring',
      duration: 0.5,
    }
  }
}

const navVariant = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
      duration: 140,
      stiffness: 300,
    }
  },

  show: {
    clipPath: 'circle(130% at 50% 0)',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
    }
  }
}


const Header = () => {

  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <motion.header
      variants={headerVariant}
      initial='hidden'
      animate={isActive ? 'show' : ''}
      className='fixed w-full top-0 py-4 z-30'
    >
      <motion.div variants={staggerContainer} initial='hidden' animate={'show'} className='h-full container mx-auto '>
        <div className='w-full h-full flex justify-between relative items-center text-white p-x-4 lg:p-0'>

          {/* menu button */}
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1.4)}
            onClick={() => setNav(!nav)}
            className={`${nav ? 'gap-y-0' : 'gap-y-2'}  w-12 h-12 rounded-full p-3 order-2 lg:order-none 
            flex flex-col items-center justify-center cursor-pointer border-white border-2`}
          >

            <motion.div
              className='h-[2px] w-full bg-white'
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
            >
            </motion.div>

            <motion.div
              className='h-[2px] w-full bg-white'
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0, }}
            >
            </motion.div>

          </motion.div>

          {/* logo  */}
          <motion.div variants={fadeIn('down', 'tween', 1.2, 1.4)} className='order-1 lg:order-none lg:ml-[5rem]'>
            <a href="/">
              <img
                src={LogoWhite}
                alt="logo"
                className={`${isActive ? 'w-[90px] h-[90px]' : 'w-[107px] h-[107px]'} transition-all duration-100`}

              />
            </a>
          </motion.div>

          {/* social  */}
          <div className='hidden lg:flex xl:flex'>
            <Social />

          </div>

          {/* nav  */}
          <motion.div
            variants={navVariant}
            initial='hidden'
            animate={nav ? 'show' : ''}
            className='bg-accent absolute h-[55vh] w-[240px] lg:w-[280px] bottom-0 rounded-xl shadow-xl top-[90px]
             right-0 lg:left-0 xl:left-0'
          >
            <Nav />
          </motion.div>




        </div>

      </motion.div>

    </motion.header>
  );
};

export default Header;
