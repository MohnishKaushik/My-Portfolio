import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/portfolio-logo-black-and-white.png';
import cv from '../assets/img/icons8-resume-96.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className='navbar-text'>
              <div className="social-icon">
              <a href="https://drive.google.com/file/d/10X6gN9NrnTuAXtsry-Ij7cXz6vnG1xki/view?usp=drivesdk" target="_blank"><img src={cv} alt="" /></a>
                <a href="https://www.linkedin.com/in/mohnish6398/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/MohnishKaushik" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="/#" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
              
                <button className="vvd"><span>Let’s Connect</span></button>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
