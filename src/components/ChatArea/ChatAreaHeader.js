import React from 'react'

//profile image
import profile from '../../assets/woman.jpg'


//styles
import {HeaderContainer,
     HeaderLeft, 
     HeaderRight, 
     ProfileIcon, 
     ProfilePic,
     ProfileContainer,
     ProfileDetails,
     ProfileName,
     ProfileStatus,
    Online} from './styles'


//icons
import {BsCameraVideo} from 'react-icons/bs'
import {CgPhone} from 'react-icons/cg'
import {MdDeleteOutline} from 'react-icons/md'


//custom colors
import { colors } from '../../assets/colors'


const ChatAreaHeader = () => {
  return (
    <HeaderContainer style={{backgroundColor:colors.dark,opacity:0.87}}>
        {/* header left */}
        <HeaderLeft>
            <ProfileContainer>
                <ProfileIcon>
                    <ProfilePic src={profile} alt='logo' />
                </ProfileIcon>
                <Online></Online>
            </ProfileContainer>
            <ProfileDetails>
                <ProfileName>Okello Martin</ProfileName>
                <ProfileStatus>Active</ProfileStatus>
            </ProfileDetails>
        </HeaderLeft>

        {/* header right */}
        <HeaderRight>
            <BsCameraVideo />
            <CgPhone />
            <MdDeleteOutline />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default ChatAreaHeader