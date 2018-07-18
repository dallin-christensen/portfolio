import React, { Component } from 'react'
import styled from 'react-emotion'
import Icon from '../Icon/Icon'
import { blue } from '../../utils/colors'

const Container = styled('div')`
  color: #fff;
`

const BannerTitle = styled('div')`
  flex-wrap: wrap;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${blue};
`

const BannerText = styled('div')`
  flex-wrap: wrap;
  width: 100%;
  height: 150px;
  color: ${blue};
  background-color: #fff;
  display: flex;
  justify-content: center;
  @media (max-width: 615px) {
    align-items: flex-start;
    height: 50px;
  }
`

const PageTitle = styled('span')`
  font-size: 70px;
  @media (max-width: 818px) {
    font-size: 45px;
  }
`

const IconContainer = styled('div')`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 125px;
  @media (max-width: 615px) {
    top: 0;
  }
`

const SubTitle = styled('div')`
  margin-top: 3px;
  font-size: 30px;
  @media (max-width: 818px) {
    font-size: 20px;
  }
`

const IconWidthPlaceholder = styled('div')`
  width: 248px;
  @media (max-width: 615px) {
    display: none;
  }
`

class Banner extends Component {
  render () {
    return (
      <Container>
          <BannerTitle>
            <IconContainer>
              <Icon fontSize='140px' />
            </IconContainer>
            <PageTitle>Dallin Christensen</PageTitle>
          </BannerTitle>
          <BannerText>
            <IconWidthPlaceholder />
            <SubTitle>Software Engineer | Front-End Developer</SubTitle>
          </BannerText>
      </Container>
    )
  }
}

export default Banner