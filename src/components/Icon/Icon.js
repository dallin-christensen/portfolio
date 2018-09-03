import React from 'react'
import styled from 'react-emotion'
import { white } from '../../utils/colors'

const Circle = styled('div')`
  width: ${props => props.widthHeight ? props.widthHeight : '100%'};
  height: ${props => props.widthHeight ? props.widthHeight : '100%'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  font-weight: bold;
  border-radius: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-image: ${props => props.pattern ? `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231ebc61' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")` : '' };
`

const Anchor = styled('a')`
  width: ${props => props.widthHeight ? props.widthHeight : '100%'};
  height: ${props => props.widthHeight ? props.widthHeight : '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${white};
  border-radius: 50%;
  transform: rotate(-20deg);
`

const IconContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

function Icon ({ fontSize }) {
  return (
    <Circle widthHeight='85%' backgroundColor='#fff'>
      <Anchor href='.' widthHeight='90%'>
        <Circle
          backgroundColor='#2ecc71'
          pattern
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize,
          }}>
          <IconContainer>
            {'//'}
          </IconContainer>
        </Circle>
      </Anchor>
    </Circle>
  )
}

export default Icon