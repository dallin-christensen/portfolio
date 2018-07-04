import React, { Component } from 'react'
import styled from 'react-emotion'
import spotartify_gif from './images/spotartify_gif.gif'

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
  background-color: #3498db;
  width: 80px;
  text-align: center;
  padding: 10px 30px;
  margin: 0 10px;
  border-radius: 3px;
`

const ProjectImg = styled('img')`
  width: 300px;
  border-radius: 3px;
`

function Project ({ name, website, github, description, imgSrc }) {
  return (
    <ProjectContainer>
        <ImgContainer>
          <ProjectImg src={imgSrc} alt={name} />
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
  padding: 20px;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
`

export class Projects extends Component {
  state ={
    projects: {
      spotartify: {
        name: 'Spotart-ify',
        website: 'https://spotartify.firebaseapp.com/',
        github: 'https://github.com/dallin-christensen/albumspot-ify',
        description: 'This single-page application allows the user to play their Spotify playlists while matching album artwork with the currently playing track. Uses Spotify API to retrieve user, playlist, and track data, and the Spotify SDK beta to play and control the music.',
        imgSrc: spotartify_gif,
      },
      coingander: {
        name: 'Coingander',
        website: 'https://coingander.firebaseapp.com/',
        github: 'https://github.com/dallin-christensen/crypto-currency-tracker',
        description: 'Coingander displays the current market-cap, cost, and 24 hour percentage increase of the top 40 cryptocurrencies. Uses the CoinMarketCap API',
        imgSrc: spotartify_gif,
      },
      reactCountdown: {
        name: 'React-Countdown',
        github: 'https://github.com/dallin-christensen/react-countdown',
        description: 'A customizable countdown component for React. My contribution was to allow the countdown component to accept arrays of dates, switch to the next countdown date when the current one hits zero, and run a new callback function when dates switch.',
        imgSrc: spotartify_gif,
      }
    }
  }
  render() {
    const { projects } = this.state
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
