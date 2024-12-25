import {useState, useEffect} from "react"
import{Navbar,Container,Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import navIcon4 from "../assets/img/nav-icon4.svg"
import { HashLink } from 'react-router-hash-link'
import {
  BrowserRouter as Router
} from "react-router-dom"

export const NavBar=()=>{
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScroll] = useState(false)

    useEffect(()=>{
        const onScroll=()=>{
         if(window.scrollY > 50){
            setScroll(true)
         }
         else{
            setScroll(false)
         }
        }
        window.addEventListener("scroll",onScroll)
        return()=>window.removeEventListener("scroll",onScroll)
    })
    const onUpdateActiveLine=(value)=>{
          setActiveLink(value)
    }
    return(
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="nav-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLine('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skills'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLine('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink==='projects'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLine('projects')}>Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/sanjay-kumar-k-49bb722a5/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/SANJAY-KUMAR06"><img src={navIcon4} alt=""/></a> 
                <a href="https://www.instagram.com/_sanjay_k06_?utm_source=qr&igsh=cGd0NnU1NXVkYTBu"><img src={navIcon3} alt=""/></a> 
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>  
    )
}