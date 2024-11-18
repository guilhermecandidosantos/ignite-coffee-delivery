import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: row;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  > div > button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${props => props.theme.purple}
  }
`

export const Input = styled.input`
  max-width: 3rem;
  text-align: center;
  background: transparent;
  border: none;
  color: ${props => props.theme['base-title']};
  ${typeFont.textMR};

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
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
`
