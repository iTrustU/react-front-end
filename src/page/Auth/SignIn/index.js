import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import { Container, FormContainer, WelcomeHeader, InputContainer } from '../components/StyledComponents'
import { Link } from 'react-router-dom'

class SignIn extends Component {
	state = {
		loginData: {
			email: '',
			password: ''
		}
	}

	handleInput = event => {
		this.setState({
			...this.state.loginData,
			loginData: {
				...this.state.loginData,
				[event.target.name]: event.target.value
			}
		}, () => console.log(this.state.loginData))
	}
	render() {
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
						<Button fluid>Login</Button>
					</InputContainer>
					<InputContainer>
						<Button fluid>
							<Icon name="google" />login with google
						</Button>
					</InputContainer>
					<WelcomeHeader>
						<p>Dont have account? <Link to="/signup">Register here</Link></p>
					</WelcomeHeader>
				</FormContainer>
			</Container>
		)
	}
}

export default SignIn
