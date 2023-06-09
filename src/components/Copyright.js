import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn, } from '../variants';

const Copyright = () => {
  return (
    <motion.div variants={fadeIn('up', 'tween', 0.2, 1.6)} initial='hidden' whileInView={'show'} className='w-full border-t border-white/20'>
      <div className='container mx-auto'>
        <div className='text-center py-5'>
          <p>Copyright &copy; 2022 Bistro Cafe. All rights reserved </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Copyright;
