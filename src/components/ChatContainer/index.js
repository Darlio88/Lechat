import React from 'react'

//styles
import {ChatContainer} from './styles'

//components
import ChatHeader from './../ChatHeader'
import Chats from './../Chats'

//colors
import {colors} from '../../assets/colors'

const index = () => {
  return (
    <ChatContainer style={{ backgroundColor:colors.black,color:'gray'}}>
        <ChatHeader />
        <Chats />
    </ChatContainer>
  )
}

export default index