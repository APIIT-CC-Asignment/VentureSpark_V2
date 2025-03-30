'use client';

import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

function MenuLink({ mobile = false }) {
  return (
    <nav className={`${mobile ? 'flex flex-col items-center space-y-3 w-full' : 'flex items-center space-x-6'}`}>
      <MenuItem linktext="Home" linkurl="/" mobile={mobile} />
      <MenuItem linktext="About" linkurl="/about" mobile={mobile} />
      <MenuItem linktext="Services" linkurl="/booking" mobile={mobile} />
      <MenuItem linktext="Contact" linkurl="/contact" mobile={mobile} />
    </nav>
  );
}

export default MenuLink;