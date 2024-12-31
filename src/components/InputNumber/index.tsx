import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberContainer } from './styles'
import { ChangeEvent } from 'react'

interface InputNumberProps {
  quantityCoffee: number
  handleRemoveOneCoffee: () => void
  handleAddOneCoffee: () => void
  handleChangeValueInput: (quantity: number) => void
}

export function InputNumber({
  quantityCoffee,
  handleAddOneCoffee,
  handleRemoveOneCoffee,
  handleChangeValueInput,
}: InputNumberProps) {
  function handleChangeValue(e: ChangeEvent<HTMLInputElement>) {
    handleChangeValueInput(Number(e.target.value))
  }
  return (
    <InputNumberContainer>
      <button
        disabled={quantityCoffee === 0}
        type="button"
        onClick={() => handleRemoveOneCoffee()}
      >
        <Minus size={18} />
      </button>
      <input
        type="number"
        value={quantityCoffee}
        onChange={(handleChangeValue)}

      />
      <button type="button" onClick={() => handleAddOneCoffee()}><Plus size={18} /></button>
    </InputNumberContainer>
  )
}
