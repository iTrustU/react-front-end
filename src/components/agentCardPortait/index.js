import React from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'
import Font from '../font'
import { Link } from 'react-router-dom'
import {Image, Icon } from 'semantic-ui-react'

export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
	background-color:#fff;
	width: ${props => props.width || '100%'};
	display: flex;
	flex:1;
	border-width: ${props => props.borderWidth || '0'};
	border-style: solid;
	border-color: #ddd;
	padding: ${props => props.padding || '0'};
	margin:${props => props.margin || '0px 0px 2vh 0px'};
`
export const ImageListContainer = styled.div`
	display: flex;
	flex:1;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center ;
	padding: 0vh 0vw;
	margin:1vh 4vw;
`
export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	flex:${props => props.flex || '1'};
	font-weigth:${props => props.weigth};
	font-family: 'Dosis', sans-serif;
	margin:1vh 0;
`
export const LogoContainer = styled.div`
	width:50px;
	height:30px;
	display:flex;
	flex:${props => props.flex || '1'}
	flex-direction: row;
	justify-content: center;
	align-items: center ;
	margin:1vh 0vw;
`

export const RatingContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	flex: 1;
  max-width:${props => props.width || ''};
  max-height:${props => props.height || ''};
  border-width: ${props => props.bWidth || '0'};
  border-style: ${props => props.bStyle || 'solid'};
  border-color : ${props => props.bColor || '#ffd700'};
  border-radius: ${props => props.bRadius || '0'};
  margin:${props => props.margin || '2vh 0;' };
	padding: ${props => props.padding || '1vh 2vw 1vh 2vw'};
`
export const ContentContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	flex: 3;
	padding: ${props => props.padding || '1vh 3vw'};
`



const AgentCardPortait = ({
	image = 'https://dl.airtable.com/Jn9N7DISQmL2OTo9ulOj_22175523.jpg',
	name = 'raysa',
	city = 'jakarta',
	rating = '4.0',
	company = {},
	url=''
}) => {
	return (
  <Link to={url} style={{width:'180px', margin:'0px 10px'}}>
  	<Container padding='0vh 2vw'  width='180px'>
  		<Container padding='0' margin='0'>
  			<RatingContainer margin='0'>
  				<Image src={image} size='small' rounded/>
  			</RatingContainer>
  			<ContentContainer>
  					<Font size={16} weight={500} text={name}/>
  			</ContentContainer>
  		</Container>
      <Container type='row'>
        <RatingContainer width='40px' height='40px' bWidth='3px' bRadius='30px' margin='0vh 3vw 0vh 0vw'>
          <Font text={rating}/>
        </RatingContainer>
        <ReactStars value={rating}/>
      </Container>
  	</Container>
  </Link>
	)
}

export default AgentCardPortait
