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
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23323f4e' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
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
