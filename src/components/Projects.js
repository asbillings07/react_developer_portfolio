import React from 'react'
import styled from 'styled-components'
import { Col, Card, Button } from 'react-bootstrap'

export function Projects ({ data }) {
  const showProjects = () => {
    return data.projects.map(project => (
      <StyledCol lg={4} key={project.id}>
        <ProjectCard>
          <Card.Img variant='top' src={project.image_urls[0]} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button href={`/project/${project.id}`} variant='primary'>
              Go Here
            </Button>
          </Card.Body>
        </ProjectCard>
      </StyledCol>
    ))
  }

  return <>{showProjects()}</>
}

const StyledCol = styled(Col)`
  padding: 0em 7em;
`
const ProjectCard = styled(Card)`
  width: 25rem;
`
