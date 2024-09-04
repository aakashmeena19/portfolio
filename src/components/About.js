import React from 'react'
import './About.css'
import Html from '../assets/IMG-20240816-WA0011.jpg'
import css from '../assets/IMG-20240816-WA0012.jpg'
import js from '../assets/IMG-20240816-WA0009.jpg'
import java from '../newassets/IMG-20240822-WA0012.jpg'
import cplus from '../newassets/IMG-20240822-WA0013.jpg'
import c from '../newassets/IMG-20240822-WA0009.jpg'
import github from '../newassets/IMG-20240822-WA0010.jpg'
import nodejs from '../newassets/IMG-20240822-WA0011.jpg'
import mongodb from '../newassets/IMG-20240822-WA0014.jpg'
import bootstrap from '../newassets/IMG-20240822-WA0016.jpg'
import reactlogo from '../newassets/IMG-20240822-WA0015.jpg'



function About() {
return (
    <div className='aboutshadow'>
    <section id ='about'>
       
        <span className='aboutTitle'>What I know</span>
{
          <span className='aboutDesc'>I am a skilled and passionate web designer with experience in creating in creating visually appealing.</span>
         
         }
         
        
        <div className='aboutBars'> 




            <div className='aboutBar'> 
                 <img src = {Html} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>HTML</h2>
                     <p>Hypertext Markup Language</p>
                 </div>
             </div>



             <div className='aboutBar'> 
                 <img src = {css} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>CSS</h2>
                     <p>Cascading Style Sheets</p>
                 </div>
             </div>



             <div className='aboutBar'> 
                 <img src = {js} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>JS</h2>
                     <p>JavaScript</p>
                 </div>
             </div>


             <div className='aboutBar'> 
                 <img src = {java} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>Java</h2>
                     <p>Java</p>
                 </div>
             </div>


             <div className='aboutBar'> 
                 <img src = {cplus} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>C++</h2>
                     <p>C++</p>
                 </div>
             </div>



             <div className='aboutBar'> 
                 <img src = {c} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>C</h2>
                     <p>C</p>
                 </div>
             </div>




             <div className='aboutBar'> 
                 <img src = {github} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>Git Hub</h2>
                     <p>Git Hub</p>
                 </div>
             </div>


             <div className='aboutBar'> 
                 <img src = {nodejs} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>Node JS</h2>
                     <p>Node Js</p>
                 </div>
             </div>


             

             <div className='aboutBar'> 
                 <img src = {mongodb} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>Mongo DB</h2>
                     <p>Mongo DB</p>
                 </div>
             </div>




             <div className='aboutBar'> 
                 <img src = {bootstrap} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>BootStrap</h2>
                     <p>BootStrap</p>
                 </div>
             </div>





             <div className='aboutBar'> 
                 <img src = {reactlogo} alt="html" className='aboutBarImg'/>
                 <div className='aboutBarText'>
                     <h2>React js</h2>
                     <p>React js</p>
                 </div>
             </div>
 



             </div>
           
   </section>
   </div>
  )
}

export default About
