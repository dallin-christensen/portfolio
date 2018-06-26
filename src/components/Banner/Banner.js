import React, { Component } from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  width: 1200px;
  max-width: 1200px;
  height: 600px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: #3498db;
  color: rgba(255, 255, 255, 0.9);
`

const BannerTitle = styled('div')`
  width: 600px;
  font-size: 70px;
`

const BannerText = styled('div')`
  width: 600px;
  margin-top: 20px;
  font-size: 30px;
`

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

class Banner extends Component {
  render () {
    return (
      <Container>
        <div style={{width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Circle widthHeight='196px' backgroundColor='rgba(255, 255, 255, 0.9)'>
            <Circle widthHeight='180px' backgroundColor='#2ecc71' style={{marginLeft: 'auto', marginRight: 'auto', fontSize: '140px'}}>
              <IconContainer>
                <div style={{position: 'relative', right: '10px', top: '-12px'}}>{'{'}</div>
                <div style={{position: 'relative', left: '10px', top: '-12px'}}>{'}'}</div>
              </IconContainer>
            </Circle>
          </Circle>
        </div>
        <div>
          <BannerTitle>Dallin Christensen</BannerTitle>
          <BannerText>Software Engineer | Front-End Developer</BannerText>
        </div>
      </Container>
    )
  }
}

export default Banner