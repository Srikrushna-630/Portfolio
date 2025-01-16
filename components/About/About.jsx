import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"

function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          {/* <div className="line"></div> */}
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : SRIKRUSHNA PADHI
              </li>
              <li>
<span>AGE</span> : 21 years
              </li>
              <li>
<span>GENDER</span> : MALE
              </li>
              <li>
<span>LANGUAGE</span> : HINDI,ENGLISH,ODIA
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
<span>DEGREE</span> : MCA
              </li>
              <li>
<span>BRANCH</span> : COMPUTER APPLICATION
              </li>
              <li>
<span>CGPA</span> : 9.1
              </li>
              
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
  MERN STACK WEB DEVELOPER
              </li>
              <li>
JAVA
              </li>
              <li>
DSA
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
        <Card title="JAVA"image={java}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
