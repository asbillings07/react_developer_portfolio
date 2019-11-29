/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import profilePic from '../images/profile_pic.jpeg'
import Twitter from '../svgs/twitter.svg'
import Github from '../svgs/github-logo.svg'
import LinkedIn from '../svgs/linkedin.svg'
import Medium from '../svgs/medium.svg'
import Email from '../svgs/email.svg'

export function About () {
  return (
    <StyledContainer>
      <Row>
        <Col md={6}>
          <StyledCard style={{ width: '18rem' }}>
            <Card.Img variant='top' src={profilePic} />
            <Card.Header>
              <a
                href='https://www.linkedin.com/in/aaron-billings-9b429610a/'
                target='_blank'
              >
                <SVGImage src={LinkedIn} alt='LinkedIn' />
              </a>
              <a href='https://github.com/asbillings07' target='_blank'>
                <SVGImage src={Github} alt='LinkedIn' />
              </a>
              <a href='https://twitter.com/abdevelops' target='_blank'>
                <SVGImage src={Twitter} alt='LinkedIn' />
              </a>
              <a href='https://medium.com/@asbillings2007' target='_blank'>
                <SVGImage src={Medium} alt='Medium' />
              </a>
              <a
                href='mailto:abdevelops@gmail.com?subject=Thanks%20For%20Reaching%20Out&body=I%27m%20looking%20forward%20to%20connecting%20with%20you.%20You%20can%20replace%20this%20message%20with%20your%20own.%20'
                target='_blank'
              >
                <EmailImage src={Email} alt='Email' />
              </a>
            </Card.Header>
            <Card.Body>
              You can click on any of the icons above to connect with me.
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md={6}>
          <h1>It's crazy that...</h1>
          <br />
          <h6>
            It's already been over year since I've been coding. Before I started
            coding I was a support manager. I really enjoyed helping customers.
            However, I wanted to be the one to actually solve the code behind
            those customer issues. That curiousity lead me on a journey into the
            world of Software development. I loved what I was learning so much
            that I would spend most of my waking hours consuming information,
            and working on projects.
          </h6>
          <br />
          <h6>
            My passing for coding pushed me to code at least 8 hours a day while
            working a full time 9-5 job. I would wake up everyday at 4:30am and
            get to work by 5am. I would code until 9am, work my job until 12pm,
            code during lunch, then work my job again until 5pm. After which I
            would come home and code from 8pm until 12am.
          </h6>
          <br />
          <h6>
            Being a developer is not a hobby for me, it's a career. One I hope
            to pursue for the rest of my life. Coding makes me excited to get up
            in the morning, and pushes me to learn new languages and
            technologies. I am very passionate about software development and
            want to encourage others that are on the same path.
          </h6>
          <br />
          <h6>
            When I'm not coding, I enjoy spending time with my wife and two
            daughters, playing video games, and watching movies.
          </h6>
          <h6>
            Thanks for checking out my portfolio, if you like what you've seen
            and heard reach out, I'd love to hear from you. I'm always on the
            lookout for my next great adventure.
          </h6>
        </Col>
      </Row>
    </StyledContainer>
  )
}

const StyledCard = styled(Card)`
  display: flex;
  width: 18rem;
`
const SVGImage = styled.img`
  height: 40px;
  width: 40px;
  padding: 3px;
`
const EmailImage = styled.img`
  height: 55px;
  width: 55px;
  padding: 3px;
`
const StyledContainer = styled(Container)`
  background-image: url('../images/dust_scratches.png');
  margin-top: 25px;
  margin-bottom: 100px;
`
