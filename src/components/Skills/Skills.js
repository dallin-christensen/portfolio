import React, { Component } from 'react'
import styled from 'react-emotion'
import { getSkills } from '../../utils/helpers'

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
`

const IconImg = styled('div')`
  width: 99%;
  height: 99%;
  border-radius: 50%;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
`

function SkillIcon ({ img }) {
  return (
    <IconContainer>
      <IconImg img={img}>
      </IconImg>
    </IconContainer>
  )
}

const Container = styled('div')`
  width: 100%;
  background-color: #3498db;
  padding: 50px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

const SkillsContainer = styled('div')`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`

class Skills extends Component {
  render() {
    const skills = getSkills()
    return (
      <Container>
        <SkillsContainer>
          {
            Object.keys(skills).map(skillsKey => {
              const skill = skills[skillsKey]
              return (
                <SkillIcon img={skill.img} />
              )
            })
          }
        </SkillsContainer>
      </Container>
    )
  }
}

export default Skills
