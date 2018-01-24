import styled from 'styled-components'

export const Container = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
	width:100%;
	display:flex;
	padding: ${props => props.padding || '2vh 3vw'};
`
export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	font-weigth:${props => props.weigth};
	margin:1vh 0;
	font-family: 'Dosis', sans-serif;

`
export const HeaderContainer = styled.div`
flex-direction: ${props => props.type || 'column'};
justify-content: ${props => props.justify || 'center'};
align-items: center;
background-color:#fff;
width:100%;
display:flex;
padding: ${props => props.padding || '1vh 3vw'};
border-radius:5px 5px 0 0px;
`
export const CommentContainer = styled.div`
flex-direction: ${props => props.type || 'column'};
justify-content: ${props => props.justify || 'center'};
align-items: flex-start;
width:100%;
background-color:#fff;
display:flex;
border-radius:0px 5px 5px 5px;
padding: ${props => props.padding || '1vh 3vw'};
`
