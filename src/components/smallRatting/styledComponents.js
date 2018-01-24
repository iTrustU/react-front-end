import styled from 'styled-components'

export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	font-weigth:${props => props.weigth};
	margin:2vh 0 0vh 0;
	font-family: 'Dosis', sans-serif;
`
export const RatingContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	flex-direction:column;
	width:70px;
	height:70px;
	border: 5px solid #ffd700;
	margin:2vh 0;
	border-radius:50px;
`
