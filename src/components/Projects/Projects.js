import React, { Component } from 'react'
import styled from 'react-emotion'
import { getProjects } from '../../utils/helpers'
import { blue, grey, lightBlue } from '../../utils/colors'
import { FaStar } from 'react-icons/fa'
import abbrev from 'number-abbreviate'

const ProjectContainer = styled('div')`
  margin-bottom: 60px;
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
  width: 440px;
  padding: 5px;
`

const Title = styled('div')`
  font-size: 35px;
  marginBottom: 10px;
  color: ${grey};
  margin-bottom: 5px;
  @media (max-width: 799px) {
    margin-top: 40px;
    font-size: 30px;
  }
`

const StarCount = styled('div')`
  margin-bottom: 10px;
  color: ${grey};
`

const ButtonsContainer = styled('div')`
  display: flex;
  margin-bottom: 10px;
`

const Description = styled('div')`
  max-width: 500px;
  text-align: center;
  color: ${grey};
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
  transition: all .1s ease-in-out;
  &:hover {
    background-color: ${lightBlue};
    transform: scale(1.1);
  }
`

class Project extends Component {
  state = { starCount: 0 }
  componentDidMount() {
    this.getStars()
  }

  getStars = async () => {
    const { dataUri } = this.props
    const starCount = await fetch(dataUri)
      .then(response => response.json())
      .then(repoData => repoData.stargazers_count)
      .catch(console.warn)

    this.setState({ starCount })
  }

  render() {
    const { name, website, github, description, imgSrc } = this.props
    const { starCount } = this.state
    return (
      <ProjectContainer>
          <Anchor href={github}>
            <ImgContainer image={imgSrc} />
          </Anchor>
          <DataContainer>
            <Title>{name.toUpperCase()}</Title>
            <StarCount><FaStar color={grey} /> {abbrev(starCount, 1)}</StarCount>
            <ButtonsContainer>
                {
                  website
                    ? <Anchor href={website}><LinkContainer>website</LinkContainer></Anchor>
                    : null
                }
                <Anchor href={github}><LinkContainer>code</LinkContainer></Anchor>
            </ButtonsContainer>
            <Description>{description}</Description>
          </DataContainer>
      </ProjectContainer>
    )
  }
}

const ProjectsContainer = styled('div')`
  padding: 80px 20px 150px 20px;
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
            return <Project {...p} key={p.name} />
          })
        }
      </ProjectsContainer>
    )
  }
}

export default Projects
