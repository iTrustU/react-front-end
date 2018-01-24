import React from 'react'
import styled from 'styled-components'
import SmallRating from '../smallRatting'

export const FontContainer = styled.p`
	font-size:${props => props.size || '12'}px;
	font-weigth:${props => props.weigth ||'300'};
	font-family: 'Dosis', sans-serif;
  letter-spacing:${props => props.weigth}px;
  margin:${props => props.margin ||'0vh 0vw'};
`

const Font = ({weigth, size,spacing, text, margin}) => (
  <FontContainer margin={margin} weigth={weigth} size={size} spacing={spacing}>
    {text}
  </FontContainer>
)

export default Font
