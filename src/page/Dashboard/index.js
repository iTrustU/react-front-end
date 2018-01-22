import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container,
	MainContainer,
	ProfileContainer,
	ImageContainer,
	DetailContainer,
	InsuranceContainer } from './components/StyledComponents'
import { signOutHandler } from '../../actions'
import { Image,Card, Icon, Rating } from 'semantic-ui-react'
import { Header, Drawer}  from '../../components'
import { withRouter } from 'react-router-dom'



class Dashboard extends Component {
  state = {
    showDrawer : false
  }
  changeDrawer = () => {
    this.setState({
      showDrawer: !this.state.showDrawer
    })
  }
	componentDidMount(){
		console.log(this.props.userData.userDetail);
	}
  render () {
    const {
      userDetail
    } = this.props.userData
    return (
      <div>
        <Header name='header' menuClick={this.changeDrawer}/>
        <Container name='Container'>
        <Drawer show={this.state.showDrawer}/>
        <MainContainer name='MainContainer'>
					<ProfileContainer>
						<ImageContainer name='ImageContainer'>
							<Card>
						    <Image src={userDetail.profile.profilePicture} />
						    <Card.Content>
						      <Card.Header>
						        {userDetail.profile.name}
						      </Card.Header>
						      <Card.Description>
										<InsuranceContainer>
										<Image src={userDetail.profile.profilePicture} size='mini'/>
						        <p>asusansi</p>
										</InsuranceContainer>
						      </Card.Description>
						    </Card.Content>
						    <Card.Content extra>
						      <a>
						        <Rating icon='star' defaultRating={1} maxRating={1} />
						        4
						      </a>
						    </Card.Content>
						  </Card>
					</ImageContainer>
					<DetailContainer>
						bala belellallealel
					</DetailContainer>
					</ProfileContainer>
        </MainContainer>
      </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.authReducer.userData
})

export default withRouter(connect(mapStateToProps)(Dashboard))
