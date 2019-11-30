import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { data } from '../data'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles(theme => ({
  Title: {
    marginTop: 25
  },
  Button: {
    marginBottom: 20,
    marginRight: 20
  }
}))

export const ProjectDetail = ({ match }) => {
  const { id } = match.params
  const project = data.projects[id]

  const nextProject = match => {
    const nextButton = document.getElementById('next')
    const { id } = match.params
    const { projects } = data
    if (id >= 0 && id < projects.length - 1) {
      window.location.href = `/project/${+id + 1}`
    } else {
      nextButton.disabled = true
    }
  }
  const prevProject = match => {
    const prevButton = document.getElementById('prev')
    const { id } = match.params
    const { projects } = data
    if (id <= projects.length - 1 && id > 0) {
      window.location.href = `/project/${+id - 1}`
    } else {
      prevButton.disabled = true
    }
  }
  const classes = useStyles()
  return (
    <Container>
      <br />
      <Row>
        <Col md={9}>
          <Typography variant='h1' color='textPrimary'>
            {project.project_name}
          </Typography>
          <br />
          <Typography variant='h4' color='textSecondary'>
            {project.description}
          </Typography>
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
          <Fab
            onClick={() => prevProject(match)}
            {...(match.params.id === 0 ? 'disabled' : '')}
            className={classes.Button}
            id='prev'
            aria-label='previous'
          >
            <ArrowBackIosIcon />
          </Fab>
          <Fab
            onClick={() => nextProject(match)}
            className={classes.Button}
            id='next'
            aria-label='next'
          >
            <ArrowForwardIosIcon className={classes.extendedIcon} />
          </Fab>
          <Button
            size='large'
            className={classes.Button}
            variant='contained'
            color='primary'
            href={project.github_link}
            target='_blank'
          >
            GitHub Repo
          </Button>
          <Button
            size='large'
            className={classes.Button}
            variant='contained'
            color='primary'
            href={project.live_link}
            target='_blank'
          >
            View Project
          </Button>
          <h3>Technologies</h3>
          {project.technologies.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

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
