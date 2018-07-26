import React, { Component } from 'react'
import styled from 'react-emotion'
import { getSkills } from '../../utils/helpers'
import { lightGrey } from '../../utils/colors'

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
`

function SkillIcon ({ img, name, site }) {
  return (
    <IconContainer title={name}>
      <Anchor href={site}>
        <IconImg img={img}>
        </IconImg>
      </Anchor>
    </IconContainer>
  )
}

const Container = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: ${lightGrey};
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
                <SkillIcon img={img} name={name} site={site} />
              )
            })
          }
        </SkillsContainer>
      </Container>
    )
  }
}

export default Skills
