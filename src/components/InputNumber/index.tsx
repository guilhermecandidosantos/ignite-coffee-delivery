import { Minus, Plus } from '@phosphor-icons/react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  quantityCoffee: number
}
export function InputNumber({ quantityCoffee }: InputNumberProps) {
  return (
    <InputNumberContainer>
      <button type="button"><Minus size={18} /></button>
      <input type="number" value={quantityCoffee} />
      <button type="button"><Plus size={18} /></button>
    </InputNumberContainer>
  )
}
