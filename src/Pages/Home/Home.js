import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
       <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="https://ik.imagekit.io/vasu/IMG_20230611_180927_(300_x_330_pixel).jpg?updatedAt=1715109222175" alt="User" />
        </div>
        <div className="about-text">
          <div className="type-animate">
          <h2>Hi.. This is Vasudevan</h2>
          </div>
          <p>
          Passionate Frontend Developer with expertise in HTML, CSS, JavaScript, and React. Committed to creating engaging and user-friendly web experiences. Proficient in building responsive and dynamic websites while adhering to modern web standards. Strong problem-solving skills and a keen eye for design. Dedicated to continuous learning and staying updated with the latest technologies.
          </p>
          <a href="https://drive.google.com/file/d/1ASvrO6EezAGDnn39e7Yvw8R6Mdfyhzlb/view?usp=sharing" target='blank' className="resume-button">
            Download Resume
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home