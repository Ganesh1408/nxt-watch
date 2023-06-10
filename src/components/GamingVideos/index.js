import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import FailureView from '../FailureView'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import GamingVideoCard from '../GamingVideoCard'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  LoaderContainer,
  GamingVideoList,
  GamingContainer,
  GamingVideoTitle,
  GamingIconContainer,
  GamingText,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderGamingVideoView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard eachVideo={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderGamingVideoView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle>
                  <GamingIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingIconContainer>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default GamingVideos
