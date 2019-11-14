import React from 'react'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'
import { Row, Container } from 'react-bootstrap'
import { data } from '../data'

export function Projects () {
  return (
    <Container>
      <Row>
        <CardFront projects={data.projects} />
        <CardBack projects={data.projects} />
      </Row>
    </Container>
  )
}
