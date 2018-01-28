import React from 'react'
import {FontContainer} from './styledComponents'

const Font = ({weight, size, spacing, text, margin}) => (
  <FontContainer margin={margin} weight={weight} size={size} spacing={spacing}>
    {text}
  </FontContainer>
)

export default Font
