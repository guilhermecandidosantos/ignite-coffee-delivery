import styled from 'styled-components'
import { typeFont } from '../../styles/texts'

export const CartContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  box-sizing: content-box;
  gap: 2rem;

  @media (max-width:750px) {
    flex-direction: column;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;

  > h1 {
    ${typeFont.titleXS};
    color: ${props => props.theme['base-subtitle']};
  }
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 1rem;
  gap: 1rem;
`
export const TitleWrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  color: ${props => props.theme['yellow-dark']};
  margin-bottom: 1rem;

  > div > h2 {
    ${typeFont.textMR};
    color: ${props => props.theme['base-subtitle']};
  }

  > div > p {
    ${typeFont.textS};
    color: ${props => props.theme['base-text']};
  }

`
const InputBase = styled.input`
  background: ${props => props.theme['base-input']};
  border: 1px solid ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  ${typeFont.textS};
  padding: 0.75rem;
  border-radius: 4px;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
  
  &:focus {
    box-shadow: 0 0 0 1px ${props => props.theme['yellow-dark']};
  }
`

export const CepInput = styled(InputBase)`
  width: 12.5rem;
`

export const StreetInput = styled(InputBase)`
  flex: 1;
`

export const NumberAddress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const NumberInput = styled(InputBase)`
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const ComplementContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

export const ComplementInput = styled(InputBase)`
  flex: 1;

  &:not(:placeholder-shown) + .placeholder {
    display: none;
  }
`

export const Placeholder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.75rem;
  pointer-events: none;
  align-items: center;

  > span:first-child {
    ${typeFont.textS};
    color: ${props => props.theme['base-label']};
  }

  > span:last-child {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-style: italic;
    line-height: 1.3;
    color: ${props => props.theme['base-label']};
  }
`

export const AddressInLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  flex-wrap: wrap;
`
export const DistrictInput = styled(InputBase)`
  width: 12.5rem;
`

export const CityInput = styled(InputBase)`
  flex: 1;
`

export const StateInput = styled(InputBase)`
  width: 3rem;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};
  border-radius: 6px;
`

export const TitlePaymentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  gap: 0.5rem;
  color: ${props => props.theme.purple};

  > div > h1 {
    ${typeFont.textMR};
    color: ${props => props.theme['base-subtitle']};
  }

  > div > p {
    ${typeFont.textS};
    color: ${props => props.theme['base-text']};
  }
`

export const InputsRadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const InfosCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-wrap: wrap;

  > h1 {
    ${typeFont.titleXS};
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

`

export const InfoContent = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 6px 44px 6px 44px;
  padding: 2rem;
`
export const Total = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    > p {
      ${typeFont.textS};
      color: ${props => props.theme['base-text']};
    }

    span {
      ${typeFont.textMR};
      color: ${props => props.theme['base-text']};
    }
  }

  > div:last-child > p {
    ${typeFont.textLB};
    color: ${props => props.theme['base-subtitle']};
  }

  > div:last-child > span {
    ${typeFont.textLB};
    color: ${props => props.theme['base-subtitle']};
  }
`
export const SendOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 0.75rem;
  width: 100%;
  border-radius: 6px;
  background: ${props => props.theme['yellow']};
  color: ${props => props.theme.white};
  border: none;
  ${typeFont.buttonG};
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`
