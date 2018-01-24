import React, {Component} from 'react';
import { Container, MenuContainer, LogoContainer, SearchContainer, InerContainer } from './styledComponents'
import {Icon, Image} from 'semantic-ui-react'



class  Header extends Component {
  state = {
    isSearch:false
  }
  changeIsSearch = () =>{
    this.setState({
      isSearch:!this.state.isSearch
    })
  }
  render(){
    console.log(this.state.isSearch);
    return(
      <Container>
      <InerContainer>
        <MenuContainer onClick={this.props.menuClick} >
          <Icon size='large' color='orange' name='content'/>
        </MenuContainer>
        <LogoContainer>
          <img
            style={{width:100}}
            src='https://firebasestorage.googleapis.com/v0/b/itrustu-a10b5.appspot.com/o/ItrustU-text-logo.png?alt=media&token=bfa1b4eb-f1a0-4202-a846-76ebc0253a83'/>
        </LogoContainer>
        <MenuContainer onClick={this.changeIsSearch} >
          <Icon size='large' color='orange' name='search'/>
        </MenuContainer>
      </InerContainer>
      <SearchContainer show={this.state.isSearch}>
        <h1>lalaalla</h1>
      </SearchContainer>
    </Container>
    )
  }
}


export default Header
