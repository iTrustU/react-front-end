import React, { Component } from 'react'
import styled from 'styled-components'
import AgentCardPortait from '../agentCardPortait'
import Font from '../font'
import {get} from '../../service'
export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	width:100%;
	padding: ${props => props.padding || '2vh 3vw'};
`
export const ButonContainer = styled.div`
  background-color:#fff;
`
export const ListContainer = styled.div`
  flex-direction: ${props => props.type || 'column'};
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
	display:flex;
	overflow:auto;
  width:100%;
	height:100%;
  padding: ${props => props.padding || '2vh 0vw'};
`

const RenderData = (datas=[])=> {
	if (datas.length === 0) {
		return(
			<ListContainer padding='0' >
				<Font text={'perusahan ini belum memiliki agent terdaftar'}/>
			</ListContainer>
		)
	}
	return(
		<ListContainer padding='0px 0px 30px 0px' type='row' justify='flex-start'>
				<AgentCardPortait/>
				<AgentCardPortait/>
				<AgentCardPortait/>
				<AgentCardPortait/>
				<AgentCardPortait/>
		</ListContainer>
	)
}

class AgentListH extends Component {
	state={
		agents:[2,1]
	}
	componentDidMount(){
		// get({url:`users/${this.props.userId}/reviews`})
		// .then(res => {
		// 	console.log(res.data);
		// 	this.setState({
		// 		reviews:res.data
		// 	})
		// })
	}
  render(){
    return(
    <Container padding='10px 0px'>
		{RenderData(this.state.agents)}
    </Container>
  )
  }
}

export default AgentListH
