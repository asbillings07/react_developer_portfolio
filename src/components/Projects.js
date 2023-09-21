import React from 'react'
import { ShowCards } from './ShowCards'
import { Row, Container } from 'react-bootstrap'
import { useAppContext } from '../store'

export function Projects () {
  const { projects } = useAppContext()
  return (
    <Container>
      <Row>
        <ShowCards projects={projects} />
      </Row>
    </Container>
  )
}
