import React, { Component } from 'react'
import styled from 'react-emotion'

const ProjectContainer = styled('div')`
  margin-bottom: 20px;
  width: 90%;
  max-width: 1000px;
  border: 1px solid black;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
`

function Project ({ name, website, github, description }) {
  return (
    <ProjectContainer>
      <div>
        <div style={{width: '200px', height: '200px', border: '1px solid black', marginRight: '10px'}}></div>
      </div>
      <div>
        <div style={{}}>{name}</div>
        <div>{website}</div>
        <div>{github}</div>
        <div>{description}</div>
      </div>
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
      },
      coingander: {
        name: 'Coingander',
        website: 'https://coingander.firebaseapp.com/',
        github: 'https://github.com/dallin-christensen/crypto-currency-tracker',
        description: 'Coingander displays the current market-cap, cost, and 24 hour percentage increase of the top 40 cryptocurrencies. Uses the CoinMarketCap API',
      },
      reactCountdown: {
        name: 'React-Countdown',
        github: 'https://github.com/dallin-christensen/react-countdown',
        description: 'A customizable countdown component for React. My contribution was to allow the countdown component to accept arrays of dates, switch to the next countdown date when the current one hits zero, and run a new callback function when dates switch.',
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
