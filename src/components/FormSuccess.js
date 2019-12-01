import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

export const FormSuccess = () => {
  return (
    <Container>
      <Typography variant='h5' align='center' color='textSecondary'>
        YAY! I got your message. I'll respond as soon as I can. Thanks!
      </Typography>
      <br />
      <Typography variant='h6' align='center'>
        <a href='/'>Go Home</a>
      </Typography>
      <br />
      <ImageContainer>
        <iframe
          src='https://giphy.com/embed/37nRXpCEP9H1f1WVrb'
          width='480'
          height='480'
          frameBorder='0'
          class='giphy-embed'
          title='success'
          allowFullScreen
        />
      </ImageContainer>
    </Container>
  )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 100px;
`
const Container = styled.div`
  margin-top: 100px;
`
