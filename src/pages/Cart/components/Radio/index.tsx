import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'

interface RadioProps {
  typePayment: 'credit' | 'debit' | 'money'
}

export function Radio({ typePayment }: RadioProps) {
  function renderImgAndDescription(param: string) {
    switch (param) {
      case 'credit':
        return (
          <>
            <CreditCard size={18} />
            <span>Cartão de crédito</span>
          </>
        )

      case 'debit':
        return (
          <>
            <Bank size={18} />
            <span>Cartão de débito</span>
          </>
        )
      case 'money':
        return (
          <>
            <Money size={18} />
            <span>dinheiro</span>
          </>
        )
      default:
        return ''
    }
  }

  const paymentSelected = 'credit'

  return (
    <RadioContainer data-state={paymentSelected === typePayment}>
      <input type="radio" name="paymentMethod" value={typePayment} />
      {renderImgAndDescription(typePayment)}
    </RadioContainer>
  )
}
