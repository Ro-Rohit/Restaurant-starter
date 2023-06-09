import React from 'react';

import { navData } from '../data';


const Nav = () => {
  return (
    <nav className='w-full py-4 h-full flex flex-col justify-center items-center text-center gap-y-4 overflow-hidden'>
      {
        navData.map((item, index) => {
          return (
            <div key={index} className='capitalize font-primary text-lg italic
             hover:text-dark transition-all duration-300'>
              <a href={item.href}>{item.name}</a>
            </div>
          )
        })
      }

    </nav>
  )
};

export default Nav;
