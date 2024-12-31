import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { RadioContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { forwardRef, LegacyRef } from 'react'

export enum TypePayment {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

interface RadioProps {
  typePayment: TypePayment
}

export const Radio = forwardRef(function Radio(
  { typePayment } :RadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const { register, watch } = useFormContext()

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

  const paymentSelected = watch('paymentMethod')

  return (
    <RadioContainer data-state={paymentSelected === typePayment}>
      <input
        type="radio"
        {...register('paymentMethod')}
        value={typePayment}
        ref={ref}
      />
      {renderImgAndDescription(typePayment)}
    </RadioContainer>
  )
})
