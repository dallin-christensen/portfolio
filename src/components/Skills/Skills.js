import React, { Component } from 'react'
import jsImg from './images/js.png'
import es6Img from './images/es6.jpg'
import reactImg from './images/react.png'
import reactNativeImg from './images/reactNative.png'
import reduxImg from './images/redux.png'
import graphQLImg from './images/graphQL.png'
import gitImg from './images/git.png'
import githubImg from './images/github.png'
import gitlabImg from './images/gitlab.png'
import jestImg from './images/jest.png'
import enzymeImg from './images/enzyme.jpeg'
import sassImg from './images/sass.png'
import yarnImg from './images/yarn.jpg'
// import PropTypes from 'prop-types'

// JS, ES6, React, React-Native, Redux, GraphQL, Git, Jest, SASS, NPM

class Skills extends Component {
  render() {
    const skills = {
      js: {
        name: 'Javascript',
        img: jsImg,
      },
      es6: {
        name: 'ES6',
        img: es6Img,
      },
      react: {
        name: 'React JS',
        img: reactImg,
      },
      reactNative: {
        name: 'React Native',
        img: reactNativeImg,
      },
      redux: {
        name: 'Redux',
        img: reduxImg,
      },
      graphQl: {
        name: 'Graph QL',
        img: graphQLImg,
      },
      git: {
        name: 'Git',
        img: gitImg,
      },
      github: {
        name: 'Github',
        img: githubImg
      },
      gitlab: {
        name: 'Gitlab',
        img: gitlabImg,
      },
      jest: {
        name: 'jest',
        img: jestImg,
      },
      enzyme: {
        name: 'Enzyme',
        img: enzymeImg,
      },
      sass: {
        name: 'SASS',
        img: sassImg,
      },
      yarn: {
        name: 'Yarn',
        img: yarnImg,
      },
    }
    return (
      <div style={{width: '100%', maxWidth: '1000px', margin: '0 auto', backgroundColor: '#3498db', padding: '50px 0', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center'}}>
        {
          Object.keys(skills).map(skillsKey => {
            const skill = skills[skillsKey]
            return (
              <div style={{padding: '5px', backgroundColor: '#fff', width: '150px', height: '150px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px'}}>
                <div style={{width: '99%', height: '99%', borderRadius: '50%', background: `url(${skill.img}) no-repeat center`, backgroundSize: 'cover'}}>
                  {/* <img src={skill.img} style={{width: '100%'}} /> */}
                </div>
              </div>
              
            )
          })
        }
      </div>
    )
  }
}

export default Skills
