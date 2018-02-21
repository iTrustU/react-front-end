import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Icon, Button } from 'semantic-ui-react'
// import ReactStars from 'react-stars'
import {
	Container,
	MainContainer,
	GeneralContainer,
	FontContainer,
	// RatingContainer,
	LogoContainer,
	ProfileContainer,
	ImageListContainer,
} from './components/StyledComponents'
import {get} from '../../service'
// import { signOutHandler } from '../../actions'

import { Header, Drawer, Rating, CommentList  } from '../../components'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
	state = {
		showDrawer: false
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer,
			finalRating:'',
		})
	}
	componentDidMount() {
		get({url:`users/${this.props.userData.userDetail.id}/reviews/count`})
		.then(res => {
			this.setState({
				finalRating:res.data.count
			})
		}).catch(err=> {
			alert('upssss something wrong')
		})
	}
	GenerateBussinesCard= () =>  {
		const {userData} = this.props
		console.log(userData);
		get({url:`Profiles/generate-business-card?userId=${userData.userDetail.id}&access_token=${userData.token}`})
		.then(res => {
			if (res.data.success) {
				console.log('bussines card',res.data.businessCardLink )
				window.open(res.data.businessCardLink)
			}else{
				alert(res.data.message)
			}
		}).catch(err=> {
			alert('upssss something wrong')
		})
	}
	renderQrcode(qrCode){
		if (qrCode === '' || qrCode === null || qrCode === undefined) {
			return null
		} else {
			return (
				<GeneralContainer>
					<ProfileContainer>
					<Image
						src={qrCode}
						style={{height:'150px',margin:0}}
						/>
					</ProfileContainer>
					<Button
						onClick = {this.GenerateBussinesCard}
						color='orange'>Create bussines card</Button>
				</GeneralContainer>
			)
		}
	}
	render() {
		const { userDetail } = this.props.userData
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
						<GeneralContainer type='row'>
							<ProfileContainer flex='2' margin='0' padding='1vh 0 1vh 0'>
							<Image
								src={userDetail.profile.profilePicture}
								size='small'
								style={{height:'100px',width:'100px',margin:0}}
								circular
								/>
						</ProfileContainer>
							<ProfileContainer display='block' flex='2' align='flex-start'>
								<FontContainer margin='0' size={20}>{userDetail.profile.name}</FontContainer>
								<FontContainer margin='0' weigth={100}  size={14}>{userDetail.profile.level}</FontContainer>
							</ProfileContainer>
						</GeneralContainer>
							<Rating value={userDetail.profile.finalRating.toFixed(1)}
								totalRating={this.state.finalRating} />
							<GeneralContainer>
								<ImageListContainer>
									<LogoContainer>
										<Image
											src={userDetail.insuranceCompany.logoUrl}
											style={{width:'50px',margin:0}}
											/>
									</LogoContainer>
									<FontContainer size={16}>{userDetail.insuranceCompany.name}</FontContainer>
								</ImageListContainer>
								<ImageListContainer>
									<LogoContainer>
										<Icon name='point' style={{color:'#f28d2c'}}/>
									</LogoContainer>
									<FontContainer size={16}>{userDetail.profile.city}</FontContainer>
								</ImageListContainer>
							</GeneralContainer>
							{this.renderQrcode(userDetail.profile.qrImageUrl)}
						<GeneralContainer>
							<CommentList userId={userDetail.id}/>
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
