import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { data } from '../data';

export function ProjectDetail({ match }) {
  const { id } = match.params;
  const project = data.projects[id];

  return (
    <Container>
      <Col>
        <Row>
          <h1>{project.project_name}</h1>
          <h3>{project.description}</h3>
        </Row>
        <Row>
          {project.image_urls.map((imageSrc, i) => (
            <img src={imageSrc} alt={`${project.project_name}`} key={i} />
          ))}
        </Row>
      </Col>
      <Col>
        <Row>
          {project.technologies.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </Row>
      </Col>
    </Container>
  );
}
