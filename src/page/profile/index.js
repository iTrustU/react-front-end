import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Image, Icon, Loader, Button } from 'semantic-ui-react'
import { get } from '../../service'
import {Link} from 'react-router-dom'
// import ReactStars from 'react-stars'
import {
	Container,
	MainContainer,
	GeneralContainer,
	FontContainer,
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
		update:false,
		finalRating:0
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	getData(id){
		get({url:`users/${id}?filter[include]=profile&filter[include]=insuranceCompany`})
		.then(res => {
			get({url:`users/${id}/reviews/count`})
			.then(_res => {
				res.data.profile.phone=this.getPhoneNumber(res.data.profile.phone)
				this.setState({
					finalRating:_res.data.count,
					userData:res.data
				})
		}).catch(err => {
			console.log(err);
		})
		}).catch(err=> {
			alert('upssss something wrong')
		})
	}
	componentDidMount() {
		this.getData(this.props.match.params.id)
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.id !== this.props.match.params.id ) {
			this.getData(nextProps.match.params.id)
		}
	}
	changeUpdate=() => {
		this.setState({
			update:!this.state.update
		})
	}
	getPhoneNumber(number){
		let newNumber = ''
		newNumber = number
		if (number.substring(0,1) === '0' ) {
			  newNumber = number.split('')
			newNumber.splice(0,1,'+62').join('')
			return newNumber.join('')
		}
		return newNumber
	}
	render( ) {
		if (this.state.userData === '') {
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
							<Rating value={userData.profile.finalRating.toFixed(1)}
								totalRating={this.state.finalRating}
								 />
						<GeneralContainer>
							<ImageListContainer>
								<LogoContainer>
									<Link to={`/company/${userData.insuranceCompanyId}`}>
									<Image
										src={userData.insuranceCompany.logoUrl}
										style={{width:'50px',margin:0}}
										/>
								</Link>
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
							<RatingForm onClick={this.changeUpdate} userId={userData.id}/>
						</GeneralContainer>
						<GeneralContainer>
							<CommentList isUpdate={this.state.update} userId={userData.id}/>
						</GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Profile)
