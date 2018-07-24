import React, { Component } from 'react'
import styled from 'react-emotion'
import { darkGrey, white } from '../../utils/colors'
import { FaGithubAlt, FaLinkedin } from 'react-icons/lib/fa'

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

const Icons = styled('div')`
  width: 250px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`
const IconLink = styled('a')`
  text-decoration: none;
  color: ${white};
  font-size: 70px;
  padding: 10px;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover {
    padding: 0;
    font-size: 90px;
  }
`

class Footer extends Component {
  render() {
    return (
      <Container>
        <Icons>
          <IconLink href='https://github.com/dallin-christensen'>
            <FaGithubAlt />
          </IconLink>
          <IconLink href='https://www.linkedin.com/in/dallinpchristensen/'>
            <FaLinkedin />
          </IconLink>
        </Icons>
      </Container>
    )
  }
}

export default Footer
