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
  max-width: 813px;
  margin: 0 auto;
  height: 150px;
  color: ${blue};
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 818px) {
    max-width: 612px;
  }
  @media (max-width: 612px) {
    justify-content: center;
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
  padding-left: 2px;
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
  width: 250px;
  @media (max-width: 612px) {
    display: none;
  }
`

const Cursor = styled('span')`
  width: 20px;
  height: 20px;
  display: inline-block;
`

const getSubtitles = () => [
  'JavaScript',
  'Functional Programming',
  'React & React Native',
  'Front-End Development',
  'Software Engineer',
]

// TODO: figure out how to make IconWidthPlaceholder directly beneath the icon always

class Banner extends Component {
  state = {
    subTitle_i: 0,
    showingSub: '',
    showCursor: true,
    step: 0,
    forwards: true,
  }
  componentDidMount () {
    this.typeEffect()
  }
  toggleCursor = () => {
    const { showCursor } = this.state
    setTimeout(() => {
      this.setState({ showCursor: !showCursor })
    }, 400)
  }
  typeEffect = () => {
    const { step, forwards } = this.state

    const subTitles = getSubtitles()

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
            }, 1600)
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
    const { showingSub, showCursor } = this.state
    const subTitles = getSubtitles()
    if (showingSub !== subTitles[subTitles.length - 1]) this.toggleCursor()
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
            <SubTitle>
              <span>{showingSub}</span>
              <Cursor>{ showingSub === subTitles[subTitles.length - 1] ? '' : showCursor ? '|' : '' }</Cursor>
            </SubTitle>
          </BannerText>
      </Container>
    )
  }
}

export default Banner