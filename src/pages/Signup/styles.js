import styled from "styled-components"
import tw from 'twin.macro'

export const SignupContainer = styled.div`
${tw`px-3 w-screen h-screen flex flex-col items-center justify-center`}
`
export const Input = styled.input`
flex:1;
background-color:#495057;
color:#f6f6f9;
border: 0px solid transparent;
outline:none;
${tw`px-3 py-3 text-base rounded-lg`}
`
export const Name = styled.h1`

${tw`text-center uppercase text-2xl font-extrabold italic`}
`

export const Form = styled.form`
${tw`mt-10 flex flex-col w-full lg:w-2/6 lg:space-y-4 space-y-3`}
`

export const ErrorText = styled.small`
color:red;
margin-top:-0.5rem;
${tw`italic text-sm font-thin`}
`