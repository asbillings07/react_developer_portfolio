import React from 'react'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

export const NotFound = () => {
  return (
    <Container>
      <Typography variant='h5' align='center' color='textSecondary'>
        Well....This is Akward. Looks like what you're looking for isn't here.
        Better head <a href='/'>back</a> just to be safe.
      </Typography>
      <ImageContainer>
        <iframe
          src='https://giphy.com/embed/STiCI0OIXlkI0'
          width='480'
          height='360'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
          title='notfound'
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
