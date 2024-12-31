import styled from 'styled-components'
import { typeFont } from '../../../../styles/text'

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme['base-button']};

  > img {
    max-width: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;

    > p {
      ${typeFont.textMR};
      color: ${props => props.theme['base-subtitle']};
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      > button {
        display: flex;
        /* flex: 1; */
        flex-direction: row;
        align-items: center;
        border: none;
        padding: 0.5rem;
        color: ${props => props.theme['purple']};
        background: ${props => props.theme['base-button']};
        ${typeFont.buttonM};
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1;
        gap: 0.25rem;
        cursor: pointer;
        border-radius: 6px;
        transition: 0.3s ease;

        > span {
          color: ${props => props.theme['base-text']};
        }

        &:hover {
          transition: 0.3s ease;
          background: ${props => props.theme['base-hover']};
          > span {
            color: ${props => props.theme['base-subtitle']};
          }
        }
      }
    }
  }

  > span {
    color: ${props => props.theme['base-text']};
    ${typeFont.textMB};
  }
  
`
