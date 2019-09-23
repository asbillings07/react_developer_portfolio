import React from 'react';
import { data } from '../data';
import { Col, Row, Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

export function Home() {
  const showProjects = () => {
    return data.projects.map(project => (
      <Col lg={4} key={project.id}>
        <ProjectCard>
          <Card.Img variant="top" src={project.image_urls[0]} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Button variant="primary">Go Here</Button>
          </Card.Body>
        </ProjectCard>
      </Col>
    ));
  };

  return (
    <>
      <h1>Welcome to my portfolio!</h1>
      <p>
        Here you will see a wide range of projects showcasing my software
        development skills. All projects include by a github link to the code
        and a live link where you can play with the app I build. Take a look
        around, play with some of my projects. If you want to get to know me
        better, you can checkout the about me section.{' '}
      </p>

      <CardContainer>
        <Row>{showProjects()}</Row>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ProjectCard = styled(Card)`
  width: 25rem;
`;
