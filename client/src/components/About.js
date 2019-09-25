import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import profilePic from '../images/profilePic.jpeg';
import Twitter from '../svgs/twitter.svg';
import Github from '../svgs/github-logo.svg';
import LinkedIn from '../svgs/linkedin.svg';
import Logo from '../logo.svg';

export function About() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <StyledCard style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profilePic} />
            <Card.Header>
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Github} alt="LinkedIn" />
              <img src={Twitter} alt="LinkedIn" />
            </Card.Header>
            <Card.Body></Card.Body>
          </StyledCard>
        </Col>
        <Col md={6}>
          <p>Hello!</p>
        </Col>
      </Row>
    </Container>
  );
}

const StyledCard = styled(Card)`
  display: flex;
  width: 18rem;
`;
