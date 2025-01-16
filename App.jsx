
import Nav from "./components/Nav/Nav"
import Home from "./components/home/home"
import About from "./components/About/about"
import Projects from "./components/projects/projects"
import Contact from "./components/Contact/Contact"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger }  from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function App() {
  useGSAP(() => {
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 20%"
      }
    })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".aboutdetails ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".rightabout ",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
  })
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App;
