import React from 'react';

import { footerData, } from '../data';

import NewsLetter from './Newsletter';
import CopyRight from './Copyright';
import Socials from './Socials';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, } from '../variants';

const Footer = () => {
  const { contact, hours, } = footerData;
  return (
    <footer className=' relative bg-dark lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-cover
     overflow-hidden   lg:min-h-[620px] lg:top-0  top-[90vh] md:min-h-[1290px] min-h-[200vh] '>
      <div className='container lg:h-[620px] mx-auto py-24'>
        {/* NewsLetter && info  */}

        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          className='h-full w-full flex items-center flex-col justify-center'
        >

          {/* newsletter  */}
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)} className='h-full w-full'><NewsLetter /></motion.div>

          {/* info  */}
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className='h-full mb-4 w-full mt-5'>
            <div className=' flex flex-col gap-y-5 lg:flex-row justify-between w-full'>

              {/* contact  */}
              <div className='flex-1 '>
                <div className='w-full lg:max-w-[170px]'>
                  <div className='captitalize text-[20px] lg:text-[22px] mb-4 text-white font-normal 
                  font-primary '>
                    {contact.title}
                  </div>
                  <div className='capitalize'>{contact.address}</div>
                  <div className='capitalize'>{contact.phone}</div>
                </div>
              </div>

              {/* program  */}
              <div className='flex-1 lg:max-w-[350px]'>
                <div className='capitalize font-primary font-normal text-white 
                  lg:text-[22px] text-[22px] mb-4'>
                  {hours.title}
                </div>
                <div className='flex flex-row gap-x-10  items-start'>
                  {
                    hours.program.map((item, index) => {
                      return (
                        <div key={index} >
                          <div>{item.days}</div>
                          <div className='font-medium text-accent'>{item.hours}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>

              {/* social  */}
              <div className='flex-1 flex flex-col  justify-start lg:items-center '>
                <div className='capitalize font-primary font-normal text-white 
                  lg:text-[22px] text-[22px] mb-4'>
                  Social Network
                </div>
                <div>
                  <Socials />
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>

        <CopyRight />
      </div>

    </footer>
  );
};

export default Footer;
