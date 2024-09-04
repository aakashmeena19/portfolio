import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/Akashportfoliologo.jpg'
import Contact from '../assets/WhatsApp Image 2024-08-17 at 11.18.07_23380a60.jpg'
import Menu from '../assets/newnavbaar.png'
import{ Link } from 'react-scroll'

function Navbar() {

  const[showMenu, setShowMenu] = useState(false);
  return (
  <nav className='navbar'>
    <img src = {Logo} alt = "logo" className='logo'/>

    <div className='nav-links'>

    <Link activeClass="active" to='intro0' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-items'>Home</Link>
    <Link activeClass="active" to='about' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-items'>About</Link>
    <Link activeClass="active" to='project' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-items'>Project</Link>
    <Link activeClass="active" to='social' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-items'>Social</Link>

    </div>
    <button class = "btn" onClick={() => {document.getElementById('contactPage').scrollIntoView({behaviour: 'smooth'})}}>
    <img src ={Contact} alt='Contact Me'  className='btnImg'/>Contact Me! </button>

    <img src = {Menu}alt = "Menu"className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>

    <div className = 'navMenu' style={{display:showMenu? 'flex': 'none'}}>
      
    <Link activeClass="active" to='intro0' spy = {true} smooth = {true} offset={-100} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}> Home </Link>
    <Link activeClass="active" to='about' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item'onClick={() => setShowMenu(false)}>About</Link>
    <Link activeClass="active" to='project' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item'onClick={() => setShowMenu(false)}>Project</Link>
    <Link activeClass="active" to='social' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item'onClick={() => setShowMenu(false)}>Social</Link>
    <Link activeClass="active" to='contactPage' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item'onClick={() => setShowMenu(false)}>Contact</Link>


    </div>

  </nav>
  )
}

export default Navbar
