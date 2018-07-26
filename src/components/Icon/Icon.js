import React, { Component } from 'react'
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
        <Circle backgroundColor='#2ecc71' style={{marginLeft: 'auto', marginRight: 'auto', fontSize, }}>
          <IconContainer>
            {'//'}
          </IconContainer>
        </Circle>
      </Anchor>
    </Circle>
  )
}

export default Icon