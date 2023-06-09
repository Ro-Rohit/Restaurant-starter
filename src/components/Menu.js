import React from 'react';

import { menuData } from '../data';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, } from '../variants';



const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;
  return (
    <section className='bg-pink-200 h-[768px] w-full'>
      {/* background  */}
      <div className='bg-menu h-[768px] w-full bg-cover bg-yellow-200 -z-0'>
        {/* text  */}
        <div className='relative top-72 lg:top-52'>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='container mx-auto flex flex-col items-center text-center'
          >
            {/* title  */}
            <motion.h2 variants={fadeIn('down', 'tween', 0.2, 1.6)} className='h2 text-white max-w-[400px] capitalize'>
              {title}
            </motion.h2>

            {/* subtitle  */}
            <motion.p variants={fadeIn('down', 'tween', 0.4, 1.6)} className='capitalize text-white/70 mb-8'>
              {subtitle}
            </motion.p>

            <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
              <img src={modelImg} alt="" />
            </motion.div>

          </motion.div>

        </div>

        {/* menu gallery  */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0, }}
          transition={{ type: 'tween', delay: 0.2, duration: 1.6, ease: 'easeOut' }}
          className='relative  top-80 lg:top-96'
        >
          <div className='container mx-auto'>
            <div className=' lg:-mt-24 min-h-[590px]  mb-8 z-30 md:mb-4 xl:mb-16'>
              <div className='grid grid-cols-1 lg:grid-cols-4'>
                {
                  menuItems.map((item, index) => {
                    const { image, name, price, description } = item;
                    return (
                      <div key={index}>
                        <div className='flex flex-row lg:flex-col h-full'>
                          {/* image  */}
                          <div className={`w-[45%] lg:h-[50%] xl:h-[50%] md:w-auto ${index % 2 === 0 ? 'lg:order-1' :
                            'order-none'} `}>
                            <img src={image} alt="" />
                          </div>

                          {/* text  */}
                          <div className='bg-[#fff3e4]  flex-1 flex flex-col justify-center px-6 
                            lg:p-12  xl:max-h-max '
                          >
                            <div className='text-center'>
                              <div
                                className='font-semibold text-xl xl:text-2xl  text-black'>
                                {name}
                              </div>

                              <div
                                className='text-accent text-[20px] font-semibold lg:text-[40px] 
                                my-1 lg:my-6 '
                              >
                                {price}
                              </div>

                              <div>{description}</div>

                            </div>
                          </div>


                        </div>

                      </div>
                    );
                  })
                }
              </div>
            </div>
            <button className='btn mx-auto capitalize'>{btnText}</button>
          </div>
        </motion.div>


      </div>

    </section>
  );
};

export default Menu;
