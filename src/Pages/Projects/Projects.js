import React from 'react'
import './Projects.css'
import { projectData } from './ProjectData'

const Projects = () => {
  return (
   <>
      <h1>Projects</h1>
      <div className="projects">
        {projectData.map(project => (
          <div key={project.id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-card__image"
            />
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">
              {project.description}
            </p>
            <div className='button-projects'>
              <a href={project.demo_link} target='blank'>View Demo</a>
              <a href={project.code_link} target='blank'>Code</a>
            </div>
          </div>
        ))}
      </div>
   </>
  )
}

export default Projects