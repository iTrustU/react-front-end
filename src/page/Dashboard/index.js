import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { signOutHandler } from '../../actions'
import { Header, Drawer}  from '../../components'
import { withRouter } from 'react-router-dom'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
  height:88vh;
	align-items: center;
  @media (max-width:750px){
    height:92vh;
  }
`
const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
  flex:8;
  overflow:hidden;
	justify-content: flex-start;
	align-items: center;
  @media (max-width:750px){
    flex:1
  }
`

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
		console.log(this.props.userData);
	}
  render () {
    const {
      email
    } = this.props.userData
    return (
      <div>
        <Header name='header' menuClick={this.changeDrawer}/>
        <Container>
        <Drawer show={this.state.showDrawer}/>
        <MainContainer>
          <h1>{email}</h1>
          <button onClick={() => this.props.dispatch(signOutHandler(this.props.history))}>
            Sign Out
          </button>
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
