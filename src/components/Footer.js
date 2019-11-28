import React from 'react'
import Twitter from '../svgs/twitter.svg'
import Github from '../svgs/github-logo.svg'
import LinkedIn from '../svgs/linkedin.svg'
import Medium from '../svgs/medium.svg'
import Email from '../svgs/email.svg'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
export function Footer () {
  return (
    <FooterDiv>
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
    </FooterDiv>
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

const FooterDiv = styled(Container)`
  margin-top: 5vh;
  margin-bottom: 50px;
`
