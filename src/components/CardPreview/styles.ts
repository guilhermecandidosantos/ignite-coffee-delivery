import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const CardPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;  
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  > img {
    width: 4rem;
    margin-right: 1.125rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: 3.125rem;
  }

  > div > span {
    ${typeFont.textMR};
    color: ${props => props.theme['base-subtitle']};
  }

  > div > div {
    display: flex;
    flex-direction: row;
  }

  > div > div > button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    color: ${props => props.theme.purple};
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    cursor: pointer;  

    &:hover {
      background: ${props => props.theme['base-hover']};
    }
  }

  > div > div > button > span {
    ${typeFont.textS};
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};
  }

  > span {
    ${typeFont.textMB};
    color: ${props => props.theme['base-text']};
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme['base-button']};
  margin: 1.5rem 0;
`
