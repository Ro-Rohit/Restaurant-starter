import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../slider.css';

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className='w-full max-w-[1024px] mx-auto flex items-start justify-center'
    >
      {slider.map((item, index) => {
        const { image, message, name, occupation } = item;
        return (
          <div key={index} className='max-w-[840px] mx-auto  px-12 -mt-[5px] lg:mt-0 lg:px-24 text-white'>
            <div className='text-md lg:text-xl xl:text-xl leading-snug mb-9'>{message}</div>
            <div className='max-w-[70px] rounded-full lg:max-w-[100px] xl:max-w-[100px] mx-auto'>
              <img src={image} alt="" />
            </div>

            <div className='font-bold text-[22px] text-accent'>{name}</div>
            <div className='font-medium italic'>{occupation}</div>

          </div>
        )
      })}


    </Carousel>
  );
};

export default TestimonialCarousel;
