import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'
import axios from 'axios'
import { get } from '../../service'
import {
	Container,
	MainContainer,
	GeneralContainer,
	// FontContainer,
	// RatingContainer,
	// LogoContainer,
	// ImageListContainer,
	// ProfileContainer,
} from './components/StyledComponents'

import { Header, Drawer, AgentCard, LocationHeader  } from '../../components'
import { withRouter } from 'react-router-dom'

class Home extends Component {
	state = {
		showDrawer: false,
		filterByCity: false,
		userCity:'',
		location:'',
		userData:[],
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		get({url:'profiles?filter[include][user]=insuranceCompany'})
		.then(res => {
			this.setState({
				userData:res.data
			})
		}).catch(err => {
			alert('sorry something wrong')
		})
		const self = this
		if ("geolocation" in navigator) {
			var watchID = navigator.geolocation.getCurrentPosition(function(position) {
				const newLocation = {
					lat:position.coords.latitude,
					lng:position.coords.longitude
				}
				self.setState({
					location:newLocation
				})
				axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&language=idn&region=idn`)
				.then(({data}) => {
					const newUserCity = data &&  data.results && data.results[6] &&
															data.results[6].formatted_address && data.results[6].formatted_address.split(',')[0] || ''
					self.setState({
						userCity: newUserCity
					})
				})
		});
		} else {

		}
	}

	changeFilterByCityStatus = () => {
		const {location} = this.state
		this.setState({
			filterByCity:!this.state.filterByCity
		})
		let url = 'profiles?filter[include][user]=insuranceCompany'
		if (!this.state.filterByCity) {
			url = `profiles?filter[include][user]=insuranceCompany&filter[where][location][near]=${location.lat},${location.lng}`
		}
		get({url})
		.then(res => {
			this.setState({
				userData:res.data
			})
		}).catch(err => {
			alert('sorry something wrong')
		})
	}

	render( ) {
		if (this.state.userData.length === 0) {
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
						<LocationHeader
							status={this.state.filterByCity}
							city={this.state.userCity}
							onStatusChange={this.changeFilterByCityStatus}/>
            <GeneralContainer>
              {userData.map(data =>
                <AgentCard image={data.profilePicture}
									key={data.userId}
                  name={data.name}
                  url={`/profile/${data.userId}`}
                  rating={data.finalRating}
                  city={data.city}
                  company={data.user.insuranceCompany}
                  />)}

            </GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Home)
