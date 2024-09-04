import React from 'react'
import './Intro.css'
import img from '../assets/WhatsApp Image 2024-08-21 at 19.55.04_d42bbf69.jpg'
import reactImg from '../newassets/r.png'

function Intro() {
  return (<section id='intro0'>
    <div className='intro'>
        <h2>Hello,</h2>
        <br></br>
        <h1>I'm <span className='akash'>Akash</span></h1>
        <br></br>
      <h3 className='welcome'> Welcome to my portfolio! </h3>
      
      <h6>I’m passionate about full-stack development, where I craft seamless<br></br> and dynamic web applications from start to finish. </h6>
      <h6>Full-stack development involves working on both the front-end and<br></br> back-end of web projects, combining a diverse skill set to deliver complete, functional solutions.</h6>
       <a href='https://www.linkedin.com/in/akash-meena-081227322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' class = "introBtn">
    <img src ={img} alt='Contact Me'  className='btnImg' />Hire Me! </a> 


    </div>
<div className='mobilediv'>
    <img src={reactImg} className='logo2' alt = "raact img"/>
    </div>
    </section>
   
    
  )
}

export default Intro
