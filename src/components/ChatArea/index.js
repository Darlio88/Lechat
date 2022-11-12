import React from 'react'

//styles
import {ChatAreaContainer} from './styles'


//custom colors
import {colors} from '../../assets/colors'

//components
import ChatAreaHeader from './ChatAreaHeader'
import ChatAreaFooter from './ChatAreaFooter'

const Index = () => {
  return (
    <ChatAreaContainer style={{ color:'gray'}}>
        <ChatAreaHeader />
        <ChatAreaFooter />
    </ChatAreaContainer>
  )
}

export default Index