import styled from "styled-components";
import tw from "twin.macro"

export const ChatsContainer = styled.div`

padding-top: 7rem;

${tw`h-full px-4 space-y-3`}
`

export const ProfileContainer = styled.div`

${tw`relative flex items-center`}
`

export const Online = styled.div`
width:.8rem;
height:.8rem;
background:green;
border-color: #212529;
left:1.5rem;
bottom:-0.2rem;
border-width:0.125rem;
${tw`rounded-full absolute `}
`

export const ProfileIcon = styled.div`
width:2.5rem;

height:2.5rem;
overflow:hidden;
${tw`rounded-full mr-2`}
`

export const ProfilePic = styled.img`
display:block;

`

export const ChatItemContainer = styled.div`


${tw`flex justify-between items-center w-full`}
`
export const ChatItemUser = styled.h2`

${tw``}
`


