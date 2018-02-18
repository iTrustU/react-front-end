import React, { Component } from 'react'
import { Loader, Input,Button  } from 'semantic-ui-react'
import axios from 'axios'
import { get } from '../../service'
import {
	Container,
	MainContainer,
	GeneralContainer,
  SimpleContainer,
} from './components/StyledComponents'

import { Header, Drawer, AgentCard, LocationHeader  } from '../../components'
import { withRouter } from 'react-router-dom'

class Home extends Component {
	state = {
    chats:[{
      sender:'bot',

    }],
    chat:'',
	}
	changeDrawer = () => {
		this.setState({
			showDrawer: !this.state.showDrawer
		})
	}
	componentDidMount() {

	}


	render( ) {
		return (
			<div>
				<Header name="header" menuClick={this.changeDrawer} />
				<Container name="Container">
					<Drawer show={this.state.showDrawer} />
					<MainContainer name="MainContainer">
            <GeneralContainer name="ChatList">
              lalal
            </GeneralContainer>
            <GeneralContainer
              name="CreateChat"
              padding="5px 0px"
              type='row'
              backgroundColor='white'
              >
              <SimpleContainer fNumber='4' padding='0px 10px'>
                <Input focus size='big' placeholder='chat here' fluid />
              </SimpleContainer>
              <SimpleContainer fNumber='1' padding='0'>
                <Button size='big' color='orange'>Send</Button>
              </SimpleContainer>
            </GeneralContainer>
					</MainContainer>
				</Container>
			</div>
		)
	}
}


export default withRouter(Home)
