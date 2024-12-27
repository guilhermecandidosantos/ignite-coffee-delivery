import { ShoppingCart } from '@phosphor-icons/react'
import coffee from '../../assets/coffees/expresso.svg'
import { InputNumber } from '../InputNumber'
import { CardContainer, FormContainer, TagsContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <img src={coffee} alt="" />
      <TagsContainer>
        <span>tradicional</span>
        <span>especial</span>
        <span>gelado</span>
        <span>gelado</span>
        <span>gelado</span>
      </TagsContainer>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <FormContainer>
        <span>9,90</span>
        <InputNumber quantityCoffee={2} />
        <button type="button"><ShoppingCart size={18} weight="fill" /></button>
      </FormContainer>
    </CardContainer>
  )
}
