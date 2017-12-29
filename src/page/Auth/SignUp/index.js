import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import { Container, FormContainer, WelcomeHeader, InputContainer } from '../components/StyledComponents'
import { Link } from 'react-router-dom'

class SignUp extends Component {
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
						<Button fluid>Sign Up</Button>
					</InputContainer>
					<WelcomeHeader>
						<p>Have ITrustU account? <Link to="/signin">Login here</Link></p>
					</WelcomeHeader>
				</FormContainer>
			</Container>
		)
	}
}

export default SignUp
