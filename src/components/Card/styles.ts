import styled from 'styled-components'
import { typeFont } from '../../styles/text'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme['base-card']};
  padding: 1.125rem;
  border-radius: 6px 36px 6px 36px;

  > img {
    margin-top: -3rem;
  }

  > h1 {
    ${typeFont.titleS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }  

  > p {
    ${typeFont.textS};
    color: ${props => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 602px) {
    width: 300px;
  }
`
export const TagsContainer = styled.div`
   margin-top: 0.75rem;
   margin-bottom: 1rem;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   gap: 0.25rem;


   > span {
    ${typeFont.tag};
    color: ${props => props.theme['yellow-dark']};
    background: ${props => props.theme['yellow-light']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
   }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  > span::before {
    content: 'R$';
    color: ${props => props.theme['base-text']};
    ${typeFont.textS};
    font-weight: 400;
    margin-right: 0.25rem;
  }

  > span {
    color: ${props => props.theme['base-text']};
    ${typeFont.titleM};  
    margin-right: 1.5rem;
  }

  > button {
    margin-left: 0.5rem;
    padding: 0.5rem;
    border: none;
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['base-card']};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.15s ease-in-out;

  }

  > button:hover {
    background: ${props => props.theme['purple']};
    transition: 0.15s ease-in-out;
  }
`
