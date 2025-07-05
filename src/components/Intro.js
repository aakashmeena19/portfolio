import React from 'react';
import './Intro.css';
import img from '../assets/WhatsApp Image 2024-08-21 at 19.55.04_d42bbf69.jpg';
import reactImg from '../newassets/r.png';

function Intro() {
  return (
    <section id='intro0'>
      <div className='intro-container'>
        <div className='intro-text'>
          <h2 className='greeting'>Hi there! 👋</h2>
          <h3 className='tagline'>Full Stack Developer | MERN Stack Enthusiast</h3>

          <p className='intro-description'>
            I specialize in developing modern, responsive, and high-performance web applications using the MERN (MongoDB, Express, React, Node.js) stack.
            My expertise lies in building user-friendly interfaces on the frontend and integrating robust backend services that ensure efficiency and scalability.
          </p>

          <p className='intro-subtext'>
            With a keen eye for design and a solid understanding of system architecture, I love transforming complex problems into clean, elegant solutions. 
            Whether it's a startup idea or a professional product, I’m ready to bring it to life.
          </p>

          <a
            href='https://www.linkedin.com/in/akash-meena-081227322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            className='intro-button'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={img} alt='Hire Me' className='intro-avatar' />
            Hire Me!
          </a>
        </div>

        <div className='intro-graphic'>
          <img src={reactImg} alt='React Logo' className='react-logo' />
        </div>
      </div>
    </section>
  );
}

export default Intro;
