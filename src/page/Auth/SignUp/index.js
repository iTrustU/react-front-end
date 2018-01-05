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
import { post as servicePost} from '../../../service'

class SignUp extends Component {
	state = {
		loginData: {
			email: '',
			password: '',
			name: '',
			address:'',
			location:{
				lat: -6.121435,
				lng: 106.774124,
			}
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
		const {
			email,
			password,
			name,
			address,
			location
		} = this.state
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(succ => {
				servicePost('Agents',{name,address,location,firebaseUid:succ.uid})
				firebase.auth().currentUser.updateProfile({
					displayName:name,
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
							name="name"
							type="text"
							fluid
							focus
							placeholder="Full Name"
							onChange={this.handleInput}
						/>
					</InputContainer>
					<InputContainer>
						<label>address</label>
						<Input
							name="address"
							type="text"
							fluid
							focus
							placeholder="Address"
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
