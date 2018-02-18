import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Loader, Image, Rating } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import { get } from '../../service'
import {
	Container,
	MainContainer,
	FontContainer,
	SmallContainer,
	Poin
} from './components/StyledComponents'
import { Header, Drawer } from '../../components'

const Marker = ({ image, name, id, rating }) => (
	<Poin>
		<Image src={image} style={{ width: '40px', height: '40px' }} />
		<SmallContainer type="row" margin="0" padding="0px 3px">
			{rating.toFixed(1)}
			<Rating icon="star" defaultRating={1} maxRating={1} />
		</SmallContainer>
	</Poin>
)

class SimpleMap extends Component {
	state = {
		showDrawer: false,
		location: {
			lat: -8.795739,
			lng: 115.230627
		},
		userData: []
	}
	static defaultProps = {
		center: { lat: 59.95, lng: 30.33 },
		zoom: 16
	}
	changeFilterByCityStatus = () => {
		const { location } = this.state
		get({
			url: `profiles?filter[include][user]=insuranceCompany&where[location][near]=${
				location.lat
			},${location.lng}`
		})
			.then(res => {
				this.setState({
					userData: res.data
				})
			})
			.catch(err => {
				alert('sorry something wrong')
			})
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {
		const self = this
		if ('geolocation' in navigator) {
			var watchID = navigator.geolocation.getCurrentPosition(function(
				position
			) {
				const newLocation = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
				self.setState({
					location: newLocation
				})
				self.changeFilterByCityStatus()
			})
		}
	}
	render() {
		if (this.state.userData.length === 0) {
			return (
				<div>
					<Header name="header" menuClick={this.changeDrawer} />
					<Container name="Container">
						<Drawer show={this.state.showDrawer} />
						<MainContainer name="MainContainer">
							<Loader active inline="centered" />
						</MainContainer>
					</Container>
				</div>
			)
		}
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
						<div style={{ width: '100%', height: '750px' }}>
							<GoogleMapReact
								defaultCenter={this.state.location}
								defaultZoom={this.props.zoom}
							>
								{this.state.userData.map(user => {
									return (
										<Marker
											lat={user.location.lat}
											lng={user.location.lng}
											image={user.profilePicture}
											id={user.userId}
											rating={user.finalRating}
										/>
									)
								})}
							</GoogleMapReact>
						</div>
					</MainContainer>
				</Container>
			</div>
		)
	}
}

export default withRouter(SimpleMap)
