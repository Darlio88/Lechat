import React from 'react'
//styles
import {ChatsContainer,ProfileContainer, ProfilePic, ProfileIcon, Online} from './styles'


//profile image
import profile from '../../assets/woman.jpg'

//styles
import {ChatItemContainer, ChatItemUser} from './styles'

const SingleChatItem = () => {
  return (
    <ChatItemContainer >
         <ProfileContainer>
            <ProfileIcon>
                <ProfilePic src={profile} alt='logo' />
            </ProfileIcon>
            <ChatItemUser>Mercy Anyait</ChatItemUser>
            <Online></Online>
      </ProfileContainer>
      <div>3</div>
    </ChatItemContainer>
  )
}

export default SingleChatItem