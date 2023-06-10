import styled from 'styled-components'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const ThumbnailImageUrl = styled.img`
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const ProfileUrl = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.textColor};
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.textColor};
`
export const ViewsAndDate = styled.p`
  font-family: 'Robot';
  font-size: 12px;
  color: ${props => props.textColor};
`
export const Dot = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  padding-left: 5px;
  padding-right: 5px;
`
