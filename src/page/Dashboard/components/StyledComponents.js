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
  @media (max-width:750px){
    flex:1
  }
`
export const ProfileContainer = styled.div`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
  @media (max-width:750px){
    flex:1
    flex-wrap: wrap;
  }
`
export const ImageContainer = styled.div`
	flex-direction: column;
  overflow:hidden;
	justify-content: flex-start;
	align-items: center;
  @media (max-width:750px){
    flex:1;
    padding: 2vh 3vw;
  }
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
