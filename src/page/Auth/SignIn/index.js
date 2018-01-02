import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import {
	Container,
	FormContainer,
	WelcomeHeader,
	InputContainer
} from '../components/StyledComponents'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../../../utils/firebase'

class SignIn extends Component {
	state = {
		loginData: {
			email: '',
			password: ''
		},
		loginSucced: false
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

	onLogin = event => {
		const { name, value } = event.target
		const { email, password } = this.state.loginData
		if (name === 'email') {
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(() => this.setState({ loginSucced: true }))
				.catch(function(error) {
					alert(error.message)
				})
		} else if (name === 'facebook') {
			const facebookProvider = new firebase.auth.FacebookAuthProvider()
			firebase
				.auth()
				.signInWithPopup(facebookProvider)
				.then(function(result) {
					var token = result.credential.accessToken;
					var user = result.user;
					localStorage.setItem('login', `${token}.${user}`)
					console.log(token, user)
				})
				.catch(function(error) {
					const errorCode = error.code,
								errorMessage = error.message,
								email = error.email
					console.log(errorCode, errorMessage, email)
				})
		}
	}
	render() {
		if (this.state.loginSucced) {
			return <Redirect to='/404' />
		}
		return (
			<Container>
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
						<Button fluid name="email" onClick={this.onLogin}>
							Login
						</Button>
					</InputContainer>
					<InputContainer>
						<Button fluid name="facebook" onClick={this.onLogin}>
							<Icon name="facebook" />login with Facebook
						</Button>
					</InputContainer>
					<WelcomeHeader>
						<p>
							Dont have account? <Link to="/signup">Register here</Link>
						</p>
					</WelcomeHeader>
				</FormContainer>
			</Container>
		)
	}
}

export default SignIn
