import React, { Component } from 'react'
import { Input, Button,Image } from 'semantic-ui-react'
import {
	Container,
	FormContainer,
	WelcomeHeader,
	InputContainer
} from '../components/StyledComponents'
import { connect } from 'react-redux'
import { loginHandler } from '../../../actions'
import { Link, Redirect, withRouter } from 'react-router-dom'
class SignIn extends Component {
	state = {
		loginData: {
			email: '',
			password: ''
		}
	}

	handleInput = event => {
		const { name, value } = event.target
		const loginData = this.state.loginData
    loginData[name] = value
		this.setState({
			 loginData:loginData,
		 })
	}

	render() {
		return (
			this.props.isAuthenticated
			? <Redirect to='/dashboard' />
			: (<Container>
				<Link to='/'>
			<Image style={{height:'100px'}} src='https://firebasestorage.googleapis.com/v0/b/itrustu-a10b5.appspot.com/o/iTrustU-logo-500px.png?alt=media&token=8bfa404c-8db6-4e5c-ab1d-a9ddee2ab2fa'/>
			</Link>
			<FormContainer>
					<WelcomeHeader>
						<h3>Sign in to ITrustU</h3>
					</WelcomeHeader>
					<InputContainer>
						<Input
							name="email"
							type="email"
							fluid
							focus
							placeholder="Email"
							onChange={this.handleInput}
						/>
					</InputContainer>
					<InputContainer>
						<Input
							name="password"
							type="password"
							fluid
							focus
							placeholder="Password"
							onChange={this.handleInput}
						/>
					</InputContainer>
					<InputContainer>
						<Button fluid name="email" onClick={event => this.props.dispatch(loginHandler(event, this.state.loginData))}>
							Login
						</Button>
					</InputContainer>
					<WelcomeHeader>
						<p>
							Dont have account? <Link to="/signup">Register here</Link>
						</p>
					</WelcomeHeader>
				</FormContainer>
			</Container>)
		)
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authReducer.isAuthenticated
	}
}

export default withRouter(connect(mapStateToProps)(SignIn))
