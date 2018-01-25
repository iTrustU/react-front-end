import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image, Card, Icon, Loader, Button } from 'semantic-ui-react'
import { get } from '../../service'
import ReactStars from 'react-stars'
import {
	Container,
	MainContainer,
	GeneralContainer,
	FontContainer,
	RatingContainer,
	LogoContainer,
	ImageListContainer,
	ProfileContainer,
} from './components/StyledComponents'

import { Header, Drawer, Rating, CommentList, RatingForm,  } from '../../components'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
	state = {
		showDrawer: false,
		userData:'',
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		get({url:`users/${this.props.match.params.id}?filter[include]=profile&filter[include]=insuranceCompany`})
		.then(res => {
			console.log(res);
			this.setState({
				userData:res.data
			})
		}).catch(err => {
			console.log(err);
		})
	}
	getPhoneNumber(number){
		if (number.substring(0,1) === '0' ) {
			let newNumber = number.split('')
			newNumber.splice(0,1,'+62').join('')
			console.log(newNumber.join(''));
			return newNumber.join('')
		}
		return number
	}
	render( ) {
		if (this.state.userData == '') {
			return (
				<div>
					<Header name="header" menuClick={this.changeDrawer} />
					<Container name="Container">
						<Drawer show={this.state.showDrawer} />
						<MainContainer name="MainContainer">
							<Loader active inline='centered' />
						</MainContainer>
					</Container>
				</div>
			)
		}
		const { userData } = this.state
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
						<GeneralContainer type='row' padding='5vh 2vw'>
							<ProfileContainer flex='2' margin='0' padding='1vh 0 1vh 0'>
							<Image
								src={userData.profile.profilePicture}
								size='small'
								style={{height:'100px',width:'100px',margin:0}}
								circular
								/>
						</ProfileContainer>
							<ProfileContainer display='block' flex='2' align='flex-start'>
								<FontContainer margin='0' size={20}>{userData.profile.name}</FontContainer>
								<FontContainer margin='0' weigth={100}  size={14}>{userData.profile.level}</FontContainer>
								 <a href={`whatsapp://send?text=halo%20${userData.profile.name}%20saya%20ingin%20menanyakan%20program%20asuransi%20yang%20anda%20tawarkan&phone=${userData.profile.phone}`}>
									<Button icon color='orange'>
										<Icon name='whatsapp' />
										  {` contact`}
									</Button>
								</a>
							</ProfileContainer>
						</GeneralContainer>
							<Rating value={userData.profile.finalRating.toFixed(1)} />
						<GeneralContainer>
							<ImageListContainer>
								<LogoContainer>
									<Image
										src={userData.insuranceCompany.logoUrl}
										style={{width:'50px',margin:0}}
										/>
								</LogoContainer>
								<FontContainer size={16}>{userData.insuranceCompany.name}</FontContainer>
							</ImageListContainer>
							<ImageListContainer>
								<LogoContainer>
									<Icon name='point' style={{color:'#f28d2c'}}/>
								</LogoContainer>
								<FontContainer size={16}>{userData.profile.city}</FontContainer>
							</ImageListContainer>
						</GeneralContainer>
						<GeneralContainer>
							<RatingForm userId={userData.id}/>
						</GeneralContainer>
						<GeneralContainer>
							<CommentList userId={userData.id}/>
						</GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Profile)
