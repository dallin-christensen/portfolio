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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230099dd' fill-opacity='0.35' fill-rule='nonzero'%3E%3Cpath d='M29 58.58l7.38-7.39A30.95 30.95 0 0 1 29 37.84a30.95 30.95 0 0 1-7.38 13.36l7.37 7.38zm1.4 1.41l.01.01h-2.84l-7.37-7.38A30.95 30.95 0 0 1 6.84 60H0v-1.02a28.9 28.9 0 0 0 18.79-7.78L0 32.41v-4.84L18.78 8.79A28.9 28.9 0 0 0 0 1.02V0h6.84a30.95 30.95 0 0 1 13.35 7.38L27.57 0h2.84l7.39 7.38A30.95 30.95 0 0 1 51.16 0H60v27.58-.01V60h-8.84a30.95 30.95 0 0 1-13.37-7.4L30.4 60zM29 1.41l-7.4 7.38A30.95 30.95 0 0 1 29 22.16 30.95 30.95 0 0 1 36.38 8.8L29 1.4zM58 1A28.9 28.9 0 0 0 39.2 8.8L58 27.58V1.02zm-20.2 9.2A28.9 28.9 0 0 0 30.02 29h26.56L37.8 10.21zM30.02 31a28.9 28.9 0 0 0 7.77 18.79l18.79-18.79H30.02zm9.18 20.2A28.9 28.9 0 0 0 58 59V32.4L39.2 51.19zm-19-1.4a28.9 28.9 0 0 0 7.78-18.8H1.41l18.8 18.8zm7.78-20.8A28.9 28.9 0 0 0 20.2 10.2L1.41 29h26.57z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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