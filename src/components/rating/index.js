import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon } from 'semantic-ui-react'
import ReactStars from 'react-stars'
import {Container, RatingContainer, FontContainer } from './styledComponents'

const Rating = (props) => {
  return(
    <Container
      type='row'
      justify='space-between'
      padding='2vh 15vw'
      >
      <RatingContainer>
        <FontContainer weigth={500} size={40}>{props.value}</FontContainer>
      </RatingContainer>
      <ReactStars
        count={5}
        value={props.value}
        size={24}
        color2={'#ffd700'} />
    </Container>
  )
}

export default Rating
