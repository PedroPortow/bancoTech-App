import React from 'react'
import video from '../../videos/video.mp4'

import {Container, FormContainer, FormWrapper, Icon, Form, FormButton, FormH1, FormLabel, FormInput, Text, HeroBg, VideoBg} from './SigninElements'

function SignIn() {
  return (
    <>
        <Container> 
            <HeroBg>
                
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
               
            </HeroBg>
            <FormContainer>
                
                <FormWrapper>
                    
                    <Icon to="/">BancoTech</Icon>
                    <Form action="#">
                        <FormH1>Faça log-in na sua conta BancoTech</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required placeholder='youremail@gmail.com' />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Esqueceu sua senha?</Text>
                    </Form>
                </FormWrapper>
            </FormContainer>
        </Container>
    </>
  )
}

export default SignIn