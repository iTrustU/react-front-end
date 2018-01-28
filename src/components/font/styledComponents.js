import styled from 'styled-components'
// import SmallRating from '../smallRatting'

export const FontContainer = styled.p`
	font-size:${props => props.size || '12'}px;
	font-weight:${props => props.weight ||'300'}px;
	font-family: 'Dosis', sans-serif;
  letter-spacing:${props => props.spacing || '1'}px;
  margin:${props => props.margin ||'0vh 0vw'};
`
