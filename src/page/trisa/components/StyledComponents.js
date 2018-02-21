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
	min-height:87vh;
  overflow:hidden;
	justify-content: space-between;
	background-color: #f5f5f5;
	align-items: center;
	padding:0vh 0vw;
  @media (max-width:750px){
    flex:1
  }
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
export const SimpleContainer = styled.div`
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


export const ChatBuble = styled.div`
  padding: 20px;
  background: #000;
  min-width: 100px;
  width: 200px;
  color: #fff;
`

export const ChatContainer = styled.div`
  margin: auto;
  padding: 10px;
  width: 100%;
`

export const ReplyContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`

export const ReplyBox = styled.input`
  border-radius: 20px;
`
export const ReplyButton = styled.button`
  background: #ccc;  
  color: #fff;
`
export const ChatAgentProfile = styled.div`
	border: 0.8px solid #ccc;
	margin-bottom: 5px;
	padding: 10px;
	color: #000;
	
	&:hover {
		background: #f2711c;
		color: #fff;
		transition: background 0.4s;
	}

	img {
		&:hover {
			color: #fff;
			background: #f2711c;
		}
		max-width: 100%;
	}
`