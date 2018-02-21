import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Input, TextArea, Button, Modal,Icon } from 'semantic-ui-react'
import {
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share';
import ReactStars from 'react-stars'
import {
	Container,
	HeaderContainer,
	CommentContainer
} from './styledComponents'
import { get, post } from '../../service'

class RatingForm extends Component {
	state = {
		ratingData: {
			phoneNumber: '',
			comment: '',
			rating: '4.0'
		},
		sharedComment:'',
		isSubmit: false,
		isModalActive:false,
	}

	handleInput = event => {
		const { name, value } = event.target
		const ratingData = this.state.ratingData
		ratingData[name] = value
		this.setState({
			ratingData: ratingData
		})
	}
	changeModal = () => {
		this.setState({
			isModalActive:!this.state.isModalActive
		})
	}
	modalClose = () => {
		this.setState({
			isModalActive:!this.state.isModalActive
		})
		this.props.onClick()
	}
	onSubmit = () => {
		const { ratingData } = this.state
		post({
			url: '/Reviews',
			body: {
				comment: ratingData.comment,
				rating: ratingData.rating,
				userId: this.props.userId,
				phone:ratingData.phoneNumber,
			}
		})
			.then(res => {
				this.setState({
					sharedComment:this.state.ratingData.comment
				})
        const newRatingData = {
          phoneNumber: '',
          comment: '',
          rating: '4.0'
        }
				this.setState({
					ratingData: {...newRatingData}
				})
				alert('Review success')
				this.changeModal()
			})
			.catch(err => {
				alert('review gagal kesalahan sistem')
			})
	}

	checkNumber = () => {
		get({
			url: `Reviews/check-customer-phone-number?phone=${
				this.state.ratingData.phoneNumber
			}&userAgentId=${this.props.userId}`
		}).then(res => {
			if (res.data.success) {
				this.setState({ isSubmit: true })
			} else {
				alert(res.data.message)
			}
		})
	}

	ratingChange = newRating => {
		const ratingData = this.state.ratingData
		ratingData['rating'] = newRating
		this.setState({
			ratingData
		})
	}
	render() {
		return (
			<Container justify="center" align="flex-start" padding="2vh 0vw">
				<Modal size='tiny' open={this.state.isModalActive} onClose={this.close}>
				<Modal.Header>
					Share your review
				</Modal.Header>
				<Modal.Content>
					<Container type='row'>
					<FacebookShareButton
						quote={this.state.sharedComment}
						url={'https://itrustu-a10b5.firebaseapp.com/profile/${this.props.userId}'}>
						<Icon  name='facebook' size='huge'/>
					</FacebookShareButton>
					<TwitterShareButton
						title={this.state.sharedComment}
						hashtags={['iTrustU']}
						url={'https://itrustu-a10b5.firebaseapp.com/profile/${this.props.userId}'}>
						<Icon  name='twitter' size='huge'/>
					</TwitterShareButton>
				</Container>
				</Modal.Content>
				<Modal.Actions>
					<Button onClick={this.modalClose}>
						Close
					</Button>
				</Modal.Actions>
			</Modal>

				<HeaderContainer
					type="row"
					justify="space-between"
					padding="2vh 3vw 0vh 3vw"
				>
					<Input
						icon="phone"
            value={this.state.ratingData.phoneNumber}
						name="phoneNumber"
						iconPosition="left"
						size="mini"
						placeholder="Phone Number"
						onChange={this.handleInput}
						onBlur={this.checkNumber}
						style={{ margin: '0px 15px' }}
					/>
					<ReactStars
						count={5}
						value={this.state.ratingData.rating}
						size={16}
						onChange={this.ratingChange}
						color2={'#ffd700'}
					/>
				</HeaderContainer>
				<CommentContainer padding="3vh 5vw">
					<TextArea
						name="comment"
						placeholder="write your comment here"
            value={this.state.ratingData.comment}
						onChange={this.handleInput}
						style={{
							minHeight: 100,
							width: '100%',
							border: '1px solid #ddd',
							marginBottom: '10px'
						}}
					/>
					<Button
						disabled={!this.state.isSubmit}
						color="orange"
						onClick={this.onSubmit}
					>
						submit
					</Button>
				</CommentContainer>
			</Container>
		)
	}
}

export default RatingForm
