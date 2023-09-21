import React, { Component } from 'react'
import styled from 'react-emotion'
import { blue, boxShadow, grey, lightBlue } from '../../utils/colors'
import { FaStar } from 'react-icons/fa'
import abbrev from 'number-abbreviate'

const ContributionContainer = styled('div')`
  padding: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  box-shadow: ${boxShadow};
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
  padding-right: 20px;
  width: 220px;
  max-width: 220px;
`

const Title = styled('div')`
  font-size: 35px;
  marginBottom: 10px;
  color: ${grey};
  margin-bottom: 5px;
  text-align: center;
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

class Contribution extends Component {
  state = { starCount: 0 }
  componentDidMount() {
    this.getStars()
  }

  getStars = async () => {
    const { dataUri } = this.props
    const starCount = await fetch(dataUri, {
      headers: {
        "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      }
    })
      .then(response => response.json())
      .then(repoData => repoData.stargazers_count)
      .catch(console.warn)

    this.setState({ starCount })
  }

  render() {
    const { name, github, description, imgSrc } = this.props
    const { starCount } = this.state
    return (
      <ContributionContainer>
          <ImgContainer image={imgSrc} />
          <DataContainer>
            <Title>{name.toLowerCase()}</Title>
            <StarCount><FaStar color={grey} /> {abbrev(starCount, 1)}</StarCount>
            <ButtonsContainer>
                <Anchor href={github}><LinkContainer>github</LinkContainer></Anchor>
            </ButtonsContainer>
            <Description>{description}</Description>
          </DataContainer>
      </ContributionContainer>
    )
  }
}

export default Contribution