import React, { Component } from 'react'
import styled from 'react-emotion'

const Circle = styled('div')`
  width: ${props => props.widthHeight ? props.widthHeight : 100};
  height: ${props => props.widthHeight ? props.widthHeight : 100};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  border-radius: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transform: rotate(-15deg);
`

function Icon ({ fontSize }) {
  return (
    <Circle widthHeight='85%' backgroundColor='#fff'>
      <Circle widthHeight='90%' backgroundColor='#2ecc71' style={{marginLeft: 'auto', marginRight: 'auto', fontSize, }}>
        <IconContainer>
          <div style={{position: 'relative', right: '10px', top: '-12px'}}>{'{'}</div>
          <div style={{position: 'relative', left: '10px', top: '-12px'}}>{'}'}</div>
        </IconContainer>
      </Circle>
    </Circle>
  )
}

export default Icon