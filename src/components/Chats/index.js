import React from 'react'


//styles
import {ChatsContainer,ProfileContainer, ProfilePic, ProfileIcon, Online} from './styles'


//profile image
import profile from '../../assets/woman.jpg'

//singleprofileonlinr details
import SingleChatItem from './SingleChatItem'
const Index = () => {
  return (
    <ChatsContainer>
      <SingleChatItem />
      <SingleChatItem />
      <SingleChatItem />
      <SingleChatItem />
      <SingleChatItem />
      
    </ChatsContainer>
  )
}

export default Index