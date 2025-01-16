import React, { useRef } from 'react'
import "./Nav.css"
import{Link} from "react-scroll"
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

function Nav() {
    let menu = useRef();
    let mobile = useRef();

useGSAP(() => {
let tl = gsap.timeline();
tl.from("nav h1",{
  y:-100,
  duration:1,
  opacity:0
})
tl.from("nav ul li",{
  y:-100,
  duration:1,
  opacity:0,
  stagger:0.2
});
});
  return (
    <div>
      <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to='home' smooth={true} activeClass='active' spy={true} 
            duration={500} ><li>Home</li></Link>
            <Link to='about'smooth={true} activeClass='active' spy={true} 
            duration={500}><li>About</li></Link>
            <Link to='projects'smooth={true} activeClass='active' spy={true}
            duration={500}><li>Projects</li></Link>
            <Link to='contacts'smooth={true} activeClass='active' spy={true}
            duration={500}><li>Contacts</li></Link>

        </ul>
        <div className="hamburger" ref={menu} onClick={() =>{
            mobile.current.classList.toggle("activemobile");
            menu.current.classList.toggle("activeham")
        }
        }>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
        <ul className='mobilemenu' ref={mobile}>
            <Link to='home' smooth={true} activeClass='active' spy={true} 
            duration={500} ><li>Home</li></Link>
            <Link to='about'smooth={true} activeClass='active' spy={true} 
            duration={500}><li>About</li></Link>
            <Link to='projects'smooth={true} activeClass='active' spy={true}
            duration={500}><li>Projects</li></Link>
            <Link to='contacts'smooth={true} activeClass='active' spy={true}
            duration={500}><li>Contacts</li></Link>

        </ul>
      </nav>
    </div>
  );
}

export default Nav;
