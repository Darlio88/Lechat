import React from 'react'

//icons

import {AiOutlineMessage} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'
import {RiContactsLine} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'
//styles
import { NavConatiner,NavLinksContainer, ProfileIcon, ProfilePic } from './styles'

//profile image
import profile from '../../assets/woman.jpg'

//custom colors
import {colors} from '../../assets/colors'

const Index = () => {
  return (
    <NavConatiner style={{backgroundColor:colors.dark, color:'gray'}}>
      <NavLinksContainer>
      <AiOutlineMessage />
      <RiContactsLine />
      <BsTelephone />
      <BsGear />
      </NavLinksContainer>
      {/* profile details */}
      <ProfileIcon>
        <ProfilePic src={profile} alt='logo' />
      </ProfileIcon>
    </NavConatiner>
  )
}

export default Index