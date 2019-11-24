import React from 'react'
import { Row, Container, Col, Card, Button } from 'react-bootstrap'
import styled from 'styled-components'
import BG from '../images/yuriy-kovalev-nN1HSDtKdlw-unsplash.jpg'
export function Home () {
  return (
    <Container>
      <img src={BG} alt='bg' className='bg' />
      <Row>
        <Col>
          <Heading>Hi, I'm Aaron & I'm a Full Stack Developer</Heading>
          <article>
            <Body>
              Check out my <a href='/projects'>&nbsp;projects</a>&nbsp;and
              connect with me on&nbsp;
              <a
                href='https://twitter.com/abdevelops'
                target='_blank'
                rel='noopener noreferrer'
              >
                Twitter&nbsp;
              </a>
              or&nbsp;
              <a
                href='https://www.linkedin.com/in/aaron-billings-9b429610a/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Linkedin
              </a>
              .
            </Body>
            <Body>Thanks for stopping by! Have Fun and Enjoy your stay!</Body>
          </article>
        </Col>
      </Row>
      <Row>
        <Col>
          <ArticleHeading>Check out my latest articles</ArticleHeading>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <ArticleCard>
            <Card.Body>
              <Card.Title>Git Hooks And You</Card.Title>
              <Card.Text>
                Learn about what Git Hooks are and how to use them in your next
                project.
              </Card.Text>
              <Button
                href='https://medium.com/@asbillings2007/git-hooks-and-you-492b7794fa6c'
                target='_blank'
                variant='info'
              >
                Read Article
              </Button>
            </Card.Body>
          </ArticleCard>
        </Col>
        <Col md={4}>
          <ArticleCard>
            <Card.Body>
              <Card.Title>My Software Developer Journey</Card.Title>
              <Card.Text>
                Get to know my journey as a Software Developer and how I learned
                how to code.
              </Card.Text>
              <Button
                href='https://medium.com/@asbillings2007/my-software-developer-journey-680c1b14d9a3'
                target='_blank'
                variant='info'
              >
                Read Article
              </Button>
            </Card.Body>
          </ArticleCard>
        </Col>
      </Row>
    </Container>
  )
}

const Body = styled.h3`
  margin-top: 25px;
`
const Heading = styled.h1`
  margin-top: 100px;
`
const ArticleHeading = styled.h2`
  margin-top: 50px;
  margin-bottom: 50px;
`
const ArticleCard = styled(Card)`
  width: 18rem;
  height: 100%;
  margin-bottom: 20px;
`
