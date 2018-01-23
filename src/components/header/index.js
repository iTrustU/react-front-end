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
          src='https://firebasestorage.googleapis.com/v0/b/itrustu-a10b5.appspot.com/o/iTrustU-logo-500px%20(1).png?alt=media&token=46a2ded3-9875-4da7-bd38-3e202301fe81'/>
      </LogoContainer>
      <MenuContainer/>
    </Container>
  )
}

export default Header
