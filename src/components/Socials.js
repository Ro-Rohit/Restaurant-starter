import React from 'react';

import { socialData } from '../data';


const Socials = () => {
  return (
    <div className='flex gap-x-[20px]'>
      {socialData.map((item, index) => {
        return (
          <a className=' border rounded-full hover:text-accent border-white hover:border-accent-hover p-1 transition-all duration-200' key={index} href={item.href}>
            {item.icon}
          </a>
        )
      })}
    </div>
  );
};

export default Socials;
