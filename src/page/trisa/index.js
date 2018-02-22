import React, { Component } from 'react'
import {
	// Loader,
	// Button,
	Input,
	Card,
	Rating
} from 'semantic-ui-react'
import axios from 'axios'
import shortid from 'shortid'
import { get } from '../../service'
import moment from 'moment'
import {
	ChatAgentProfile,
  // ChatBuble,
  ChatContainer,
  // ReplyContainer,
  // ReplyBox,
  // ReplyButton,
	Container,
	MainContainer,
	GeneralContainer,
	SimpleContainer,
} from './components/StyledComponents'

import {
	Header,
	Drawer,
	// AgentCard,
	// LocationHeader
} from '../../components'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {
	state = {
    chats:[
			{
        "type": "text",
        "message": 'Halo aku trisa aku adalah agent asuransi virtual yang di ciptakan untuk membantu kamu mencari agent yang terbaik dan menjawab pertanyaan kamu tentang asuransi',
        "sender": "bot"
    }
		],
		chatId: '',
		chatMessage: ''
	}

	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}

	componentDidMount() {
		this.setChatId()
	}

	setChatId = () => {
		this.setState({
			chatId: shortid.generate()
		})
	}

	setChatMessage = (e, { value: chatMessage } )  => {
		if (chatMessage.length ) {
			this.setState({
				chatMessage
			})
		}
	}
	onSend = () => {
		this.sendMessage(this.state.chatMessage)
		this.setState({
			chatMessage:''
		})
	}
	sendMessage = async (chatMessage) =>{
		moment.locale('id')
		try {
			const messagePostBody = {
				id: this.state.chatId,
				message: chatMessage
			}
			this.setState({
				chats: [
					...this.state.chats,
					{
						...messagePostBody,
						sender: 'me',
						time: moment().startOf('minutes').fromNow()
					}
				]
			})

			const sendChatResponse = await axios.post('https://udin.us/trisa/local', messagePostBody)
			if (sendChatResponse) {
				this.setState({
					chats: [
						...this.state.chats,
						...sendChatResponse.data.map(({ sender, data }) => ({
							id: this.state.chatId,
							sender,
							message: data,
							time: moment().startOf('minutes').fromNow()
						}))
					]
				})
			}
		} catch (error) {
			throw new Error('Chat Error', error)
		}
	}

	render() {
		const { chats } = this.state
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
            <GeneralContainer
							name="ChatList"
							style={{
								marginBottom: '50px'
							}}
						>
							<ChatContainer>
								{chats.map((chat, index) => {
									return (
										<div
											style={{
												display: 'flex',
												marginTop: 20,
												justifyContent: chat.sender === 'bot' ? 'flex-end' : 'flex-start'
											}}
											key={index}
										>
											<Card
												color={ chat.sender === 'bot' ? 'orange' : 'teal' }
											>
												<Card.Content>
													<h4>{chat.sender === 'bot' ? 'Trisa' : 'me'}</h4>
													{ Array.isArray(chat.message)
														? chat.message.map((msg, idx) => (<Link key={idx} to={`profile/${msg.id}`}>
															<ChatAgentProfile>
																<img src={msg.picture} />
																<h3>{msg.name}</h3>
																<p>From {msg.city}</p>
																<p>Agent of <em>{msg.company}</em></p>
																<span> <Rating icon='star' defaultRating={msg.rating} maxRating={5} /></span>
															</ChatAgentProfile>
														</Link>))
														: chat.message
													}
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
							style={{
								position: 'fixed',
								bottom: '0px'
							}}
						>
							<Input
								action={{
									color: 'orange',
									labelPosition: 'right',
									icon: 'send',
									content: 'Send',
									size: 'huge',
                  onClick: this.onSend
								}}
								style={{
									width: '100%',
									borderRadius: 20
								}}
								placeholder='Input text here'
								onChange={this.setChatMessage}
								value={this.state.chatMessage}
							/>
            </GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Home)
