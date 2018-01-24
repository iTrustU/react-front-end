import styled from 'styled-components'

export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: center;
	width:100%;
	display:flex;
	padding: ${props => props.padding || '2vh 3vw'};
	border-bottom: 1px solid #ddd;
`
export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	font-weigth:${props => props.weigth};
	margin:1vh 0;
	font-family: 'Dosis', sans-serif;

`
export const RatingContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	width:80px;
	height:80px;
	border: 5px solid #ffd700;
	margin:2vh 0;
	border-radius:50px;
`
