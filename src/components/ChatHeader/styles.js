import styled from "styled-components";
import tw from "twin.macro"

export const ChatHeaderContainer = styled.div`
z-index:10;
${tw`absolute top-0 left-0 right-0 px-4 py-2`}
`


export const UpperChatHeader = styled.div`
${tw`flex justify-between items-center text-xl font-bold mb-2 `}
`

export const HeaderTitle = styled.h3`
${tw``}
`

export const EditIcon = styled.button`
background-color:#4eac6d;
 opacity:0.7;
&:hover{
    opacity:1;
    background-color:#4eac6d;
}
${tw`rounded-sm flex justify-center p-1`}
`

export const BottomChatHeader = styled.div`
background-color:#495057;
${tw`flex items-center mb-2 rounded-lg px-2 py-2`}
`
export const Input = styled.input`
flex:1;
border: 0px solid transparent;
background-color:transparent;
outline:none;
${tw` text-sm rounded-lg`}
`

export const SearchIcon = styled.button`
${tw`flex justify-center items-center ml-1 text-2xl`}
`