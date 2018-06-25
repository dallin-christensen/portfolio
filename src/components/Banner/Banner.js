import React, { Component } from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  height: 600px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  color: rgba(255, 255, 255, 0.9);
`

const BannerTitle = styled('div')`
  font-size: 70px;
`

const BannerText = styled('div')`
  margin-top: 20px;
  font-size: 30px;
`

class Banner extends Component {
  render () {
    return (
      <Container>
        <BannerTitle>Dallin Christensen</BannerTitle>
        <BannerText>Software Engineer</BannerText>
      </Container>
    )
  }
}

export default Banner