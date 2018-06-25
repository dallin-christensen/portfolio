import React, { Component } from 'react';
import styled from 'react-emotion'
import { Banner, Projects } from './components'

const Container = styled('div')`
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Banner />
        <Projects />
      </Container>
    );
  }
}

export default App;
