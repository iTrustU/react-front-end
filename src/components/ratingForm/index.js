import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Input, TextArea, Button } from 'semantic-ui-react'
import ReactStars from 'react-stars'
import {Container, HeaderContainer, CommentContainer  } from './styledComponents'
import {get,post} from '../../service'

class RatingForm extends Component {
  state = {
    ratingData:{
      phoneNumber:'',
      comment:'',
      rating:'4.0'
    },
    isSubmit:false
  }
  handleInput = event => {
    const { name, value } = event.target
    const ratingData = this.state.ratingData
    ratingData[name] = value
    this.setState({
       ratingData:ratingData,
     })
  }
  onSubmit = () => {
    console.log(this.state.ratingData, this.props.userId);
    const {ratingData} = this.state
    post({url:'/Reviews',body:{comment:ratingData.comment,rating:ratingData.rating,userId:this.props.userId}})
    .then(res => {
      console.log(res);
      alert('Review success')
    })
    .catch(err=> {
      alert('review gagal kesalahan sistem')
    })
  }
  checkNumber = () => {
    get({url:`Reviews/check-customer-phone-number?phone=${this.state.ratingData.phoneNumber}&userAgentId=${this.props.userId}`})
    .then(res => {
      console.log('lalalala');
      if (res.data.success) {
        this.setState({isSubmit:true})
      }else{
        alert(res.data.message);
      }

    })

  }
  ratingChange = (newRating) => {
    const ratingData = this.state.ratingData
    ratingData['rating']=newRating
    this.setState({
      ratingData
    })
  }
  render(){
    return(
      <Container
        justify='center'
        align='flex-start'
        padding='2vh 0vw'>
        <HeaderContainer type='row' justify='space-between' padding='2vh 3vw 0vh 3vw'>
          <Input
            icon='phone'
            name='phoneNumber'
            iconPosition='left'
            size='mini'
            placeholder='Phone Number'
            onChange={this.handleInput}
            onBlur={this.checkNumber}
            style={{margin:'0px 15px'}}
          />
          <ReactStars
            count={5}
            value={this.state.ratingData.rating}
            size={16}
            onChange={this.ratingChange}
            color2={'#ffd700'} />
        </HeaderContainer>
        <CommentContainer
          padding='3vh 5vw'
          >
          <TextArea
            name='comment'
            placeholder='write your comment here'
            onChange={this.handleInput}
            style={{ minHeight: 100,width:'100%', border:'1px solid #ddd', marginBottom:'10px'}}
            />
          <Button disabled={!this.state.isSubmit} color='orange' onClick={this.onSubmit}>submit</Button>
        </CommentContainer>
      </Container>
    )
  }
}

export default RatingForm
