import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon } from 'semantic-ui-react'
import ReactStars from 'react-stars'
import {
	Container,
	MainContainer,
	GeneralContainer,
	FontContainer,
	RatingContainer,
} from './components/StyledComponents'
import { signOutHandler } from '../../actions'

import { Header, Drawer } from '../../components'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
	state = {
		showDrawer: false
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		console.log(this.props.userData.userDetail)
	}
	render() {
		const { userDetail } = this.props.userData
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
						<GeneralContainer>
							<Image
								src={userDetail.profile.profilePicture}
								size='small'
								style={{height:'100px',width:'100px',margin:0}}
								circular
								/>
							<FontContainer size={20}>{userDetail.profile.name}</FontContainer>
						</GeneralContainer>
						<GeneralContainer>
							<RatingContainer>
								<FontContainer weigth={500} size={40}>4</FontContainer>
							</RatingContainer>
							<ReactStars
								count={5}
								value={4}
								size={24}
								color2={'#ffd700'} />
						</GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	userData: state.authReducer.userData
})

export default withRouter(connect(mapStateToProps)(Dashboard))
