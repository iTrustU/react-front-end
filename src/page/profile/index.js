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
	LogoContainer,
	ImageListContainer,
} from './components/StyledComponents'

import { Header, Drawer, Rating, CommentList  } from '../../components'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
	state = {
		showDrawer: false
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		console.log(this.props.match.params.id);
	}
	render( ) {
    return(<div>lalaalal</div>)
		// const { userDetail } = this.props.userData
		// return (
		// 	<div>
		// 		<Header name="header" menuClick={this.changeDrawer} />
		// 		<Container name="Container">
		// 			<Drawer show={this.state.showDrawer} />
		// 			<MainContainer name="MainContainer">
		// 				<GeneralContainer>
		// 					<Image
		// 						src={userDetail.profile.profilePicture}
		// 						size='small'
		// 						style={{height:'100px',width:'100px',margin:0}}
		// 						circular
		// 						/>
		// 					<FontContainer size={20}>{userDetail.profile.name}</FontContainer>
		// 				</GeneralContainer>
		// 					<Rating value="4.5" />
		// 				<GeneralContainer>
		// 					<ImageListContainer>
		// 						<LogoContainer>
		// 							<Image
		// 								src='http://4.bp.blogspot.com/-8nwQisgU-MY/VKprpJJhSaI/AAAAAAAABMY/jb2gdUwjJuA/w1200-h630-p-k-no-nu/logo%2Bprudential.png'
		// 								style={{width:'50px',margin:0}}
		// 								/>
		// 						</LogoContainer>
		// 						<FontContainer size={16}>{userDetail.profile.name}</FontContainer>
		// 					</ImageListContainer>
		// 					<ImageListContainer>
		// 						<LogoContainer>
		// 							<Icon name='point' style={{color:'#f28d2c'}}/>
		// 						</LogoContainer>
		// 						<FontContainer size={16}>{userDetail.profile.name}</FontContainer>
		// 					</ImageListContainer>
		// 				</GeneralContainer>
		// 				<GeneralContainer>
		// 					<CommentList/>
		// 				</GeneralContainer>
		// 			</MainContainer>
		// 		</Container>
		// 	</div>
		// )
	}
}


export default withRouter(Profile)
