import React from 'react'
import './About.css'
import Html from '../assets/IMG-20240816-WA0011.jpg'
import css from '../assets/IMG-20240816-WA0012.jpg'
import js from '../assets/IMG-20240816-WA0009.jpg'
import java from '../newassets/IMG-20240822-WA0012.jpg'
import github from '../newassets/IMG-20240822-WA0010.jpg'
import nodejs from '../newassets/IMG-20240822-WA0011.jpg'
import mongodb from '../newassets/IMG-20240822-WA0014.jpg'
import bootstrap from '../newassets/IMG-20240822-WA0016.jpg'
import reactlogo from '../newassets/IMG-20240822-WA0015.jpg'
import expressjs from '../assets/pngwing.com.png'

function About() {
  return (
    <div className='aboutshadow'>
      <section id='about'>
        <span className='aboutTitle'>What I Know</span>
        <span className='aboutDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and responsive websites.</span>

        <div className='aboutBars'>

          {[ // Skill Data Array
            { img: Html, title: 'HTML', desc: 'HyperText Markup Language' },
            { img: css, title: 'CSS', desc: 'Cascading Style Sheets' },
            { img: js, title: 'JavaScript', desc: 'JS for Web Logic' },
            { img: github, title: 'GitHub', desc: 'Code Hosting Platform' },
            { img: nodejs, title: 'Node.js', desc: 'JavaScript Runtime' },
            { img: expressjs, title: 'Express.js', desc: 'Backend Framework' },
            { img: mongodb, title: 'MongoDB', desc: 'NoSQL Database' },
            { img: bootstrap, title: 'Bootstrap', desc: 'CSS Framework' },
            { img: reactlogo, title: 'React.js', desc: 'Frontend Library' },
            { img: java, title: 'Java', desc: 'OOP Language' },
          ].map((skill, index) => (
            <div className='aboutBar' key={index}>
              <img src={skill.img} alt={skill.title} className='aboutBarImg' />
              <div className='aboutBarText'>
                <h2>{skill.title}</h2>
                <p>{skill.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

export default About
