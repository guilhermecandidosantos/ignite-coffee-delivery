import { styled } from 'styled-components'
import { typeFont } from '../../styles/texts'

export const HeaderContainer = styled.header`
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    span {
      color: ${props => props.theme['purple-dark']};
      background: ${props => props.theme['purple-light']};
      ${typeFont.textS};
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
    }

    button {
      padding: 0.5rem;
      background: ${props => props.theme['yellow-light']};
      border: none;
      border-radius: 8px;
      color: ${props => props.theme['yellow-dark']};
      cursor: pointer;
    }
  }

  
`
