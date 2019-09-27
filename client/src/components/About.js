/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import profilePic from '../images/profilePic.jpeg';
import Twitter from '../svgs/twitter.svg';
import Github from '../svgs/github-logo.svg';
import LinkedIn from '../svgs/linkedin.svg';

export function About() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <StyledCard style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profilePic} />
            <Card.Header>
              <a
                href="https://www.linkedin.com/in/aaron-billings-9b429610a/"
                target="_blank"
              >
                <SVGImage src={LinkedIn} alt="LinkedIn" />
              </a>
              <a href="https://github.com/asbillings07" target="_blank">
                <SVGImage src={Github} alt="LinkedIn" />
              </a>
              <a href="https://twitter.com/abdevelops" target="_blank">
                <SVGImage src={Twitter} alt="LinkedIn" />
              </a>
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
const SVGImage = styled.img`
  height: 40px;
  width: 40px;
  padding: 3px;
`;
