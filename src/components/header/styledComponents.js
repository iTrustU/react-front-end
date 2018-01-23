import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
  background-color: #FFF;
	justify-content: center;
	align-items: center;
  height:12vh;
  padding:2vh 2vw;
  @media (max-width:750px){
    height:8vh;
  }
`

export const MenuContainer = styled.div`
 flex:1;
 display:flex;
 cursor:pointer;
 justify-content: center;
 align-items: center;
`
export const LogoContainer = styled.div`
 flex:8;
 @media (max-width:750px){
    flex:4;
 }
 display:flex;
 justify-content: center;
 align-items: center;
`
