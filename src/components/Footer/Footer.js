import React, { Component } from 'react'
import styled from 'react-emotion'
import { darkGrey, white } from '../../utils/colors'

const Container = styled('div')`
  height: 300px;
  width: 100%;
  background-color: ${darkGrey};
  color: ${white};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

class Footer extends Component {
  render() {
    return (
      <Container>
        footer
      </Container>
    )
  }
}

export default Footer
