import styled from 'styled-components'
import { typeFont } from '../../styles/text'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 20rem;
  padding: 2rem 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  > div > span {
    color: ${props => props.theme['purple-dark']};
    background: ${props => props.theme['purple-light']};
    ${typeFont.textS};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 8px;
    padding: 0.5rem;
  }

  > div > button {
    border: none;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 8px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  
  > div > button > span {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: ${props => props.theme['yellow-dark']};
    color: ${props => props.theme.white};
    ${typeFont.textS};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
