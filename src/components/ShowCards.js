import React from 'react'
import styled from 'styled-components'
import { Card, Button, Col } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import { CloudinaryImage} from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import {AdvancedImage} from "@cloudinary/react";

export function ShowCards ({ projects }) {
  return projects.map(project => (
    <Col md={4} sm={2} key={project.id}>
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <FrontCard className=' flip-card-front'>
            <AdvancedImage cldImg={new CloudinaryImage(`personal_website/${project.image_names[0]}`, {cloudName: 'dsilz60qd'}).resize(fill().width(300).height(200))} />
          </FrontCard>
          <BackCard className=' flip-card-back'>
            <Card.Body>
              <Card.Title>{project.project_name}</Card.Title>
              <SubTitle>{project.description}</SubTitle>
              <Button href={`/project/${project.id}`} variant='primary'>
                Go Here
              </Button>
            </Card.Body>
          </BackCard>
        </div>
      </div>
    </Col>
  ))
}

const FrontCard = styled(Card)`
  margin: 25px;
  border: 0px;
  box-shadow: 5px 5px 5px;
`
const BackCard = styled(Card)`
  margin: 25px;
  border: 0px;
  box-shadow: 5px 5px 5px;
`
const SubTitle = styled(Card.Subtitle)`
  margin-bottom: 0.75em;
`

ShowCards.propTypes = {
  projects: PropTypes.array
}
