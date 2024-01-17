import React from 'react';
import '../Contact/Contact.css';
import { useAuth0 } from '@auth0/auth0-react';

const Contact = () => {
  const { user, isAuthenticated, } = useAuth0();
  return (
    <>
      <div className='contact'>
        <h2>Contact Us</h2>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52615730924!2d76.76359131018171!3d28.643684667357803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1702577506062!5m2!1sen!2sin'
          width='100%'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='contact'></iframe>

        <div className='contact-contaier'>
          <div className='contact-form'>
            <form action='https://formspree.io/f/xjvnbbrp' method='POST'>
              <input
                type='text'
                placeholder='username'
                name='username'
                required
                autoComplete='off'
                value={isAuthenticated ? user.name : ''}
              />

              <input
                type='email'
                name='Email'
                placeholder='Email'
                autoComplete='off'
                required
                value={isAuthenticated ? user.email : ''}
              />
              <textarea
                name='Message'
                id=''
                cols='30'
                rows='10'
                required
                autoComplete='off'
                placeholder='Enter our message'></textarea>
              <input type='submit' value='Send' className='btn submit' />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
