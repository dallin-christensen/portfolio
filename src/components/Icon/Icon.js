import React from 'react'
import styled, { keyframes } from 'react-emotion'
import { white, green } from '../../utils/colors'
import keyboardImage from './keyboard.png'

const sinusoid = keyframes`
  0% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(.2,.25,.55,1);
    box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.2);;
  }
  25% {
    transform: translateY(-5px);
    animation-timing-function: cubic-bezier(.45,0,.8,.75);
    box-shadow: 0px 13px 14px rgba(0, 0, 0, 0.2);;
  }
  75% {
    transform: translateY(5px);
    animation-timing-function: cubic-bezier(.45,0,.8,.75);
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.2);;
  }
  100% {
    transform: translateY(0);
    box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.2);;
  }
`

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
`

const IconImage = styled('img')`
  width: 120px;
  margin-top: -10px;
  animation-delay: -.2s;
`

function Icon ({ fontSize }) {
  return (
    <Circle widthHeight='85%' backgroundColor='#fff' style={{ animation: `${sinusoid} 3s ease infinite` }}>
      <Anchor href='.' widthHeight='90%'>
        <Circle
          backgroundColor={green}
          pattern='true'
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize,
          }}
          >
            <IconImage src={keyboardImage} />
        </Circle>
      </Anchor>
    </Circle>
  )
}

export default Icon