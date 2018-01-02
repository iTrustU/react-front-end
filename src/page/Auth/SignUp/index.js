import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import {
	Container,
	FormContainer,
	WelcomeHeader,
	InputContainer
} from '../components/StyledComponents'
import { Link } from 'react-router-dom'
import firebase from '../../../utils/firebase'

class SignUp extends Component {
	state = {
		loginData: {
			email: '',
			password: '',
			fullname: ''
		}
	}

	handleInput = event => {
		this.setState(
			{
				...this.state.loginData,
				loginData: {
					...this.state.loginData,
					[event.target.name]: event.target.value
				}
			}
		)
	}
	onSingUp = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(succ => {
				firebase.auth().currentUser.updateProfile({
					displayName:this.state.fullname,
				})
			})
			.catch(error => {
				// Handle Errors here.
				console.log(error.message)
				var errorCode = error.code
				var errorMessage = error.message
				// ...
			})
	}
	render() {
		return (
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
						<label>Full Name</label>
						<Input
							name="fullname"
							type="text"
							fluid
							focus
							placeholder="Full Name"
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
	}
}

export default SignUp
