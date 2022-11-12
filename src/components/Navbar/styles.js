import styled from "styled-components";
import tw from "twin.macro"

export const NavConatiner = styled.div`
z-index:10;
flex:0.1;
font-size:24px;
${tw`
flex 
justify-between
items-center
lg:justify-between
lg:py-10
lg:h-4
lg:items-center
absolute 
px-4 h-16 
lg:h-screen 
lg:flex-col 
lg:sticky 
w-full
bottom-0
left-0`}
`

export const ProfileIcon = styled.div`
width:2.5rem;

height:2.5rem;
overflow:hidden;
${tw`rounded-full ml-3`}
`

export const ProfilePic = styled.img`
display:block;

`
export const NavLinksContainer = styled.div`
 @media (max-width: 1024px) { 
    flex:1;
    margin-right: 2rem;
  }
${tw`flex 
justify-between 
items-center 
space-x-3
lg:flex-col
lg:justify-start
lg:space-y-20
`}
`