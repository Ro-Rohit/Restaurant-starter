import React from 'react';

import { aboutData } from '../data';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, plateVariants } from '../variants';

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className='min-h-[620px]'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='container mx-auto min-h-[620px]'
      >
        {/* text  and img wrapper */}
        <div className='min-h-[620px] flex flex-col lg:-mb-[90px] lg:flex-row xl:flex-row relative'>

          {/* text  */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className='flex-1 text-center lg:text-left xl:text-left'>
            <div className='font-medium text-xl text-accent mb-2'>
              {pretitle}
            </div>

            <h2 className='h2 capitalize text-black mb-4'>
              {title}
            </h2>

            <p className='max-w-[560px] lg:mx-0 mx-auto mb-6'>
              {subtitle}
            </p>

            <button className='btn capitalize lg:mx-0 mx-auto'>
              {btnText}
            </button>


          </motion.div>

          {/* img  */}
          <motion.div variants={plateVariants} className='-mr-[170px] mt-10  -mb-[200px] max-w-3xl  z-10'>
            <img src={image} alt="img" />
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};

export default About;
