import React from 'react'
import styled from 'styled-components'
import { Col, Card, Button } from 'react-bootstrap'

export function CardBack ({ projects }) {
  return projects.map(project => (
    <Col md={4} key={project.id}>
      <BackCard>
        <Card.Body>
          <Card.Title>{project.description}</Card.Title>
          <Button href={`/project/${project.id}`} variant='primary'>
            Go Here
          </Button>
        </Card.Body>
      </BackCard>
    </Col>
  ))
}

const BackCard = styled(Card)`
  width: auto;
  height: 457px;
  margin-top: 20px;
`
