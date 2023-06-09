import React from 'react';

import { heroData } from '../data';
import Header from './Header';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';


const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData;
  return (
    <div className='bg-pink bg-hero min-h-[980px] w-full bg-cover bg-right '>
      <Header />
      <div className='mx-auto container min-h-[980px] flex justify-center items-center'>
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden" whileInView={'show'}
          className='h-full w-full flex flex-col justify-center text-center items-center'
        >
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className='text-xl italic text-white font-primary lg:font-medium '>
            {pretitle}
          </motion.div>
          <motion.h1 variants={fadeIn('down', 'tween', 0.3, 1.1)} className='h1 mb-5'>
            {title}
          </motion.h1>
          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className='max-w-[500px] text-white  text-md mb-8 '>
            {subtitle}
          </motion.p>
          <motion.button variants={fadeIn('down', 'tween', 0.5, 1.1)} className='btn'>
            {btnText}
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
