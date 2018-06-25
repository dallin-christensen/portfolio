import React, { Component } from 'react'

export class Projects extends Component {
  state ={
    projects: {
      spotartify: {
        name: 'Spotart-ify',
      },
      coingander: {
        name: 'Coingander',
      },
      reactCountdown: {
        name: 'React-Countdown',
      }
    }
  }
  render() {
    const { projects } = this.state
    return (
      <div>
        {
          Object.keys(projects).map(project => {
            return <div>{projects[project].name}</div>
          })
        }
      </div>
    )
  }
}

export default Projects
