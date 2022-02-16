import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    background: #01BF71;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const FormContainer = styled.div`
    background: #222021;
    height: 65%;
    min-width: 500px;
    z-index: 550;
    border-radius: 20px;
   
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    
`

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;
    padding: 20px;
    height: 100%;
    width: 100%;
`

export const Icon = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
    z-index: 999;

`

export const Form = styled.form`
    
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
   
   
  
    
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`
export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    
    
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: #232a34;
`

