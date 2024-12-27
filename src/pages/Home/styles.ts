import styled from 'styled-components'
import { typeFont } from '../../styles/text'
import { defaultTheme } from '../../styles/theme/default'

export const InfoWrapper = styled.div`
  position: relative;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(80px);
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3.5rem;
  margin: 0 20rem;
  padding: 3rem 0;

  @media (max-width: 1752px) {
    margin: 0 15rem;
  }

  @media (max-width: 1656px) {
    margin: 0 10rem;
  }

  @media (max-width: 1588px) {
    margin: 0 2rem;
  }
`

export const InfosContainer = styled.div`
  flex: 1;
`

export const TitlesContainer = styled.div`
  > h1 {
    ${typeFont.titleXL};
    color: ${props => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  > h2 {
    ${typeFont.textLR};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 4.125rem;
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  
`

type CIRCLE_COLOR_TYPE = keyof typeof defaultTheme

interface ItemProps {
  circleColor: CIRCLE_COLOR_TYPE
}

export const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${props => props.theme['background']};
    background: ${props => props.theme[props.circleColor]};
  }

  > span {
    color: ${props => props.theme['base-text']};
    ${typeFont.textMR};
  }
`

export const ImageContainer = styled.div`
  flex: 1; 

  @media (max-width: 1362px) {
    display: none;
    overflow: hidden;
  }
`
export const Image = styled.div`
  display: flex;
  justify-content: end;

  > img {
    max-width: 30rem;
    width: 100%;
    height: 100%;
  }
`

export const CoffeeTitle = styled.h1`
  margin: 0 20rem;
  ${typeFont.titleL};
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 3.375rem;

  @media (max-width: 1752px) {
    margin: 0 15rem;
    margin-bottom: 3.375rem;

  }

  @media (max-width: 1656px) {
    margin: 0 10rem;
    margin-bottom: 3.375rem;

  }

  @media (max-width: 1588px) {
    margin: 0 2rem;
    margin-bottom: 3.375rem;
  }
`

export const CardsContainer = styled.main`
  margin: 0 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1752px) {
    margin: 0 15rem;
  }

  @media (max-width: 1656px) {
    margin: 0 10rem;
  }

  @media (max-width: 1588px) {
    margin: 0 2rem;
  }

  @media (max-width: 1174px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 884px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 602px) {
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;
  }
`
