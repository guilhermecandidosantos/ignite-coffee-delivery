import styled from 'styled-components'

export const Input = styled.input`

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
