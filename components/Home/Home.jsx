import React from 'react'
import"./Home.css"
import me from "../../assets/me.jpg"
import TypingEffect from"react-typing-effect"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
useGSAP(() => {
  let tl1 = gsap.timeline();
  tl1.from(".line1",{
    y:100,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:100,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:100,
    duration:1,
    opacity:0
  })
  gsap.from(" .righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
  
})

const handleHireMeClick = () => {
  window.location.href = 'mailto:your-srikrushnapadhi630@gmail.com?subject=Hire%20Me&body=Hello%2C%20I%20am%20interested%20in%20hiring%20you.';
};

  return (
    <div id="home">
     <div className="lefthome">
      <div className="homedetails">
        <div className="line1">I'M</div>
        <div className="line2">SRIKRUSHNA PADHI</div>
        <div className="line3">
          <TypingEffect
          text={["SOFTWARE DEVELOPER" , "WEB DEVELOPER"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={1000}
          typingDelay={500}
          cursor='/'
          />
        </div>
        <button onClick={handleHireMeClick}>HIRE ME</button>
      </div>
      </div> 
    <div className="righthome">
      <img src={me} alt="" />
    </div>
    </div>
  )
}

export default Home;
