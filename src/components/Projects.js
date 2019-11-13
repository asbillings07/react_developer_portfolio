import React from 'react'
import styled from 'styled-components'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
import { data } from '../data'

export function Projects() {
  const showProjects = () => {
    return data.projects.map(project => (
      <StyledCol md={4} key={project.id}>
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

  return (
    <Container>
      <Row>{showProjects()}</Row>
    </Container>
  )
}

const StyledCol = styled(Col)`
  padding: 0em 7em;
`
const ProjectCard = styled(Card)`
  width: 25rem;
`
