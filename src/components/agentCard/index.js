import React from 'react'
import styled from 'styled-components'
// import SmallRating from '../smallRatting'
import Font from '../font'
import ReactStars from 'react-stars'
import { Link } from 'react-router-dom'
import {Image, Icon } from 'semantic-ui-react'

export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
	background-color:#fff;
	width: 100%;
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
	margin:1vh 5vw;
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
	padding: ${props => props.padding || '2vh 1vw 2vh 2vw'};
`
export const ContentContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	flex: 3;
	padding: ${props => props.padding || '1vh 3vw'};
`
export const NameDate = styled.div`
	width:100%;
	display:flex;
	flex:2;
	flex-direction: ${props => props.type || 'row'};
	justify-content: ${props => props.justify || 'flex-start'};
	padding:'0vh 0vw 1vh 0vw';
	align-items: center;
`
export const TextContainer = styled.div`
	width:100%;
	display:flex;
	flex:8;
	align-items: center;
`

const AgentCard = ({
	image = '',
	name = 'raysa',
	city = 'jakarta',
	rating = '4.0',
	company = {},
	url=''
}) => {
	return (
	<Link to={url} style={{width:'100%'}}>
	<Container padding='0vh 2vw'>
		<Container type="row" padding='0'>
			<RatingContainer>
				<Image src={image} size='small' rounded/>
			</RatingContainer>
			<ContentContainer>
					<Font size={16} weight={500} margin='0vh 5vw 0vh 0vh' text={name}/>
					<ReactStars value={rating}/>
				<TextContainer>
				</TextContainer>
			</ContentContainer>
		</Container>
		<Container type="row" padding='0'
			borderWidth='1px 0px 0px 0px'
			>
			<ImageListContainer>
				<LogoContainer>
					<Image
						src={company.logoUrl}
						style={{width:'30px',margin:0}}
						/>
				</LogoContainer>
				<FontContainer size={12}>{company.name}</FontContainer>
			</ImageListContainer>
			<ImageListContainer>
				<LogoContainer>
					<Icon name='point' style={{color:'#f28d2c'}}/>
				</LogoContainer>
				<FontContainer size={12}>{city}</FontContainer>
			</ImageListContainer>
		</Container>
	</Container>
	</Link>
	)
}

export default AgentCard
