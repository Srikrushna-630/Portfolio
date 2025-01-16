import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import cb from "../../assets/cb.png"
import tti from "../../assets/tti.png"
import weather from "../../assets/weather.jpg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger }  from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function projects() {
useGSAP(() => {
  gsap.from("#para ",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 30%"
    }
  })
  gsap.from(".slider ",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
      start:"top 80%",
      end:"top 30%"
    }
  })
})

  return (
    <div id='projects'>
      <h1 id='para'>FRESHER</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSIATANT" image={va}/>
        <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
        <Card title="AI CHATBOT" image={cb}/>
        <Card title="AI TEXT TO IMAGE" image={tti}/>
        <Card title="WEATHER APP"image={weather}/>
      </div>
    </div>
  )
}

export default projects
