import React, { Component } from 'react'
import { Loader, Button, Input, Card  } from 'semantic-ui-react'
import axios from 'axios'
import { get } from '../../service'
import { 
  ChatBuble,
  ChatContainer,
  ReplyContainer,
  ReplyBox,
  ReplyButton,
	Container,
	MainContainer,
	GeneralContainer,
	SimpleContainer,
} from './components/StyledComponents'

import { Header, Drawer, AgentCard, LocationHeader  } from '../../components'
import { withRouter } from 'react-router-dom'

class Home extends Component {
	state = {
    chats:[
			{
				sender:'bot',
				message: 'Hallo',
				time: '1 hour ago'
			},
			{
				sender:'me',
				message: 'Hallo juga',
				time: '25 minutes ago'
			},
			{
				sender:'bot',
				message: 'Kamu siapa?',
				time: '24 minutes ago'
			},
			{
				sender:'bot',
				message: 'Saya siapa?',
				time: '23 minutes ago'
			},
		]
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {

	}


	render( ) {
		const { chats } = this.state
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
            <GeneralContainer name="ChatList">
							<ChatContainer>
								{chats.map(chat => {
									return (
										<div
											style={{
												display: 'flex',
												marginTop: 20,
												justifyContent: chat.sender === 'bot' ? 'flex-end' : 'flex-start'
											}}
										>
											<Card
												color={ chat.sender === 'bot' ? 'orange' : 'teal' }
											>
												<Card.Content>
													{ chat.message }
												</Card.Content>
												<Card.Description>
													<p style={{
														fontSize: '11px',
														padding: '10px'
													}}>
														{ chat.time } 
													</p>
												</Card.Description>
											</Card>
										</div>
									)
								})}
							</ChatContainer>
            </GeneralContainer>
            <GeneralContainer
              name="CreateChat"
              padding="5px 0px"
              type='row'
              backgroundColor='white'
						>
							<Input
								action={{
									color: 'orange',
									labelPosition: 'right',
									icon: 'send',
									content: 'Send',
									size: 'huge'
								}}
								style={{
									width: '100%',
									borderRadius: 20
								}}
								placeholder='Input text here'
							/>
            </GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Home)
