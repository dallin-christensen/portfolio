import React, { Component } from 'react'
import styled from 'react-emotion'
import { getSkills } from '../../utils/helpers'
import { lightGrey, white } from '../../utils/colors'

const IconContainer = styled('div')`
  padding: 5px;
  background-color: #fff;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 4px solid ${lightGrey};
  transition: all .1s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`

const Anchor = styled('a')`
  width: 100%;
  height: 100%;
  border-raidus: 50%;
  text-decoration: none;
`

const IconImg = styled('div')`
  width: 99%;
  height: 99%;
  border-radius: 50%;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  &:hover div {
    display: flex;
  }
`

const IconTitle = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  color: ${white};
  text-shadow: 1px 0 0 #555, 0 -1px 0 #555, 0 1px 0 #555, -1px 0 0 #555;
  font-size: 16px;
  transition: all .9s ease-in-out;
`


function SkillIcon ({ img, name, site }) {
  return (
    <IconContainer>
      <Anchor href={site}>
        <IconImg img={img}>
          <IconTitle>
            {name}
          </IconTitle>
        </IconImg>
      </Anchor>
    </IconContainer>
  )
}

// <span style={{width: '100%', backgroundColor: 'rgba(0, 120, 200, 0.2)'}}>

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrey};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d9dee0' fill-opacity='0.35'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

const SkillsContainer = styled('div')`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -100px;
`

class Skills extends Component {
  render() {
    const skills = getSkills()
    return (
      <Container>
        <SkillsContainer>
          {
            Object.keys(skills).map(skillsKey => {
              const { img, name, site } = skills[skillsKey]
              return (
                <SkillIcon img={img} name={name} site={site} key={name} />
              )
            })
          }
        </SkillsContainer>
      </Container>
    )
  }
}

export default Skills
