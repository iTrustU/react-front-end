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
  overflow:hidden;
	justify-content: flex-start;
	background-color: #f5f5f5;
	align-items: center;
	padding:0vh 4vw;
  @media (max-width:750px){
    flex:1
  }
`
export const GeneralContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	flex:1;
	align-items: center;
	width:100%;
	display:flex;
	padding: ${props => props.padding || '2vh 3vw'};
	border-bottom: 1px solid #ddd;
`
export const ProfileContainer = styled.div`
	flex-direction: ${props => props.type || 'column'};
	justify-content: ${props => props.justify || 'center'};
	align-items: ${props => props.align || 'center'};
	display:${props => props.display || 'flex'};;
	flex:${props => props.flex || '1'};
	padding: ${props => props.padding || '2vh 3vw'};
	margin: ${props => props.margin || '0vh 3vw'};
`

export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	flex:${props => props.flex || '1'};
	font-weigth:${props => props.weigth};
	font-family: 'Dosis', sans-serif;
	margin:1vh 0;

`
// export const Container = styled.p`
// 	font-size:20px;
// 	margin:1vh 0;
// `
export const RatingContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
	width:80px;
	height:80px;
	border: 5px solid #ffd700;
	margin:2vh 0;
	border-radius:50px;
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
export const LogoContainer = styled.div`
	width:50px;
	height:30px;
	display:flex;
	flex:${props => props.flex || '1'}
	flex-direction: row;
	justify-content: center;
	align-items: center ;
	margin:1vh 5vw;
`
