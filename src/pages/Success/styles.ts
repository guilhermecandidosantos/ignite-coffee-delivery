import styled from 'styled-components'
import { typeFont } from '../../styles/text'
import { defaultTheme } from '../../styles/theme/default'

export const SuccessContainer = styled.div`
  margin: 5rem 20rem 0 20rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1752px) {
    margin: 5rem 15rem 0 15rem;
  }

  @media (max-width: 1656px) {
    margin: 5rem 10rem 0 10rem;
  }

  @media (max-width: 1588px) {
    margin: 5rem 2rem 0 2rem;
  }

  @media (max-width: 1270px) {
    margin: 5rem 2rem 0 2rem;
    /* position: relative; */
  }

  > h1 { 
    ${typeFont.titleL};
    color: ${props => props.theme['yellow-dark']};
  }

  > h2 {
    ${typeFont.textLR};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const InfoDeliveryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6.375rem;
  margin-top: 2.5rem;

  @media (max-width: 1270px) {
    position: relative;

    > img {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      width: 15rem;
    }
  }

  @media (max-width: 678px) {
    position: relative;

    > img {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      width: 8rem;
    }
  }

  @media (max-width: 430px) {
    position: relative;

    > img {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      width: 4rem;
    }
  }
  
`

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(to right, ${props => props.theme['yellow']}, 
      ${props => props.theme['purple']}) border-box;
  border: 1px solid transparent;
  padding: 2.5rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;

`

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  > div > p {
    ${typeFont.textMR};
    color: ${props => props.theme['base-text']};
  }

  > div > p + p {
    ${typeFont.textMB};
  }
`

type CIRCLE_COLOR_TYPE = keyof typeof defaultTheme

interface ItemProps {
  circleColor: CIRCLE_COLOR_TYPE
}

export const Circle = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme[props.circleColor]};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: ${props => props.theme.background};
`
