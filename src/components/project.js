import React from 'react';
import './project.css';
import task from '../assets/aaa/image.png';
import landing from '../newassets/image.png';
import smcet from '../newassets/aaa/image.png';

function Project() {
  const projects = [
    {
      title: "Landing Page Portfolio",
      desc: "A personal portfolio website built with ReactJS and TailwindCSS showcasing my skills, work, and contact.",
      img: landing,
      live: "https://landing-page-peach-two.vercel.app",
      github: "https://github.com/aakashmeena19/landing_page.git"
    },
    {
      title: "QuickTask – AI Task Manager",
      desc: "Full-stack MERN task manager app integrated with OpenAI API for smart suggestions and task handling.",
      img: task,
      live: "#",
      github: "https://github.com/aakashmeena19"
    },
    {
      title: "SMCET College Website",
      desc: "A complete responsive college website created for SMCET using React and TailwindCSS with a professional UI.",
      img: smcet,
      live: "https://smcet.vercel.app/",
      github: "https://github.com/aakashmeena19/smcet.git"
    },
  ];

  return (
    <section className="projects" id="project">
      <h2 className="projectTitle">My Projects</h2>
      <p className="projectDesc">
        Projects that demonstrate my skills in React, Node.js, MongoDB, and AI integration.
      </p>

      <div className="projectGrid">
        {projects.map((proj, index) => (
          <div className="projectCard" key={index}>
            <img src={proj.img} alt={proj.title} className="projectImg" />
            <div className="projectInfo">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="projectLinks">
                <a href={proj.live} target="_blank" rel="noreferrer" className="btnLive">🔗 View Live</a>
                <a href={proj.github} target="_blank" rel="noreferrer" className="btnCode">💻 GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
