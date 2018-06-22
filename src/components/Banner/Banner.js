import React, { Component } from 'react'
import styled from 'react-emotion'

const Container = styled('div')`
  height: 600px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const BannerText = styled('div')`
  font-size: 40px;
`

class Banner extends Component {
  render () {
    return (
      <Container>
        <BannerText>
          dallin-christensen.github.io
        </BannerText>
      </Container>
    )
  }
}

export default Banner