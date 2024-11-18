import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  > h1 {
    ${typeFont.titleL};
    color: ${props => props.theme['base-subtitle']};
    margin-top: 2rem;
  }

  > img {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    filter: blur(80px);
    pointer-events: none;
  }

  @media (min-width: 1760px) {
    > img {
      width: 100%;
      height: 544px;
      object-fit: cover;
    }
  }
  
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  position: relative;

 `

export const Infos = styled.div`
  flex: 1;

  > div:first-child > h1 {
    ${typeFont.titleXL};
    color: ${props => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  > div:first-child > h2 {
    ${typeFont.textLR};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }

  >div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

export const TextHome = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > p {
    ${typeFont.textMR};
    color: ${props => props.theme['base-text']};
  }
`

const InfoBase = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartInfo = styled(InfoBase)`
  background: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['background']};
`

export const PackageInfo = styled(InfoBase)`
  background: ${props => props.theme['base-text']};
  color: ${props => props.theme['background']};
`

export const TimerInfo = styled(InfoBase)`
  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['background']};
`

export const CoffeeInfo = styled(InfoBase)`
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['background']};
`

export const ImageCoffee = styled.div`
  @media (max-width: 1141px) {
    display: none;
  }
`

export const CardsContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  width: 100%;
  margin-top: 3.375rem;

  @media (max-width: 1442px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1247px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
`
