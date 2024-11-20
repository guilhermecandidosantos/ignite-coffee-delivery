import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    ${typeFont.titleL};
    color: ${props => props.theme['yellow-dark']};
  }

  > h2 {
    ${typeFont.textLR};
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
  }
`

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 2.5rem;

  @media (max-width: 1152px) {
    > img {
      width: 20rem;
    }
  }

  @media (max-width: 792px) {
    position: relative;
    > img {
      width: 10rem;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
    }
  }

  @media (max-width: 452px) {
    position: relative;
    > img {
      width: 5rem;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
    }
  }

  @media (max-width: 374px) {
    position: relative;
    > img {
      width: 0;
      pointer-events: none;
    }
  }
`
export const Infos = styled.div`
   background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, ${props => props.theme['yellow-dark']},
       ${props => props.theme['purple-dark']}) border-box;
  border: 1px solid transparent;
  padding: 2.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: row;
    gap: 0.3125rem;

    > div:last-child {
      p {
        ${typeFont.textMR};
        color: ${props => props.theme['base-text']};
      } 
    }
  }

`
const VARIANT = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface ItemProps {
  variant: keyof typeof VARIANT
}

export const Item = styled.div<ItemProps>`
  width: 2rem;
  height: 2rem;
  background: ${props => props.theme[VARIANT[props.variant]]};
  color: ${props => props.theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
