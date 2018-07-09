// import jsImg from '../components/Skills/images/js.png'
import es6Img from '../components/Skills/images/es6.jpg'
import reactImg from '../components/Skills/images/react.png'
import reactNativeImg from '../components/Skills/images/reactNative.png'
import reduxImg from '../components/Skills/images/redux.png'
import graphQLImg from '../components/Skills/images/graphQL.png'
import gitImg from '../components/Skills/images/git.png'
// import githubImg from '../components/Skills/images/github.png'
// import gitlabImg from '../components/Skills/images/gitlab.png'
import jestImg from '../components/Skills/images/jest.png'
import enzymeImg from '../components/Skills/images/enzyme.jpeg'
// import sassImg from '../components/Skills/images/sass.png'
import reactEmotionImg from '../components/Skills/images/reactEmotion.png'
import yarnImg from '../components/Skills/images/yarn.jpg'

import spotartify_gif from '../components/Projects/images/spotartify_gif.gif'

export function getSkills () {
  return {
    // js: {
    //   name: 'Javascript',
    //   img: jsImg,
    // },
    es6: {
      name: 'ES6',
      img: es6Img,
    },
    react: {
      name: 'React JS',
      img: reactImg,
    },
    redux: {
      name: 'Redux',
      img: reduxImg,
    },
    graphQl: {
      name: 'Graph QL',
      img: graphQLImg,
    },
    reactNative: {
      name: 'React Native',
      img: reactNativeImg,
    },
    git: {
      name: 'Git',
      img: gitImg,
    },
    // github: {
    //   name: 'Github',
    //   img: githubImg
    // },
    // gitlab: {
    //   name: 'Gitlab',
    //   img: gitlabImg,
    // },
    jest: {
      name: 'jest',
      img: jestImg,
    },
    enzyme: {
      name: 'Enzyme',
      img: enzymeImg,
    },
    // sass: {
    //   name: 'SASS',
    //   img: sassImg,
    // },
    reactEmotion: {
      name: 'React Emotion',
      img: reactEmotionImg,
    },
    yarn: {
      name: 'Yarn',
      img: yarnImg,
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