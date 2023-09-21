import reactImg from '../components/Skills/images/react.png'
import reactNativeImg from '../components/Skills/images/reactNative.png'
import reduxImg from '../components/Skills/images/redux.png'
import graphQLImg from '../components/Skills/images/graphQL.png'
import apolloImg from '../components/Skills/images/apollo.png'
import githubImg from '../components/Skills/images/github.png'
import gitlabImg from '../components/Skills/images/gitlab.png'
import jestImg from '../components/Skills/images/jest.png'
import enzymeImg from '../components/Skills/images/enzyme.jpeg'
import sassImg from '../components/Skills/images/sass.png'
import reactEmotionImg from '../components/Skills/images/reactEmotion.png'
import yarnImg from '../components/Skills/images/yarn.jpg'
import webpackImg from '../components/Skills/images/webpack.png'
import firebaseImg from '../components/Skills/images/firebase.png'
import reactTestingLibImg from '../components/Skills/images/react-testing-library.png'

import spotartify_gif from '../components/Contributions/images/spotartify_gif.gif'
import coingander_gif from '../components/Contributions/images/coinGander.gif'
import imgMarkup from '../components/Contributions/images/imgMarkup.gif'
import octoCat from '../components/Contributions/images/Octocat.png'

export function getSkills () {
  return {
    react: {
      name: 'React JS',
      img: reactImg,
      site: 'https://reactjs.org/',
    },
    reactNative: {
      name: 'React Native',
      img: reactNativeImg,
      site: 'https://facebook.github.io/react-native/',
    },
    redux: {
      name: 'Redux',
      img: reduxImg,
      site: 'https://redux.js.org/',
    },
    graphQl: {
      name: 'Graph QL',
      img: graphQLImg,
      site: 'https://graphql.org/',
    },
    apollo: {
      name: 'Apollo',
      img: apolloImg,
      site: 'https://www.apollographql.com/',
    },
    github: {
      name: 'Github',
      img: githubImg,
      site: 'https://github.com/',
    },
    gitlab: {
      name: 'Gitlab',
      img: gitlabImg,
      site: 'https://gitlab.com/',
    },
    jest: {
      name: 'jest',
      img: jestImg,
      site: 'https://jestjs.io/',
    },
    enzyme: {
      name: 'Enzyme',
      img: enzymeImg,
      site: 'https://airbnb.io/enzyme/',
    },
    reactTestingLibrary: {
      name: 'react-testing-library',
      img: reactTestingLibImg,
      site: 'https://github.com/kentcdodds/react-testing-library',
    },
    reactEmotion: {
      name: 'React Emotion',
      img: reactEmotionImg,
      site: 'https://emotion.sh/',
    },
    sass: {
      name: 'SASS',
      img: sassImg,
      site: 'https://sass-lang.com/',
    },
    yarn: {
      name: 'Yarn',
      img: yarnImg,
      site: 'https://yarnpkg.com/lang/en/',
    },
    webpack: {
      name: 'Webpack',
      img: webpackImg,
      site: 'https://webpack.js.org/',
    },
    firebase: {
      name: 'Firebase',
      img: firebaseImg,
      site: 'https://firebase.google.com/',
    },
  }
}

export function getProjects () {
  return {
    reactImgMarkup: {
      name: 'React-Img-Markup',
      github: 'https://github.com/dallin-christensen/react-img-markup',
      dataUri: 'https://api.github.com/repos/dallin-christensen/react-img-markup',
      description: 'Creator and mainainer',
      imgSrc: imgMarkup,
    },
    materialUi: {
      name: 'Material-UI',
      github: 'https://github.com/mui-org/material-ui',
      dataUri: 'https://api.github.com/repos/mui-org/material-ui',
      description: 'Contributor',
      imgSrc: octoCat,
    },
    reactSelect: {
      name: 'React-Select',
      github: 'https://github.com/jedwatson/react-select',
      dataUri: 'https://api.github.com/repos/jedwatson/react-select',
      description: 'Contributor',
      imgSrc: octoCat,
    },
    reactColor: {
      name: 'React-Color',
      github: 'https://github.com/casesandberg/react-color',
      dataUri: 'https://api.github.com/repos/casesandberg/react-color',
      description: 'Contributor',
      imgSrc: octoCat,
    },
    // reactTypingAnimation: {
    //   name: 'React-Typing-Animation',
    //   github: 'https://github.com/adamjking3/react-typing-animation',
    //   dataUri: 'https://api.github.com/repos/adamjking3/react-typing-animation',
    //   description: 'Contributor to this project.',
    //   imgSrc: octoCat,
    // },
  }
}