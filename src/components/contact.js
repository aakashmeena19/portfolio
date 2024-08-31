import React from 'react'
import './contact.css'
import linkedin from '../assets/linkedinportfolio.png'
import Instagram from '../assets/instaportfolio.png'
import Github from '../assets/githubpotfolio.png'
import Faceboook from '../assets/facebookportfolio.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ms8kpqa', 'template_htxadhh', form.current, {
        publicKey: 'w76JVTSp5k2uVqQGW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
   <section id ='contact'>
<div id ='social'>

<h1 className='socialTitle'>Social</h1>
<p className='socialDesc'>Here you can connect with me on my social media</p>

<div className='socialImgs'>

<a href='https://www.linkedin.com/in/aakash-meena-081227322/'><img src = {linkedin} alt ='Social' className='socialImg'/></a>
<a href='https://www.instagram.com/aakash_meena1234/'><img src = {Github} alt ='Social' className='socialImg'/></a>


<a href='https://www.instagram.com/aakash_meena1234/'><img src = {Instagram} alt ='Social' className='socialImg'/></a>
<a href='https://www.instagram.com/aakash_meena1234/'><img src = {Faceboook} alt ='Social' className='socialImg'/></a>




</div>

</div>
<div id ='contactPage'>
    <h1 className='contactTitle'>Contact</h1>
    <span className='contactDesc'>Feel free to contact me</span>

    <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type='text' name='from_name'className='name' placeholder='Your Full Name'required/>
        <input type='email' name='your_email'className='email' placeholder='Your Email'/>
        <textarea className='msg' name='message'rows = "5" placeholder='Your Message'></textarea>
        <button type = "submit" value="Send" className='submitBtn' onClick={()=>{alert('Your Form is Submitted')}}>Submit</button>





    </form>



</div>




</section>
  )
}

export default contact
