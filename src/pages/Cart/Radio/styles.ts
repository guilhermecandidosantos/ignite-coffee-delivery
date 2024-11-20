import { styled } from 'styled-components'
import { typeFont } from '../../../styles/texts'

export const RadioContainer = styled.label`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  ${typeFont.buttonM};
  color: ${props => props.theme.purple};
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  flex: 1;
  cursor: pointer;

  &[data-state=true] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background: ${props => props.theme['base-hover']};
  }

  > input {
    display: none;
  }

  > span {
    color: ${props => props.theme['base-text']};
  }
`
