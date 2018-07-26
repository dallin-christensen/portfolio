// import jsImg from '../components/Skills/images/js.png'
import es6Img from '../components/Skills/images/es6.jpg'
import reactImg from '../components/Skills/images/react.png'
import reactNativeImg from '../components/Skills/images/reactNative.png'
import reduxImg from '../components/Skills/images/redux.png'
import graphQLImg from '../components/Skills/images/graphQL.png'
import gitImg from '../components/Skills/images/git.png'
import githubImg from '../components/Skills/images/github.png'
import gitlabImg from '../components/Skills/images/gitlab.png'
import jestImg from '../components/Skills/images/jest.png'
import enzymeImg from '../components/Skills/images/enzyme.jpeg'
import sassImg from '../components/Skills/images/sass.png'
import reactEmotionImg from '../components/Skills/images/reactEmotion.png'
import yarnImg from '../components/Skills/images/yarn.jpg'
import webpackImg from '../components/Skills/images/webpack.png'
import firebaseImg from '../components/Skills/images/firebase.png'

import spotartify_gif from '../components/Projects/images/spotartify_gif.gif'
import coingander_gif from '../components/Projects/images/coinGander.gif'
import octoCat from '../components/Projects/images/Octocat.png'

export function getSkills () {
  return {
    es6: {
      name: 'ES6',
      img: es6Img,
      site: 'https://www.ecma-international.org/ecma-262/6.0/',
    },
    react: {
      name: 'React JS',
      img: reactImg,
      site: 'https://reactjs.org/',
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
    reactNative: {
      name: 'React Native',
      img: reactNativeImg,
      site: 'https://facebook.github.io/react-native/',
    },
    git: {
      name: 'Git',
      img: gitImg,
      site: 'https://git-scm.com/',
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
      description: 'This single-page application allows the user to play their Spotify playlists while matching album artwork with the currently playing track. Uses Spotify API to retrieve user, playlist, and track data, and the Spotify SDK beta to play and control the music.',
      imgSrc: spotartify_gif,
    },
    coingander: {
      name: 'Coingander',
      website: 'https://coingander.firebaseapp.com/',
      github: 'https://github.com/dallin-christensen/crypto-currency-tracker',
      description: 'Coingander displays the current market-cap, cost, and 24 hour percentage increase of the top 40 cryptocurrencies. Uses the CoinMarketCap API',
      imgSrc: coingander_gif,
    },
    reactCountdown: {
      name: 'React-Countdown',
      github: 'https://github.com/dallin-christensen/react-countdown',
      description: 'A customizable countdown component for React. My contribution was to allow the countdown component to accept arrays of dates, switch to the next countdown date when the current one hits zero, and run a new callback function when dates switch.',
      imgSrc: octoCat,
    }
  }
}