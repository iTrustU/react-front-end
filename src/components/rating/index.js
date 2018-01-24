import React from 'react'
import ReactStars from 'react-stars'
import {Container, RatingContainer, FontContainer } from './styledComponents'

const Rating = ({value,totalRating=2}) => {
  return(
    <Container
      type='row'
      justify='space-between'
      padding='2vh 10vw'
      >
      <RatingContainer>
        <FontContainer weigth={500} size={40}>{value}</FontContainer>
      </RatingContainer>
      <Container borderB='0' width='70%'>
        <ReactStars
          count={5}
          value={value}
          size={24}
          color2={'#ffd700'} />
        <FontContainer weigth={300} size={15}>{`${totalRating} reviews`}</FontContainer>
      </Container>
    </Container>
  )
}

export default Rating
