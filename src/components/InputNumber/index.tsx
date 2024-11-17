import { useState } from 'react'
import { Input } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

export function InputNumber() {
  const [quantity, setQuantity] = useState(1)

  function addQuantity() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
  }

  function removeQuantity() {
    const newQuantity = quantity - 1
    setQuantity(newQuantity)
  }

  return (
    <div>
      <button type="button" onClick={() => removeQuantity()}>
        <Minus size={18} />
      </button>
      <Input type="number" value={quantity} />
      <button
        type="button" onClick={() => addQuantity()}
      ><Plus size={18} />
      </button>
    </div>
  )
}
