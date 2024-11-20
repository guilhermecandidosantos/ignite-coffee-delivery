import { CardPreviewContainer, Item, Separator } from './styles'
import data from '../../data.json'
import { InputNumber } from '../InputNumber'
import { Trash } from '@phosphor-icons/react'

export function CardPreview() {
  return (
    <CardPreviewContainer>
      <Item>
        <img src={data.coffees[0].image} alt="" />
        <div>
          <span>{data.coffees[0].title}</span>
          <div>
            <InputNumber />

            <button type="button">
              <Trash size={18} />
              <span>Remover</span>
            </button>
          </div>
        </div>
        <span>
          {data.coffees[0].price.toLocaleString('pt-br',
            { style: 'currency', currency: 'BRL' })}
        </span>
      </Item>

      <Separator />
    </CardPreviewContainer>
  )
}
