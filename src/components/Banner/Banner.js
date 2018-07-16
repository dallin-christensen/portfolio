import React, { Component } from 'react'
import styled from 'react-emotion'
import Icon from '../Icon/Icon'
import { blue } from '../../utils/colors'

const Container = styled('div')`
  color: #fff;
`

const BannerTitle = styled('div')`
  font-size: 70px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${blue};
`

const BannerText = styled('div')`
  width: 100%;
  height: 150px;
  font-size: 30px;
  color: ${blue};
  background-color: #fff;
  display: flex;
  justify-content: center;
`

const IconContainer = styled('div')`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 125px;
`

class Banner extends Component {
  render () {
    return (
      <Container>
          <BannerTitle>
            <IconContainer>
              <Icon fontSize='140px' />
            </IconContainer>
            <span>Dallin Christensen</span>
          </BannerTitle>
          <BannerText>
            <div style={{width: '250px'}}></div>
            <span>Software Engineer | Front-End Developer</span>
          </BannerText>
      </Container>
    )
  }
}

export default Banner