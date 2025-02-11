import React from 'react'
import "./Demo.css";
import Profile from "../assets/Testimonial.png"
import { FaInstagram } from "react-icons/fa6";

function Demo() {
  return (
    <>
    <div>
    {/* <!-- Navbar Section. --> */}
     <nav className="navbar">
        <div className="logo">John Doe<FaInstagram /></div>
        <div className="nav-links">
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
     </nav>

     {/* <!-- Header Section. --> */}
      <header id="home">
        <h1>Hi, I'm John Doe</h1>
        <p>MERN STACK DEVELOPER | FULLSTACK EXPERT</p>
      </header>

        {/* <!-- About Section. --> */}
         <section className="about" id="about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>I am a passionate full stack developer</p>
                    <p>My goal is to continously learn and improve my skills</p>
                    <p>i'm currently working at GUVI</p>
                </div>
                <div className="about-img">
                    <img src={Profile} alt="About Image" />
                </div>
            </div>
         </section>

         {/* <!-- Skills Section. --> */}
          <section className="skills" id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                <div className="skill-card"><i className="fa-brands fa-html5"></i>HTML</div>
                <div className="skill-card"><i className="fa-brands fa-css3-alt"></i>CSS</div>
                <div className="skill-card"><i className="fa-brands fa-js"></i>JAVASCRIPT</div>
                <div className="skill-card"><i className="fa-brands fa-react"></i>REACT</div>
                <div className="skill-card"><i className="fa-brands fa-node"></i>NODE.JS</div>
                <div className="skill-card"><i className="fa-solid fa-database"></i>MONGODB</div>
            </div>
          </section>

          {/* <!-- Project Section. --> */}
           <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <img src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" alt="Project Image" />
                <h3>E-commerce Website</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, temporibus!</p>
                <div className="project-button">
                    <a href="live" className="btn"><i className="fa-solid fa-link"></i>Live Demo</a>
                    <a href="github" className="btn"><i className="fa-brands fa-github"></i>Source Code</a>
                </div>
            </div>
           </section>

           {/* <!-- Contact Section. --> */}
            <section className="contact" id="contact" />
                <h2>Contact Me</h2>
                <form action="#" />
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                <form/>
                <div className="social-links">
                    <a href="https://github.com/Thiru-cse" target="_blank"><i className="fa-brands fa-github"></i>Github</a>
                    <a href="https://in.linkedin.com/"><i className="fa-brands fa-linkedin"></i>LinkedIN</a>
                </div>
            <section/>
            </div>
    </>
  )
}

export default Demo