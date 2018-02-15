import React, { Component } from 'react'
import {  Button } from 'semantic-ui-react'
import styled from 'styled-components'
import CommentCard from '../commentCard'
import Font from '../font'
import {get} from '../../service'
export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	width:100%;
	display:flex;
	padding: ${props => props.padding || '2vh 3vw'};
`
export const ButonContainer = styled.div`
  background-color:#fff;
`
export const ListContainer = styled.div`
  flex-direction: ${props => props.type || 'column'};
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
  width:100%;
  display:flex;
  padding: ${props => props.padding || '2vh 0vw'};
`

const RenderData = (datas=[])=> {
	if (datas.length === 0) {
		return(
			<ListContainer>
				<Font text={'anda belum memiliki reviews'}/>
			</ListContainer>
		)
	}
	return(
		<ListContainer>
			{datas.map(data =>
				<CommentCard
					key={data.id}
					value={data.rating}
					comment={data.comment}
					/>
			)}
		</ListContainer>
	)
}

class CommentList extends Component {
	state={
		reviews:[]
	}
	componentDidMount(){
		get({url:`users/${this.props.userId}/reviews`})
		.then(res => {
			this.setState({
				reviews:res.data
			})
		})
	}
  render(){
    return(
    <Container>
      <ButonContainer>
        <Button.Group basic>
          <Button style={{width:'80px'}}>recent</Button>
          <Button style={{width:'80px'}}>all</Button>
        </Button.Group>
      </ButonContainer>
		{RenderData(this.state.reviews)}
    </Container>
  )
  }
}

export default CommentList
