import React from 'react';
import '../Services/Services.css';

const Services = () => {
  return (
    <div className='services'>
      <div className='services-container'>
        <div className='service-1'>
          <i class='fa-solid fa-truck'></i>
          <span>Free & Fast Deliver</span>
        </div>
        <div className='service-2'>
          <div>
            <i class='fa-solid fa-shield-halved'></i>
            <span>No Contact Delivery</span>
          </div>
          <div>
            <i class='fa-solid fa-right-left'></i>
            <span>7 Days Return Policy</span>
          </div>
        </div>
        <div className='service-3'>
          <i class='fa-solid fa-lock'></i>
          <span>Secure Pyament Method</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
