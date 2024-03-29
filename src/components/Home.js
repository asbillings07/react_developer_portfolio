import React from 'react'
import { useAppContext } from '../store'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {Cloudinary, CloudinaryImage} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from "@cloudinary/react";
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '1.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))


export const Home = () => {
  const { projects } = useAppContext();
  const classes = useStyles()
  return (
    <StyledContainer>
      <CssBaseline />
      <main>
        {/* Intro Unit */}
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography
              component='h2'
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Aaron Billings
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Hi, I'm Aaron! I'm a full stack developer. Below is a collection
              of my projects. Each project has the source code as well as a live
              view link where you can play around with it. Enjoy your stay!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button href='/about' variant='contained' color='primary'>
                    Learn More about My Journey
                  </Button>
                </Grid>
                <Grid item>
                  <Button href='/contact' variant='outlined' color='primary'>
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          {/* End Intro Unit */}
          <Grid container spacing={4}>
            {projects.map(project => {
              return (
                <Grid item key={project.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <AdvancedImage cldImg={new CloudinaryImage(`personal_website/${project.image_names[0]}`, {cloudName: 'dsilz60qd'}).resize(fill().width(300).height(200))} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {project.project_name}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      href={`/project/${project.id}`}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-bottom: 100px;
`
