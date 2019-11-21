import React from 'react'
import { ScrollView } from './ScrollView'
import { data } from '../data'
import { Row, Container, Col } from 'react-bootstrap'
import styled from 'styled-components'

export function Home () {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to my portfolio!</h1>

          <p>
            Here you will see a wide range of projects showcasing my software
            development skills. All projects include a github link to the code
            and a live link where you can play around with the app.
          </p>
          <p>
            You can get to any of my projects by clicking on the picture of the
            project you'd like to see, or by navigating to projects section. To
            learn more about me click the 'About' section. If you like what you
            see you can reach out to me by using the contact form under the
            'Contact Me' section.
          </p>
          <P>
            Thanks for browsing through my portfolio! Have Fun and Enjoy your
            stay!
          </P>
          <ScrollView projects={data.projects} />
        </Col>
      </Row>
    </Container>
  )
}

const P = styled.p`
  margin-bottom: 25px;
`
