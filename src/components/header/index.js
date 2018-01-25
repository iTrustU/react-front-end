import React, {Component} from 'react';
import {InstantSearch, Hits, SearchBox, Highlight} from 'react-instantsearch/dom';
import { Link } from 'react-router-dom'
import { Container, MenuContainer, LogoContainer, SearchContainer, InerContainer } from './styledComponents'
import {Icon } from 'semantic-ui-react'


const Product = ({hit}) =>  {
  return (
    <div style={{marginTop: '10px'}}>
      <Link to={`/profile/${hit.id}`} style={{width:'100%'}}>
      <span className="hit-name">
        <Highlight attributeName="profile.name" hit={hit} />
      </span>
    </Link>
    </div>
  );
};


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
        <InstantSearch
          appId="4LH6EUNWWA"
          apiKey="cbc04bfdccda202e8c712f49297f6971"
          indexName="iTrustU"
        >
        <SearchBox/>
        <div>
          <Hits hitComponent={Product} />
        </div>

      </InstantSearch>
      </SearchContainer>
    </Container>
    )
  }
}


export default Header
