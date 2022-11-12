import React from 'react'

//styles
import {Input, FooterContainer, Button} from './styles'


//icons
import {GrEmoji} from 'react-icons/gr'
import {BsThreeDots} from 'react-icons/bs'
import {BiMicrophone} from 'react-icons/bi'
import {IoMdSend} from 'react-icons/io'

//custom colors
import { colors } from '../../assets/colors'


const ChatAreaFooter = () => {
  return (
    <FooterContainer style={{backgroundColor:colors.dark, opacity:0.87}}>
      <Button><BsThreeDots/></Button>
      <Button><GrEmoji/></Button>
      <Input placeholder='Enter message here...' />
      <Button><BiMicrophone/></Button>
      <Button style={{backgroundColor:colors.success,boxShadow: '-1px 5px 28px 0px rgba(191,182,182,0.74)', opacity:0.87}}><IoMdSend/></Button>
    </FooterContainer>
  )
}

export default ChatAreaFooter