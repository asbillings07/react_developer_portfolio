import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { data } from '../data';

export function ProjectDetail({ match }) {
  const { id } = match.params;
  const project = data.projects[id];

  return (
    <Container>
      <Row>
        <Col md={6}>
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
        <Col md={6}>
          <h3>Technologies Used</h3>
          {project.technologies.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
