import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  margin-right: 0.5rem;

  >  button {
    cursor: pointer;
    border: none;
    background: transparent;
    color: ${props => props.theme.purple};

    &:hover {
      color: ${props => props.theme['purple-dark']};
    }
  }
`

export const Input = styled.input`
  max-width: 2rem;
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
