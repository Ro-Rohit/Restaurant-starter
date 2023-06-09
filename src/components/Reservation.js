import React, { useState } from 'react';

import { reservationData } from '../data';

import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, } from '../variants';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import TimePicker from 'react-time-picker';
import '../timepicker.css';

import { FaUser, FaCalendar, FaClock } from 'react-icons/fa';

const Reservation = () => {
  const { title, subtitle, modelImg, btnText } = reservationData;
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  console.log(currentDate);
  const [value, setValue] = useState('10:00');
  return (

    <section className='relative pb-20 top-[85vh]  lg:top-0 xl:top-0 z-30'>
      <div className='container mx-auto'>
        {/* text  */}
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} className='text-center'>
          <motion.h2
            variants={fadeIn('up', 'tween', 0.2, 1.6)}
            className='h2 capitalize'
          > {title}
          </motion.h2>

          <motion.p variants={fadeIn('up', 'tween', 0.4, 1.6)} className='text-dark mb-8'>{subtitle}</motion.p>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className='flex mb-4 justify-center items-center'>
            <img src={modelImg} alt="" />
          </motion.div>

        </motion.div>

        <motion.form variants={fadeIn('up', 'tween', 0.8, 1.6)} initial='hidden' whileInView={'show'}>
          <div className='flex flex-col lg:flex-row gap-y-4 mb-8 justify-between items-center'>

            {/* date  */}
            <div>
              <div className='flex gap-x-[12px] font-semibold items-center text-dark text-base'>
                <FaCalendar />
                <div>choose Date</div>
              </div>
              <DatePicker className='input text-dark' selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            {/* time  */}
            <div>
              <div className='flex gap-x-[12px] font-semibold items-center text-dark text-base'>
                <FaClock />
                <div>choose Time</div>
              </div>
              <TimePicker className='input' value={value} onChange={setValue} clearIcon={false} clockIcon={false} />
            </div>

            {/* person num  */}
            <div>
              <div className='flex gap-x-[12px] font-semibold items-center text-dark text-base'>
                <FaUser />
                <div>How many People?</div>
              </div>
              <input type="text" className='input' placeholder='1' />
            </div>

          </div>

          {/* button  */}
          <div className='max-w-[316px] mx-auto'>
            <button className='btn capitalize w-full lg:w-auto'>Make a Reservation</button>
          </div>
        </motion.form>

      </div>

    </section>

  );
};

export default Reservation;






