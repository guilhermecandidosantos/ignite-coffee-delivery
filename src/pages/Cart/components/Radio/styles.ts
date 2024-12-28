import styled from 'styled-components'
import { typeFont } from '../../../../styles/text'

export const RadioContainer = styled.label`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  text-transform: uppercase;
  color: ${props => props.theme.purple};
  padding: 1rem;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  flex: 1;
  cursor: pointer;
  transition: 0.3s ease;


  &:hover {
    > span {
      color: ${props => props.theme['base-subtitle']};
    }
    background: ${props => props.theme['base-hover']};
    transition: 0.3s ease;
  }

  > span {
    color: ${props => props.theme['base-text']};
    ${typeFont.buttonM};
    font-weight: 400;
    line-height: 1;
  }

  &[data-state=true] {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }

  > input {
    display: none;
  }
`
