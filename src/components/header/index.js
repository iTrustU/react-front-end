import React from 'react';
import { Container, MenuContainer, LogoContainer } from './styledComponents'
import {Icon} from 'semantic-ui-react'


const Header = (props) => {
  return(
    <Container>
      <MenuContainer onClick={props.menuClick} >
        <Icon size='large' color='orange' name='content'/>
      </MenuContainer>
      <LogoContainer>
        <h2 style={{color:'orange'}}>ini logo</h2>
      </LogoContainer>
      <MenuContainer/>
    </Container>
  )
}

export default Header
