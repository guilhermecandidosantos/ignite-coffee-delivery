import styled from 'styled-components'
import { typeFont } from '../../styles/text'

export const InputNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${props => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  > input[type=number]::-webkit-outer-spin-button,
  > input[type=number]::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
  } 

  > input[type=number] { 
    -moz-appearance: textfield;
  }

  > input {
    background: transparent;
    border: none;
    width: 2rem;
    text-align: center;
    ${typeFont.textMR};
    color: ${props => props.theme['title']};
  }

  > button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${props => props.theme['purple']};
    transition: 0.15s ease-in-out;
  }

  > button:hover {
    color: ${props => props.theme['purple-dark']};
    transition: 0.15s ease-in-out;
  }
`
