import React, { Component } from 'react'
import styled from 'react-emotion'
import { getProjects } from '../../utils/helpers'
import Contribution from './Contribution'
import Heading from '../Elements/Heading'

//   padding: 100px 20px 180px 20px;
const Wrapper = styled('div')`
  margin-top: 0;
  margin-bottom: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`

const ContributionsContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  max-width: 1200px;
`

export class Contributions extends Component {
  render() {
    const projects = getProjects()
    return (
      <Wrapper>
        <Heading>Noteworthy Open-source Projects and Contributions</Heading>
        <ContributionsContainer>
          {
            Object.keys(projects).map(project => {
              const p = projects[project]
              return <Contribution {...p} key={p.name} />
            })
          }
        </ContributionsContainer>
      </Wrapper>
    )
  }
}

export default Contributions
