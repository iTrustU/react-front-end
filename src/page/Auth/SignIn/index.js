import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import {
	Container,
	FormContainer,
	WelcomeHeader,
	InputContainer
} from '../components/StyledComponents'
import { connect } from 'react-redux'
import { loginHandler, updateIsAuthenticated } from '../../../actions'
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
		const { loginData } = this.state
		this.setState(
			{
				...loginData,
				loginData: {
					...loginData,
					[name]: value
				}
			})
	}

	render() {
		return (
			this.props.isAuthenticated 
			? <Redirect to='/dashboard' />
			: (<Container>
				<h1>logo</h1>
				<FormContainer>
					<WelcomeHeader>
						<h3>Sign in to ITrustU</h3>
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
						<Button fluid name="email" onClick={event => this.props.dispatch(loginHandler(event, this.state.loginData))}>
							Login
						</Button>
					</InputContainer>
					<InputContainer>
						<Button fluid name="facebook" onClick={event => this.props.dispatch(loginHandler(event))}>
							<Icon name="facebook" />login with Facebook
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
