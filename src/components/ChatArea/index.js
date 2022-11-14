import React from 'react'

//styles
import {ChatAreaContainer, ChatAreaContent} from './styles'


//custom colors
import {colors} from '../../assets/colors'

//components
import ChatAreaHeader from './ChatAreaHeader'
import ChatAreaFooter from './ChatAreaFooter'
import SingleChatItem from '../Chats/SingleChatItem'
const Index = () => {
  return (
    <ChatAreaContainer style={{ color:'gray'}}>
        <ChatAreaHeader />
        <ChatAreaContent>
          {
            [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10].map(i=>(<p style={{textAlign:'right'}}>Bitcoin Theory covers the design of Bitcoin as a system as prescribed</p>))           
          }

        </ChatAreaContent>
        <ChatAreaFooter />
    </ChatAreaContainer>
  )
}

export default Index