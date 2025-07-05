import React, { useRef } from 'react';
import './contact.css';
import linkedin from '../assets/linkedinportfolio.png';
import Instagram from '../assets/instaportfolio.png';
import Github from '../assets/githubpotfolio.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ms8kpqa', 'template_htxadhh', form.current, {
        publicKey: 'w76JVTSp5k2uVqQGW',
      })
      .then(
        () => {
          alert('✅ Your form has been successfully submitted to Akash!');
          form.current.reset(); // Clear form after success
        },
        (error) => {
          alert('❌ Something went wrong. Please try again later.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <div id='social'>
        <h1 className='socialTitle'>Social</h1>
        <p className='socialDesc'>Here you can connect with me on my social media</p>

        <div className='socialImgs'>
          <a href='https://www.linkedin.com/in/akash-meena-081227322' target='_blank' rel='noopener noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='socialImg' />
          </a>
          <a href='https://github.com/aakashmeena19' target='_blank' rel='noopener noreferrer'>
            <img src={Github} alt='GitHub' className='socialImg' />
          </a>
          <a href='https://www.instagram.com/aakash_meena1234/' target='_blank' rel='noopener noreferrer'>
            <img src={Instagram} alt='Instagram' className='socialImg1' />
          </a>
        </div>
      </div>

      <div id='contactPage'>
        <h1 className='socialTitle'>Contact</h1>
        <span className='contactDesc'>Feel free to contact me</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' name='from_name' className='name' placeholder='Your Full Name' required />
          <input type='email' name='your_email' className='email' placeholder='Your Email' required />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' required />
          <button type='submit' className='submitBtn'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
