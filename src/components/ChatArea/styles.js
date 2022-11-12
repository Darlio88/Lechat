import styled from "styled-components";
import tw from "twin.macro"


export const ChatAreaContainer = styled.div`
flex:8;
${tw`hidden lg:flex lg:h-screen relative`}
`

export const HeaderContainer = styled.div`
top:0;
left:0;
right:0;
z-index:10;
box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
-webkit-box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
-moz-box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
${tw`flex w-full absolute items-center justify-between px-4`}
`
export const  HeaderLeft = styled.div`
${tw`flex items-center space-x-2`}

`
export const  HeaderRight = styled.div`
${tw`flex items-center space-x-4 text-lg lg:text-xl`}
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

export const ProfileContainer = styled.div`

${tw`relative flex items-center`}
`
export const ProfileName =styled.h2`
${tw`text-lg font-semibold`}
`
export const ProfileStatus =styled.h4`
${tw`text-base font-thin`}
`
export const ProfileDetails =styled.div`
${tw`py-1 flex flex-col justify-around`}
`

export const Input = styled.input`
flex:1;
background-color:#495057;
border: 0px solid transparent;
outline:none;
${tw`px-3 py-3 text-sm rounded-lg`}
`

export const FooterContainer = styled.div`
bottom:0;
left:0;
right:0;
min-height: 1.5rem;
z-index:10;
box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
-webkit-box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
-moz-box-shadow: -1px 5px 28px 0px rgba(191,182,182,0.74);
${tw`absolute flex items-center lg:text-xl space-x-3 px-4 py-3`}
`

export const Button = styled.button`
${tw`flex  p-3 items-center justify-center text-xl rounded-lg`}
`