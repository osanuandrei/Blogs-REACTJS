
import React from 'react';

const Footer = () => {
  var today = new Date();
  return (
    <footer className='Footer'>
      <p>CopyRight &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
