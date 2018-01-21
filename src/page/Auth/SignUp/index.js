import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { registerHandler, updateIsAuthenticated } from '../../../actions'
import {
	Container,
	FormContainer,
	WelcomeHeader,
	InputContainer
} from '../components/StyledComponents'
import { Link, Redirect, withRouter } from 'react-router-dom'
import firebase from '../../../utils/firebase'
import { post as servicePost} from '../../../service'

class SignUp extends Component {
	state = {
		loginData: {
			email: '',
			password: '',
			aajiId: '',
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
	onSingUp = () => {
		this.props.dispatch(registerHandler(this.state.loginData))
	}
	render() {
		return (
			this.props.isAuthenticated ?
			<Redirect to='/dashboard' /> : (
			<Container>
				<h1>logo</h1>
				<FormContainer>
					<WelcomeHeader>
						<h3>Sign up to ITrustU</h3>
					</WelcomeHeader>
					<InputContainer>
						<label>Email</label>
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
						<label>Password</label>
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
						<label>AAJI ID</label>
						<Input
							name="aajiId"
							type="text"
							fluid
							focus
							placeholder="AAJI ID"
							onChange={this.handleInput}
						/>
					</InputContainer>
					<InputContainer>
						<Button fluid onClick={this.onSingUp}>
							Sign Up
						</Button>
					</InputContainer>
					<WelcomeHeader>
						<p>
							Have ITrustU account? <Link to="/signin">Login here</Link>
						</p>
					</WelcomeHeader>
				</FormContainer>
			</Container>
			)
		)
	}
}
const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authReducer.isAuthenticated
	}
}

export default withRouter(connect(mapStateToProps)(SignUp))
