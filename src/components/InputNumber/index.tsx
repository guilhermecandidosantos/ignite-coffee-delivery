import { ChangeEvent, useState } from 'react'
import { Input, InputContainer } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function InputNumber() {
  const [quantity, setQuantity] = useState(1)

  function addQuantity() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function removeQuantity() {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
    } else {
      setQuantity(1)
    }
  }

  function alterQuantity(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value === ''
      ? quantity
      : Number(event.target.value)
    setQuantity(newValue)
  }

  return (
    <InputContainer>

      <button type="button" onClick={() => removeQuantity()}>
        <Minus size={18} />
      </button>
      <Input
        type="number"
        value={quantity}
        onChange={(event) => alterQuantity(event)}
      />
      <button
        type="button" onClick={() => addQuantity()}
      ><Plus size={18} />
      </button>
    </InputContainer>
  )
}
