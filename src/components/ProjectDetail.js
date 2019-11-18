import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { data } from '../data'
import styled from 'styled-components'

export function ProjectDetail ({ match }) {
  const { id } = match.params
  const project = data.projects[id]

  return (
    <Container>
      <Row>
        <Col md={9}>
          <h1>{project.project_name}</h1>
          <h3>{project.description}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={9}>
          {project.image_urls.map((imageSrc, i) => (
            <img
              src={imageSrc}
              alt={`${project.project_name}`}
              key={i}
              style={{ width: '100%', height: 'auto', margin: '20px' }}
            />
          ))}
        </Col>
        <Col md={3}>
          <StyledTopButton block href={project.github_link} target='_blank'>
            GitHub Repo
          </StyledTopButton>
          <StyledBottomButton block href={project.live_link} target='_blank'>
            Live Link
          </StyledBottomButton>
          <h3>Technologies</h3>
          {project.technologies.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

const StyledBottomButton = styled(Button)`
  margin-bottom: 30px;
`
const StyledTopButton = styled(Button)`
  margin-top: 30px;
`
// set img to width: 100%, height: auto
