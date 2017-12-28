import React, { Component } from 'react'
import { Input, Label, Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5vh 20vw;
`
const FormContainer = styled.div`
	width: 300px;
	overflow: hidden;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
`

const WellcomeHeader = styled.div`
	background-color: #124aa5;
	height: 50px;
	display: flex;
	color: yellow;
	justify-content: center;
	align-items: center;
`
const InputContainer = styled.div`
	justify-content: flex-start;
	flex: 1;
	align-items: center;
	margin: 10px 0px;
`
class LoginPage extends Component {
	constructor() {
		super()
		this.state = {
			loginData: {
				email: '',
				password: ''
			}
		}
	}
	handleInput = event => {
		newLoginData[event.target.name] = event.target.value
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
					<WellcomeHeader>
						<h3>login to ITrustU</h3>
					</WellcomeHeader>
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
					<WellcomeHeader>
						<p>dont have account register</p>
					</WellcomeHeader>
				</FormContainer>
			</Container>
		)
	}
}

export default LoginPage
