import React from 'react'
import './project.css'
import poster from '../newassets/WhatsApp Image 2024-08-22 at 13.09.08_f102bac0.jpg'
import currency from '../newassets/WhatsApp Image 2024-08-23 at 09.06.31_723bb35c.jpg'
import net from '../newassets/WhatsApp Image 2024-08-23 at 09.06.30_bf334095.jpg'
function project() {
  return (
  <section id = "project">

<h2 className='projectTitle'>My Project</h2>
<span className='projectDesc'>Here are my project</span>



<diV className="project-item">
    <div className='item-details'>
        <p className='P1'>Project-1</p>
        <p className='P2'>Amazon Clone</p>
    </div>
<a href='#'><img src={poster} alt="project-1" className='projectImg'/></a>
</diV>



<diV className="project-item">
    <div className='item-details'>
        <p className='P1'>Project-2</p>
        <p className='P2'>Currency Converter</p>
    </div>
<a href='#'><img src={currency} alt="project-1" className='projectImg'/></a>
</diV>



<diV className="project-item">
    <div className='item-details'>
        <p className='P1'>Project-3</p>
        <p className='P2'>NETFLIX Clone</p>
    </div>
<a href='#'><img src={net} alt="project-1" className='projectImg'/></a>
</diV>



  </section>
  )
}

export default project
