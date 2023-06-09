import React from 'react';

import { teamData } from '../data';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, } from '../variants';



const Team = () => {
  const { pretitle, title, sub1, sub2, name, occupation, signatureImg, chefImg } = teamData;
  return (
    <section className='w-full lg:top-[480px]  top-[130vh] md:top-[170vh] lg:min-h-[1170px] min-h-[1520px] relative '>
      <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="container min-h-[720px] mx-auto">
        <div className='flex flex-col items-center
          lg:gap-x-[48px] lg:flex-row'
        >
          {/* text  */}
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.6)} className=' text-center lg:text-left xl:text-left '>
            <div className='text-accent text-lg font-semibold mb-2'>{pretitle}</div>
            <h2 className='h2 font-semibold text-4xl lg:text-7xl capitalize mb-2'>{title}</h2>
            <div className='max-w-[540px] mx-auto lg:mx-0 mb-16'>{sub1}</div>

            <div className='max-w-[540px] mx-auto lg:mx-0 mb-16'>{sub2}</div>
            <div className='my-[26px]'>
              <div className='text-accent font-semibold text-2xl capitalize'>{name}</div>
              <div className='text-[15px] font-semibold capitalize text-grey/70'>{occupation}</div>
            </div>

            <img className='mx-auto lg:mx-0 mb-3' src={signatureImg} alt="signature" />


          </motion.div>

          {/* img  */}
          <motion.div variants={fadeIn('up', 'tween', 0.7, 1.6)} className='flex-1  '>
            <img src={chefImg} alt="chef image" />
          </motion.div>
        </div>

      </motion.div>

    </section>

  );
};

export default Team;
