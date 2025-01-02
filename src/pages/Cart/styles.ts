import styled from 'styled-components'
import { typeFont } from '../../styles/text'

export const CartContainer = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 20rem 3rem 20rem;
  gap: 2rem;

  @media (max-width: 1752px) {
    margin: 0 15rem 3rem 15rem;
  }

  @media (max-width: 1656px) {
    margin: 0 10rem 3rem 10rem;
  }

  @media (max-width: 1588px) {
    margin: 0 2rem 3rem 2rem;
  }

  @media (max-width: 1070px) {
    flex-wrap: wrap;
  }
`

export const AddressPayment = styled.div`
  flex: 1.5;
  flex-wrap: wrap;
  > h1 {
    ${typeFont.titleXS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  @media (max-width: 612px) {
    flex: 1;
    width: 100%;
  }
`

export const AddressContainer = styled.div`
  background: ${props => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const TitleAddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${props => props.theme['yellow-dark']};
  margin-bottom: 2rem;

  > div > p {
    ${typeFont.textMR};
    color: ${props => props.theme['base-subtitle']};
  }

  > div > span {
    ${typeFont.textS};
    color: ${props => props.theme['base-text']};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;

  > input:nth-child(2) {
    width: 100%;
  }
`

export const InputBase = styled.input`
  color: ${props => props.theme['base-text']};
  ${typeFont.textS};
  border-radius: 4px;
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  padding: 0.75rem;
  width: 12.5rem;

  @media (max-width: 613px) {
    flex: 1;
    width: 100%;
  }

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']};
  }

  &[name="state"] {
    text-transform: uppercase;
  }
`

export const NumberComplement = styled.div`
  display: flex;
  flex: 1;
  gap: 0.75rem;

  @media (max-width: 613px) {
    flex: 1;
    flex-direction: column;
    width: 100%;
  }

  > div {
    display: flex;
    flex: 1;
    position: relative;
  }

  > div > input {
    flex: 1;
  }

  > div > span {
    position: absolute;
    height: 100%;
    right: 8px;
    display: flex;
    align-items: center;
    font-style: italic;
    ${typeFont.textXS};
    font-weight: 400;
    color: ${props => props.theme['base-label']};
  }
`

export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
 
  > input:nth-child(2) {
    flex: 1;
  }

  > input:last-child {
    width: 3rem;
    text-transform: uppercase;
  }

  @media (max-width: 613px) {
    flex: 1;
    flex-direction: column;
    width: 100%;

    > input:last-child {
      flex: 1;
      width: 100%; 
    }
  }
`

export const PaymentContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 612px) {
    flex: 1;
    width: 100%;
  }
`

export const TitlePayment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${props => props.theme['purple']};

  > div > p {
    ${typeFont.textMR};
    color: ${props => props.theme['base-subtitle']};
  }

  > div > span {
    ${typeFont.textS};
    color: ${props => props.theme['base-text']};
  }
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  margin-top: 2rem;
  

  @media (max-width: 507px) {
    flex-direction: column;
  }
`

export const CoffeePreview = styled.div`
  flex: 1;
  width: 100%;

  @media (max-width: 1044px) {
    max-width: 40rem;
  }

  > h1 {
    ${typeFont.titleXS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const PreviewContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;

  > div + div {
    margin-top: 1.5rem;
  }

`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > p {
    ${typeFont.textS};
    color: ${props => props.theme['base-text']};
  }

  > span {
    color: ${props => props.theme['base-text']};
    ${typeFont.textMR};
  }

  &:last-child {
    > p {
    ${typeFont.textLB};
    color: ${props => props.theme['base-subtitle']};
    }

    > span {
      color: ${props => props.theme['base-subtitle']};
      ${typeFont.textLB};
    }
  }
`

export const SubmitOrder = styled.button`
  padding: 0.75rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
  color: ${props => props.theme['white']};
  ${typeFont.buttonG};
  text-transform: uppercase;
  border-radius: 6px;
  background: ${props => props.theme['yellow']};
  transition: 0.3s ease;
  border: none;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
    transition: 0.3s ease;
  }
`

export const EmptyContainer = styled.div`
  margin: 0 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1752px) {
      margin: 0 15rem;
    }

    @media (max-width: 1656px) {
      margin: 0 10rem;
    }

    @media (max-width: 1588px) {
      margin: 0 2rem;
    }
  > h1 {
    ${typeFont.titleL};
  }

  
`
export const ZipContainer = styled.form``
