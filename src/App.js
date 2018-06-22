import React, { Component } from 'react';
import styled from 'react-emotion'
import { Banner } from './components'

const Container = styled('div')`
  padding: 0;
  margin: 0;
  background-color: #fff;
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Banner />
      </Container>
    );
  }
}

export default App;
