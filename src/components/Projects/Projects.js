import React, { Component } from 'react'
import styled from 'react-emotion'
import { getProjects } from '../../utils/helpers'
import { blue } from '../../utils/colors'

const ProjectContainer = styled('div')`
  margin-bottom: 80px;
  width: 100%;
  max-width: 800px;
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`

const ImgContainer = styled('div')`
  padding: 5px;
  width: 300px;
  height: 230px;
  background: url("${props => props.image}");
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`

const DataContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 350px;
  padding: 5px;
`

const Anchor = styled('a')`
  text-decoration: none;
  color: white;
`

const LinkContainer = styled('div')`
  background-color: ${blue};
  width: 80px;
  text-align: center;
  padding: 10px 30px;
  margin: 0 10px;
  border-radius: 3px;
`

function Project ({ name, website, github, description, imgSrc }) {
  return (
    <ProjectContainer>
        <ImgContainer image={imgSrc}>
          {/* <ProjectImg src={imgSrc} alt={name} /> */}
        </ImgContainer>
        <DataContainer>
          <div style={{fontSize: '40px', marginBottom: '10px'}}>{name}</div>
          <div style={{display: 'flex', marginBottom: '10px'}}>
              {
                website
                  ? <Anchor href={website}><LinkContainer>website</LinkContainer></Anchor>
                  : null
              }
              <Anchor href={github}><LinkContainer>code</LinkContainer></Anchor>
          </div>
          <div style={{maxWidth: '500px', textAlign: 'center'}}>{description}</div>
        </DataContainer>
    </ProjectContainer>
  )
}

const ProjectsContainer = styled('div')`
  padding: 80px 20px 200px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`

export class Projects extends Component {
  render() {
    const projects = getProjects()
    return (
      <ProjectsContainer>
        {
          Object.keys(projects).map(project => {
            const p = projects[project]
            return <Project {...p} />
          })
        }
      </ProjectsContainer>
    )
  }
}

export default Projects
