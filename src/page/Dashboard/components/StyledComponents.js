import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
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
	align-items: center;
	padding:0vh 4vw;
  @media (max-width:750px){
    flex:1
  }
`
export const GeneralContainer = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width:100%;
	display:flex;
	padding:2vh 3vw;
	border-bottom: 1px solid grey;
`

export const FontContainer = styled.p`
	font-size:${props => props.size}px;
	font-weigth:${props => props.weigth};
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
	width:100px;
	height:100px;
	border: 5px solid #ffd700;
	margin:2vh 0;
	border-radius:50px;
`
export const DetailContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
  @media (max-width:750px){
    flex:1
    padding: 2vh 3vw;
  }
`
export const InsuranceContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
export const StarContainer = styled.div`
	margin: 0px 10px 0px 0px;
`
