import { forwardRef, LegacyRef } from 'react'
import { RadioContainer } from './styles'
import { Bank, CreditCard, Money } from '@phosphor-icons/react'

interface RadioProps {
  typePayment: 'credit' | 'debit' | 'money'
  description: 'Cartão de crédito' | 'Cartão de débito' | 'Dinheiro'
}

function Radio(props: RadioProps, ref: LegacyRef<HTMLInputElement>) {
  function renderImgPayment(param: string) {
    switch (param) {
      case 'credit':
        return <CreditCard size={18} />
      case 'debit':
        return <Bank size={18} />
      case 'money':
        return <Money size={18} />
      default:
        return ''
    }
  }
  const paymentMethodSelected = 'debit'

  return (
    <RadioContainer data-state={paymentMethodSelected === props.typePayment}>
      <input
        type="radio"
        value={props.typePayment}
        ref={ref}
        id="paymentMethod"
        name="paymentMethod"
      />
      {renderImgPayment(props.typePayment)}
      <span>{props.description}</span>
    </RadioContainer>
  )
}

export const RadioInput = forwardRef(Radio)
