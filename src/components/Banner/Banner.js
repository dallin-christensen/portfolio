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
  @media (max-width: 612px) {
    align-items: flex-start;
    height: 50px;
  }
`

const PageTitle = styled('span')`
  font-size: 70px;
  cursor: default;
  @media (max-width: 818px) {
    font-size: 45px;
  }
  @media (max-width: 612px) {
    font-size: 46px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
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
  @media (max-width: 612px) {
    top: 0;
  }
`

const SubTitle = styled('div')`
  margin-top: 3px;
  font-size: 40px;
  cursor: default;
  @media (max-width: 818px) {
    font-size: 30px;
  }
  @media (max-width: 612px) {
    font-size: 31px;
  }
  @media (max-width: 500px) {
    font-size: 28px;
  }
`

const IconWidthPlaceholder = styled('div')`
  width: 248px;
  @media (max-width: 612px) {
    display: none;
  }
`

//TODO: figure out how to make IconWidthPlaceholder directly beneath the icon always

class Banner extends Component {
  state = {
    subTitle_i: 0,
    showingSub: '',
    step: 0,
    forwards: true,
  }
  componentDidMount () {
    this.typeEffect()
  }
  typeEffect = () => {
    const { step, forwards } = this.state

    const subTitles = [
      'JavaScript',
      'Functional Programming',
      'React + React Native',
      'Front-End Development',
      'Software Engineer',
    ]

    const { subTitle_i } = this.state
    const subTitle = subTitles[subTitle_i]

    this.setState({step: forwards ? step + 1 : step - 1}, () => { // sets step one forward
      const { step: newStep } = this.state
      setTimeout(() => { // setTimeout gives it typing style effect, otherwise too quick
        const newShowing = subTitle.slice(0, newStep) // slice off subtitle according to step
        this.setState({showingSub: newShowing}, () => { // set new showingSub
          if(newShowing === subTitle && newShowing === subTitles[subTitles.length - 1]) return
          if (newShowing === subTitle) {
            setTimeout(() => {
              this.setState({ forwards: false }, () => this.typeEffect())
            }, 500)
          } else if (newShowing === '') {
            this.setState({ forwards: true, subTitle_i: subTitle_i + 1 }, () => this.typeEffect())
          } else {
            this.typeEffect()
          }
        })
      }, forwards ? (Math.random() * 120) + 50 : 40)
    })
  }
  render () {
    const { showingSub } = this.state
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
            <SubTitle>{showingSub}</SubTitle>
          </BannerText>
      </Container>
    )
  }
}

export default Banner