import React from 'react';
import '../Footer/Footer.css';
import { CiInstagram } from 'react-icons/ci';
import { CiYoutube } from 'react-icons/ci';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div>
          <span>Ready to get started?</span>
          <span>Talk to us Today</span>
        </div>
        <button className='btn footer-btn'>GET STARTED</button>
      </div>
      <div className='footer2'>
        <div className='inner-div'>
          <div>
            <h3>Sh_karan</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
          </div>
          <div>
            <h3>Subscribe to get important updates</h3>
            <input type='text' />
            <button className='btn'>Subscribe</button>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className='socials'>
              <CiInstagram className='insta' />
              <CiYoutube className='youtube' />
              <FaDiscord className='discord' />
            </div>
          </div>
        </div>
        <hr />

        <div className='copy-right'>
          <h3>@2023 Sh._.Karan All Rights Are Reserved </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
