import { Check, ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../InputNumber'
import { CardContainer, FormContainer, TagsContainer } from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart/CartContext'
import { Coffee } from '../../reducer/cart/reducer'

interface CardProps {
  dataCoffee: {
    id: number,
    image: string,
    tags: string[],
    title: string,
    description: string,
    price: number,
  }
}
export function Card({ dataCoffee }: CardProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(0)
  const [coffeeAddOnCart, setCoffeeAddOnCart] = useState(false)
  const { addNewCoffeeOnCart } = useContext(CartContext)

  function handleAddOneCoffee() {
    setCoffeeAddOnCart(false)
    const newQuantityCoffee = quantityCoffee + 1
    setQuantityCoffee(newQuantityCoffee)
  }

  function handleRemoveOneCoffee() {
    setCoffeeAddOnCart(false)
    if (quantityCoffee > 0) {
      const newQuantityCoffee = quantityCoffee - 1
      setQuantityCoffee(newQuantityCoffee)
    }
  }

  function handleAddCoffeeOnCart() {
    setCoffeeAddOnCart(true)
    setQuantityCoffee(0)
    const coffee: Coffee = {
      id: dataCoffee.id,
      price: dataCoffee.price,
      quantity: quantityCoffee,
    }
    addNewCoffeeOnCart(coffee)
  }

  function handleChangeValueInput(quantity: number) {
    setQuantityCoffee(quantity)
  }

  return (
    <CardContainer>
      <img src={dataCoffee.image} alt="" />
      <TagsContainer>
        {dataCoffee.tags.map(tag => {
          return (<span key={tag}>{tag}</span>)
        })}
      </TagsContainer>
      <h1>{dataCoffee.title}</h1>
      <p>{dataCoffee.description}</p>
      <FormContainer>
        <span>{dataCoffee.price.toLocaleString('pt-BR', {
          minimumFractionDigits: 2, maximumFractionDigits: 2,
        })}
        </span>
        <InputNumber
          quantityCoffee={quantityCoffee}
          handleAddOneCoffee={handleAddOneCoffee}
          handleRemoveOneCoffee={handleRemoveOneCoffee}
          handleChangeValueInput={handleChangeValueInput}
        />
        <button
          type="button"
          onClick={() => handleAddCoffeeOnCart()}
          disabled={coffeeAddOnCart || quantityCoffee === 0}
        >
          {coffeeAddOnCart
            ? <Check size={18} weight="bold" data-state={coffeeAddOnCart} />
            : <ShoppingCart size={18} weight="fill" data-state={coffeeAddOnCart} />}
        </button>
      </FormContainer>
    </CardContainer>
  )
}
