import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Image, Loader, Button } from 'semantic-ui-react'
import { get } from '../../service'
// import ReactStars from 'react-stars'
import {
	Container,
	MainContainer,
	GeneralContainer,
	FontContainer,
	ProfileContainer,
} from './components/StyledComponents'

import { Header, Drawer,Font, AgentListH  } from '../../components'
import { withRouter } from 'react-router-dom'

class CompanyProfile extends Component {
	state = {
		showDrawer: false,
		companyData:'',
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	getData(id) {
		get({url:`InsuranceCompanies/${id}`})
		.then(res => {
			this.setState({
				companyData:res.data
			})
			console.log(res)
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
		const { companyData } = this.state
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
						<GeneralContainer padding='5vh 2vw'>
							<ProfileContainer
								backgroundColor='white'
								flex='1' margin='0' padding='2vh 0 2vh 0'>
							<Image
								src={companyData.logoUrl}
								style={{maxHeigth:'150px'}}
								size='small'
								/>
						</ProfileContainer>
							<ProfileContainer flex='1' align='center'>
								<FontContainer margin='0' size={20}>{companyData.name}</FontContainer>
								 <a target="_blank" href={companyData.website}>
									<Button icon color='orange'>
										  {`Website`}
									</Button>
								</a>
							</ProfileContainer>
						</GeneralContainer>
						<GeneralContainer padding='2vh 2vw'>
							<Font size={22} weight='500' spacing='4px' text='Description'/>
							<Font size={12} weight='300' spacing='1px' text={companyData.description}/>
						</GeneralContainer>
						<GeneralContainer padding='2vh 2vw'>
							<AgentListH/>
						</GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(CompanyProfile)
