import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const CardContainer = styled.form`
  width: 16rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  > img {
    margin-top: -3rem;
    width: 7.5rem;
  }

  > h1 {
    ${typeFont.titleS};
    color: ${props => props.theme['base-subtitle']};
    margin-top: 1rem;
  }

  > p {
    ${typeFont.textS};
    color: ${props => props.theme['base-label']};
    margin-top: 0.5rem;  
    text-align: center;
  }
`

export const TagContainer = styled.div`
   display: flex;
    flex-direction: row;
    gap: 4px;
    margin-top: 0.75rem;

    span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    ${typeFont.tag};
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${props => props.theme['base-text']};
  
  > span {
    ${typeFont.textS};
  };

  label {
    ${typeFont.titleM};
    margin: 0 1.4375rem 0 0.25rem;
  }
`
export const Button = styled.button`
  padding: 0.5rem;
  background: ${props => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['base-card']};
  cursor: pointer;

  &:hover{
    background: ${props => props.theme['purple']};
  }
`
