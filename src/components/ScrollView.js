import React from 'react'
import { Carousel } from 'react-bootstrap'

export function ScrollView ({ projects }) {
  return (
    <Carousel pauseOnHover>
      {projects.map(project => (
        <Carousel.Item key={project.id}>
          <a href={`/project/${project.id}`}>
            <img
              className='d-block w-100'
              src={project.image_urls[0]}
              alt='Project'
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
