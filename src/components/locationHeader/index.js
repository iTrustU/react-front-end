import React from 'react'
import styled from 'styled-components'
import Font from '../font'
import { Icon, Checkbox } from 'semantic-ui-react'

export const Container = styled.div`
  flex-direction: ${props => props.type || 'column'};
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
  background-color:white;
  width:${props => props.width || '100%'};
  flex:${props => props.flex || '1'};
  display:flex;
  padding: ${props => props.padding || '2vh 3vw'};
  border-width: ${props => props.borderWidth || '0'};
  border-color: ${props => props.borderColor || '#ddd'};
  border-style: ${props => props.borderStyle || 'solid'};
`

const LocationHeader = ({city='jakarta', status=false,  onStatusChange}) => {
  return(
    <Container type='row' borderWidth='1px 0px'>
      <Container padding='0' flex='1'>
        <Icon name='point' size='large' style={{color:'#f28d2c'}}/>
      </Container>
      <Container padding='0' flex='4'>
        <Font text={city} size="18" weight="800" spacing='2'/>
      </Container>
      <Container padding='0' flex='1'>
        <Checkbox toggle
          onChange={onStatusChange}
          checked={status}/>
      </Container>
    </Container>
  )
}

export default LocationHeader
