import { CoffeeInfo } from './styles'
import data from '../../../../data.json'
import { Coffee } from '../../../../reducer/cart/reducer'
import { Trash } from '@phosphor-icons/react'
import { InputNumber } from '../../../../components/InputNumber'
import { useContext } from 'react'
import { CartContext } from '../../../../context/cart/CartContext'

interface CoffeePreviewCartProps {
  coffee: Coffee
}
export function CoffeePreviewCart({ coffee }: CoffeePreviewCartProps) {
  const {
    decrementCoffeeById,
    incrementCoffeeById,
    removeCoffeeById,
    changeValue,

  } = useContext(CartContext)
  const coffeeInfo = data.coffees.find(c => c.id === coffee.id)

  function handleRemoveOneCoffee() {
    decrementCoffeeById(Number(coffeeInfo?.id), Number(coffeeInfo?.price))
  }

  function handleAddOneCoffee() {
    incrementCoffeeById(Number(coffeeInfo?.id), Number(coffeeInfo?.price))
  }

  function removeCoffeeFromCart(coffeeId: number) {
    removeCoffeeById(coffeeId)
  }

  function handleChangeValueInput(quantity: number) {
    const data = {
      coffeeId: coffee.id,
      quantity,
    }
    changeValue(data)
  }

  return (
    <CoffeeInfo>
      <img src={coffeeInfo?.image} alt="" />
      <div>
        <p>{coffeeInfo?.title}</p>
        <div>
          <InputNumber
            quantityCoffee={coffee.quantity}
            handleRemoveOneCoffee={handleRemoveOneCoffee}
            handleAddOneCoffee={handleAddOneCoffee}
            handleChangeValueInput={handleChangeValueInput}
          />
          <button type="button" onClick={() => removeCoffeeFromCart(Number(coffeeInfo?.id))}>
            <Trash size={18} />
            <span>Remover</span>
          </button>
        </div>
      </div>
      <span>R$ {coffee.price.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}
      </span>
    </CoffeeInfo>
  )
}
