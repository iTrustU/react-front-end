import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import { Container, FormContainer, WelcomeHeader, InputContainer } from './components/StyledComponents'

class SignIn extends Component {
	state = {
		loginData: {
			email: '',
			password: ''
		}
	}

	handleInput = event => {
		const newLoginData = {}
		if (!Object.prototype.hasOwnProperty.call(newLoginData, event.target.name)) {
			newLoginData[event.target.name] = event.target.value
		}
		console.log(newLoginData)
		this.setState({
			loginData: newLoginData
		})
	}
	render() {
		return (
			<Container>
				<h1>logo</h1>
				<FormContainer>
					<WelcomeHeader>
						<h3>login to ITrustU</h3>
					</WelcomeHeader>
					<InputContainer>
						<label>Email</label>
						<Input
							name="email"
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
						<p>dont have account register</p>
					</WelcomeHeader>
				</FormContainer>
			</Container>
		)
	}
}

export default SignIn
