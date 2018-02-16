import React, { Component } from 'react'
import styled from 'styled-components'
import AgentCardPortait from '../agentCardPortait'
import Font from '../font'
import { get } from '../../service'
import { Loader } from 'semantic-ui-react'
export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	width: 100%;
	padding: ${props => props.padding || '2vh 3vw'};
`
export const ButonContainer = styled.div`
	background-color: #fff;
`
export const ListContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	display: flex;
	overflow: auto;
	width: 100%;
	height: 100%;
	padding: ${props => props.padding || '2vh 0vw'};
`

const RenderData = (datas = []) => {
	if (datas.length === 0) {
		return (
			<ListContainer padding="0">
				<Font text={'perusahan ini belum memiliki agent terdaftar'} />
			</ListContainer>
		)
	}
	return (
		<ListContainer padding="0px 0px 30px 0px" type="row" justify="flex-start">
			{datas.map(agent => {
				return <AgentCardPortait
					key={agent.id}
					image={agent.profile.profilePicture}
					name = {agent.profile.name}
					city = {agent.profile.city}
					rating = {agent.profile.finalRating.toFixed(1)}
					url={`/profile/${agent.id}`}
					/>
			})}
		</ListContainer>
	)
}

class AgentListH extends Component {
	state = {
		agents: []
	}
	componentDidMount() {
		get({
			url: `users?filter[include]=profile&filter[where][insuranceCompanyId]=${
				this.props.companyId
			}`
		}).then(res => {
			this.setState({
				agents: res.data
			})
		})
	}
	render() {
		if (this.state.agents.length === 0) {
			return <Loader />
		} else {
			return (
				<Container padding="10px 0px">
					{RenderData(this.state.agents)}
				</Container>
			)
		}
	}
}

export default AgentListH
