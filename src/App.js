import React, { Component } from 'react'
import styled from 'react-emotion'
import { Banner, Projects, Skills, Footer } from './components'
import { blue } from './utils/colors'

const Container = styled('div')`
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`

const MovingHeader = styled('div')`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-color: ${blue};
  opacity: 0.99;
  color: white;
  position: fixed;
  top: 100px;
  right: 50px;
  border: 5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <Container>
        <MovingHeader>
          <div>PROJECTS &</div><div>OPEN SOURCE</div>
        </MovingHeader>
        <Banner />
        <Projects />
        <Skills />
        <Footer />
      </Container>
    );
  }
}

export default App;
