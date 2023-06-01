import {Link} from 'react-router-dom'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import './index.css'

import {
  ListItem,
  ThumbnailImageUrl,
  VideoDetails,
  ProfileUrl,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <ListItem>
              <ThumbnailImageUrl src={thumbnailUrl} />
              <VideoDetails>
                <ProfileUrl src={profileImageUrl} />
                <ContentSection>
                  <Title textColor={textColor}>{title}</Title>
                  <ChannelName textColor={textColor}>{name}</ChannelName>
                  <ViewsAndDate textColor={textColor}>
                    {viewCount} views <Dot>&#8226;</Dot>
                    {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideoCard
