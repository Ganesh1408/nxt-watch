import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const TrendingItemList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`
export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width:100%;
  }
`

export const TrendingProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
