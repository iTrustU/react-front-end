import React, { Component } from 'react'
import { Image, Button, Comment } from 'semantic-ui-react'
import styled from 'styled-components'
import CommentCard from '../commentCard'
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

class CommentList extends Component {
  render(){
    return(
    <Container>
      <ButonContainer>
        <Button.Group basic>
          <Button style={{width:'80px'}}>recent</Button>
          <Button style={{width:'80px'}}>all</Button>
        </Button.Group>
      </ButonContainer>
			<ListContainer>
				<CommentCard/>
				<CommentCard/>
			</ListContainer>
    </Container>
  )
  }
}

export default CommentList
