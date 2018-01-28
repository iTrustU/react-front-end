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
		filterByCity:false,
		userCity:'',
		userData:[],
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		get({url:`users?filter[include]=profile&filter[include]=insuranceCompany`})
		.then(res => {
			this.setState({
				userData:res.data
			})
      console.log(this.state.userData);
		}).catch(err => {
			alert('sorry something wrong')
		})
		const self = this
		if ("geolocation" in navigator) {
			var watchID = navigator.geolocation.getCurrentPosition(function(position) {
				axios.get(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&language=idn&region=idn`)
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
		this.setState({
			filterByCity:!this.state.filterByCity
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
                <AgentCard image={data.profile.profilePicture}
                  name={data.profile.name}
                  url={`/profile/${data.id}`}
                  rating={data.profile.finalRating}
                  city={data.profile.city}
                  company={data.insuranceCompany}
                  />)}

            </GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Home)
