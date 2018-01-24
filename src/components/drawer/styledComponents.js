import styled from 'styled-components'

export const Container = styled.div`
	display: ${props => props.show ? 'flex':'none'};
	flex-direction: column;
  background-color: #fff;
  flex:2;
	justify-content: flex-start;
	align-items: center;
  height:88vh;
  padding:2vh 2vw;
  @media (max-width:750px){
    height:92vh;
    flex:2;
  }
`

export const ItemContainer = styled.div`
  width:100%;
  text-align:center;
  color:#f28d2c;
  height:8vh;
  padding:2vh 2vw;
  @media (max-width:750px){
    height:5vh;
  }
`
