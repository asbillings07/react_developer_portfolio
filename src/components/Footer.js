import React from 'react'
import Twitter from '../svgs/twitter.svg'
import Github from '../svgs/github-logo.svg'
import LinkedIn from '../svgs/linkedin.svg'
import Medium from '../svgs/medium.svg'
import Email from '../svgs/email.svg'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='aaronbillings.com'>
        aaronbillings.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Typography variant='body2' align='center' gutterBottom>
        Ah, you've reached the bottom. You might as well press a button.
      </Typography>
      <Container>
        <a
          href='https://www.linkedin.com/in/aaron-billings-9b429610a/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGImage src={LinkedIn} alt='LinkedIn' />
        </a>
        <a
          href='https://github.com/asbillings07'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGImage src={Github} alt='LinkedIn' />
        </a>
        <a
          href='https://twitter.com/abdevelops'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGImage src={Twitter} alt='LinkedIn' />
        </a>
        <a
          href='https://medium.com/@asbillings2007'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGImage src={Medium} alt='Medium' />
        </a>
        <a
          href='mailto:abdevelops@gmail.com?subject=Thanks%20For%20Reaching%20Out&body=I%27m%20looking%20forward%20to%20connecting%20with%20you.%20You%20can%20replace%20this%20message%20with%20your%20own.%20'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SVGImage src={Email} alt='Email' />
        </a>
      </Container>

      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      />
      <Copyright />
    </footer>
  )
}

const SVGImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 12px;
  padding-left: 12px;
  float: left;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
`
