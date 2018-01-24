import React from 'react'
import styled from 'styled-components'
import SmallRating from '../smallRatting'
import Font from '../font'

export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	background-color:#fff;
	width: 100%;
	display: flex;
	flex:1;
	margin:0px 0px 2vh 0px;
`
export const RatingContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	flex: 1;
	padding: ${props => props.padding || '0vh 3vw'};
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
	border-bottom: 1px solid #ddd;

	align-items: center;
`
export const TextContainer = styled.div`
	width:100%;
	display:flex;
	flex:8;
	align-items: center;
`

const CommentCard = ({
	value = '4.1',
	name = 'raysa',
	comment = 'agent asuransi ini antap jaya aldkalkdlakdlak dlakdlakdlakdlakdlakdlakdlakdalkdlllllllllllllllllllllll',
	date = '14-05-2017'
}) => {
	return (
		<Container type="row">
			<RatingContainer>
				<SmallRating value={value} />
			</RatingContainer>
			<ContentContainer>
				<NameDate name='namedate'>
					<Font size={16} weight={500} margin='0vh 5vw 0vh 0vh'text={name}/>
					<Font size={9} text={date}/>
				</NameDate>
				<TextContainer>
					<Font text={comment} />
				</TextContainer>
			</ContentContainer>
		</Container>
	)
}

export default CommentCard
