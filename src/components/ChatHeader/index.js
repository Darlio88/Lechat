import React from 'react'


//icons
import {AiOutlinePlus} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'

//styles
import {ChatHeaderContainer, UpperChatHeader, HeaderTitle, EditIcon, BottomChatHeader, Input, SearchIcon} from './styles'


//custom colors
import {colors} from '../../assets/colors'

const Index = () => {
  return (
    <ChatHeaderContainer >
      <UpperChatHeader>
        <HeaderTitle>Chats</HeaderTitle>
        <EditIcon><AiOutlinePlus color='white'/></EditIcon>
      </UpperChatHeader>
      <BottomChatHeader>
        <Input placeholder='Search here...' />
        <SearchIcon>
          <CiSearch />
        </SearchIcon>
      </BottomChatHeader>
       
    </ChatHeaderContainer>
  )
}

export default Index