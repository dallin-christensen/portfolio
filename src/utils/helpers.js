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

import spotartify_gif from '../components/Projects/images/spotartify_gif.gif'
import coingander_gif from '../components/Projects/images/coinGander.gif'
import octoCat from '../components/Projects/images/Octocat.png'

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
    spotartify: {
      name: 'Spotart-ify',
      website: 'https://spotartify.firebaseapp.com/',
      github: 'https://github.com/dallin-christensen/albumspot-ify',
      dataUri: 'https://api.github.com/repos/dallin-christensen/albumspot-ify',
      description: 'This single-page application allows the user to play their Spotify playlists while matching album artwork with the currently playing track. Uses Spotify API to retrieve user, playlist, and track data, and the Spotify SDK beta to play and control the music.',
      imgSrc: spotartify_gif,
    },
    materialUi: {
      name: 'Material-UI',
      github: 'https://github.com/mui-org/material-ui',
      dataUri: 'https://api.github.com/repos/mui-org/material-ui',
      description: 'Contributor to this project.',
      imgSrc: octoCat,
    },
    reactColor: {
      name: 'React-Color',
      github: 'https://github.com/casesandberg/react-color',
      dataUri: 'https://api.github.com/repos/casesandberg/react-color',
      description: 'Contributor to this project.',
      imgSrc: octoCat,
    },
    coingander: {
      name: 'Coingander',
      website: 'https://coingander.firebaseapp.com/',
      github: 'https://github.com/dallin-christensen/crypto-currency-tracker',
      dataUri: 'https://api.github.com/repos/dallin-christensen/crypto-currency-tracker',
      description: 'Coingander displays the current market-cap, cost, and 24 hour percentage increase of the top 40 cryptocurrencies. Uses the CoinMarketCap API',
      imgSrc: coingander_gif,
    },
    reactTypingAnimation: {
      name: 'React-Typing-Animation',
      github: 'https://github.com/adamjking3/react-typing-animation',
      dataUri: 'https://api.github.com/repos/adamjking3/react-typing-animation',
      description: 'Contributor to this project.',
      imgSrc: octoCat,
    },
  }
}