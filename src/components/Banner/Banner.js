import React, { Component } from 'react'
import styled from 'react-emotion'
import Icon from '../Icon/Icon'
import { blue } from '../../utils/colors'

const Container = styled('div')`
  height: 600px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  background-color: ${blue};
  color: rgba(255, 255, 255, 0.9);
`

const BannerTitle = styled('div')`
  width: 600px;
  font-size: 70px;
  z-index: 1;
`

const BannerText = styled('div')`
  width: 600px;
  margin-top: 20px;
  font-size: 30px;
  z-index: 1;
  color: ${blue};
`

class Banner extends Component {
  render () {
    return (
      <Container>
        <div style={{width: '250px', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '25%', zIndex: 1}}>
          <Icon fontSize='140px' />
        </div>
        <div style={{position: 'relative', top: '25%', zIndex: 2}}>
          <BannerTitle>Dallin Christensen</BannerTitle>
          <BannerText>Software Engineer | Front-End Developer</BannerText>
        </div>
        <div style={{width: '100%', height: '50%', backgroundColor: '#fff', position: 'relative', top: '20px'}}>
        </div>
      </Container>
    )
  }
}

export default Banner