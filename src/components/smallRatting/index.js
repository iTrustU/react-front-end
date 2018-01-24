import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon } from 'semantic-ui-react'
import ReactStars from 'react-stars'
import {Container, RatingContainer, FontContainer } from './styledComponents'

const SmallRating = (props) => {
  return(
      <RatingContainer>
        <FontContainer weigth={500} size={20}>{props.value}</FontContainer>
          <ReactStars
            count={5}
            value={props.value}
            size={8}
            color2={'#ffd700'} />
      </RatingContainer>
  )
}

export default SmallRating
