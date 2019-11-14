import React from 'react'
import styled from 'styled-components'
import { Col, Card } from 'react-bootstrap'

export function CardFront ({ projects }) {
  return projects.map(project => (
    <Col md={4} key={project.id}>
      <FrontCard>
        <Card.Img variant='top' src={project.image_urls[0]} />
        <Card.Body>
          <Card.Text>{project.name}</Card.Text>
        </Card.Body>
      </FrontCard>
    </Col>
  ))
}

const FrontCard = styled(Card)`
  width: auto;
  height: 457px;
  margin-top: 20px;
`
