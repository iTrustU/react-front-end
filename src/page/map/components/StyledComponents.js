import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	background-color: #f5f5f5;
  height:88vh;
	align-items: flex-start;
  @media (max-width:750px){
    height:92vh;
  }
`
export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
  flex:8;
	height:91.5vh;
  overflow:hidden;
	justify-content: space-between;
	background-color: #f5f5f5;
	align-items: center;
	padding:0vh 0vw;
  @media (max-width:750px){
    flex:1
  }
`
export const Poin = styled.div`
	width:40px;
	height:60px;
	background-color:orange;
`
export const GeneralContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	background-color: ${props => props.backgroundColor ||''};
	align-items: center;
	width:100%;
	display:flex;
	padding: ${props => props.padding || '2vh 3vw'};
	border: ${props => props.border || '0px 0px 1px 0px solid #ddd'};
`

export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	flex:${props => props.flex || '1'};
	font-weigth:${props => props.weigth};
	font-family: 'Dosis', sans-serif;
	margin:1vh 0;

`
export const SmallContainer = styled.div`
display:'flex';
flex: ${props => props.fNumber || '1'};
flex-direction: ${props => props.type || 'row'};
justify-content: ${props => props.justify || 'center'};
align-items: center;
padding: ${props => props.padding || '2vh 3vw'};
`

export const SimpleContainer = styled.div`
display:'flex';
flex: ${props => props.fNumber || '1'};
flex-direction: ${props => props.type || 'column'};
justify-content: ${props => props.justify || 'center'};
align-items: center;
padding: ${props => props.padding || '2vh 3vw'};
border: ${props => props.border || '0px 0px 1px 0px solid #ddd'};

`

export const ImageListContainer = styled.div`
	display: flex;
	width:100%;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center ;
	padding: 0vh 5vw;
	margin:1vh 5vw;
`
