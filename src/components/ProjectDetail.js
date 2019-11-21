import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { data } from '../data'
import styled from 'styled-components'

export function ProjectDetail ({ match }) {
  const { id } = match.params
  const project = data.projects[id]

  const nextProject = (match, props) => {
    const { id } = match.params
    const { projects } = data
    if (id >= 0 && id < projects.length - 1) {
      window.location.href = `/project/${+id + 1}`
    }
  }
  const prevProject = (match, props) => {
    const { id } = match.params
    const { projects } = data
    if (id < projects.length - 1 && id > 0) {
      window.location.href = `/project/${+id - 1}`
    }
  }

  return (
    <Container>
      <Row>
        <Col md={9}>
          <h1>{project.project_name}</h1>
          <h3>{project.description}</h3>
        </Col>
      </Row>
      <Row>
        <ProjectCol md={8}>
          {project.image_urls.map((imageSrc, i) => (
            <ProjectImage
              src={imageSrc}
              alt={`${project.project_name}`}
              key={i}
            />
          ))}
        </ProjectCol>
        <Col md={3}>
          <StyledTopButton block href={project.github_link} target='_blank'>
            GitHub Repo
          </StyledTopButton>
          <StyledBottomButton block href={project.live_link} target='_blank'>
            Live Link
          </StyledBottomButton>
          <StyledNextButton
            variant='info'
            block
            onClick={() => nextProject(match)}
          >
            Next Project
          </StyledNextButton>
          <StyledPrevButton
            variant='info'
            block
            onClick={() => prevProject(match)}
          >
            Previous Project
          </StyledPrevButton>
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
const StyledNextButton = styled(Button)`
  margin-top: 30px;
  color: ${props => (props.primary ? 'info' : 'danger')};
`
const StyledPrevButton = styled(Button)`
  margin-bottom: 30px;
  color: ${props => (props.primary ? 'info' : 'danger')};
`
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 2px 2px;
`
const ProjectCol = styled(Col)`
  margin-right: 20px;
`
// turn color red when it gets to end
