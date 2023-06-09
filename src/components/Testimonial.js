import React from 'react';

import TestimonialCarousel from './TestimonialCarousel';

import { testimonialData } from '../data';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, } from '../variants';



const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;
  return (
    <section className=' bg-testimonial bg-cover bg-no-repeat top-[500px] lg:top-0 xl:top-0 
     relative z-10 h-[800px] pt-[60px] md:pt-[120px]'>
      <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.5 }} className='container h-[800px] mx-auto'>
        {/* text  */}
        <motion.div variants={fadeIn('up', 'tween', 0.2, 1.6)} className='flex flex-col items-center text-center'>
          <h2 className='h2 text-white'>{title}</h2>
          <p className='mb-8 text-white/70 capitalize'>{subtitle}</p>
          <div className='mb-12'>
            <img src={modelImg} alt="" />
          </div>
        </motion.div>

        {/* testimonial  */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          className='flex justify-center items-center'
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>

      </motion.div>


    </section>
  );
};

export default Testimonial;
