import React from 'react';
import { Container, MenuContainer, LogoContainer } from './styledComponents'
import {Icon, Image} from 'semantic-ui-react'


const Header = (props) => {
  return(
    <Container>
      <MenuContainer onClick={props.menuClick} >
        <Icon size='large' color='orange' name='content'/>
      </MenuContainer>
      <LogoContainer>
        <img
          style={{width:100}}
          src='https://firebasestorage.googleapis.com/v0/b/itrustu-a10b5.appspot.com/o/ItrustU-text-logo.png?alt=media&token=bfa1b4eb-f1a0-4202-a846-76ebc0253a83'/>
      </LogoContainer>
      <MenuContainer/>
    </Container>
  )
}

export default Header
