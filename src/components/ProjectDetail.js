import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Fab from '@material-ui/core/Fab'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { CloudinaryImage} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from "@cloudinary/react";
import { useAppContext } from '../store'

const useStyles = makeStyles(theme => ({
  Title: {
    marginTop: 25
  },
  Button: {
    marginBottom: 40,
    marginRight: 20
  },
  nextbutton: {
    marginBottom: 30,
    marginRight: 20,
    disabled: true
  },
  viewProject: {
    marginBottom: 50
  }
}))

export const ProjectDetail = ({ match, history }) => {

  const { id } = match.params
  const { projects } = useAppContext()

  const project = projects[id]

  const nextProject = match => {
    const nextButton = document.getElementById('next')
    const { id } = match.params
    if (id >= 0 && id < projects.length - 1) {
      history.push(`/project/${+id + 1}`)
    } else {
      nextButton.disabled = true
    }
  }

  const prevProject = match => {
    const prevButton = document.getElementById('prev')
    console.log(prevButton)
    const { id } = match.params
    if (id <= projects.length - 1 && id > 0) {
      history.push(`/project/${+id - 1}`)
    } else {
      prevButton.addClass('mui-disabled')
    }
  }
  const classes = useStyles()
  return (
    <Container>
      <br />
      <Row>
        <Col md={9}>
          <Typography variant='h5' color='textPrimary'>
            {project.project_name}
          </Typography>
          <br />
          <Typography variant='h6' color='textSecondary'>
            {project.description}
          </Typography>
        </Col>
      </Row>
      <Row>
        <ProjectCol md={8}>
          {/* ToDo add skalenton loader */}
          {React.Children.toArray(project.image_names.map((imageName, i) => (
            <ProjectImage>
              <AdvancedImage cldImg={new CloudinaryImage(`personal_website/${imageName}`, {cloudName: 'dsilz60qd'}).resize(fill().width(450).height(250))} />
            </ProjectImage>
          )))}
        </ProjectCol>
        <ButtonCol md={3}>
          <Fab
            onClick={() => prevProject(match)}
            className={classes.nextbutton}
            id='prev'
            aria-label='previous'
            variant='extended'
          >
            <ArrowBackIosIcon />

          </Fab>
          <Fab
            onClick={() => nextProject(match)}
            className={classes.nextbutton}
            id='next'
            aria-label='next'
            variant='extended'
          >
            <ArrowForwardIosIcon className={classes.extendedIcon} />

          </Fab>
          <ButtonGroup
            className={classes.viewProject}
            variant='contained'
            size='large'
          >
            <Button
              size='large'
              variant='contained'
              color='primary'
              href={project.github_link}
              target='_blank'
            >
              GitHub
            </Button>
            <Button
              size='large'
              variant='contained'
              color='primary'
              href={project.live_link}
              target='_blank'
            >
              View
            </Button>
          </ButtonGroup>
          <h3>Technologies</h3>
          {project.technologies.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </ButtonCol>
      </Row>
    </Container>
  )
}

const ProjectImage = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`
const ProjectCol = styled(Col)`
  margin-right: 20px;
`
const ButtonCol = styled(Col)`
  margin-top: 25px;
`
// turn color red when it gets to end
