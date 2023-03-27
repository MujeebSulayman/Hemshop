import React from 'react';
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>Category</h1>
          <span className='spanLink'>Men</span>
          <span className='spanLink'>Women</span>
          <span className='spanLink'>Shoes</span>
          <span className='spanLink'>Accessories</span>
          <span className='spanLink'>New Arrival</span>
          <span className='spanLink'>Trending</span>
        </div>
        <div className='item'>
          <h1>Links</h1>
          <span className='spanLink'>FAQs</span>
          <span className='spanLink'>Sitemap</span>
          <span className='spanLink'>Pages</span>
          <span className='spanLink'>Stores</span>
          <span className='spanLink'>Compare</span>
          <span className='spanLink'>Cookies</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
