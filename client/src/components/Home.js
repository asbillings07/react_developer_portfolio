import React from 'react';
import { Projects } from './Projects';
import { data } from '../data';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

export function Home() {
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
        <Row>
          <Projects data={data} />
        </Row>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
