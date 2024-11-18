import { ShoppingCart } from '@phosphor-icons/react'
import { InputNumber } from '../InputNumber'
import { Button, CardContainer, PriceContainer, TagContainer } from './styles'

interface CardProps {
  coffee: {
    id: number;
    image: string
    tags: string[],
    title: string;
    description: string
    price: number;
  }
}

export function Card({ coffee }: CardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} alt="" />
      <TagContainer>
        {coffee.tags.map(tag => {
          return <span key={tag}>{tag}</span>
        })}
      </TagContainer>
      <h1>{coffee.title}</h1>
      <p>{coffee.description}</p>
      <PriceContainer>
        <span>R$ {}</span>
        <label htmlFor="">{coffee.price.toLocaleString('pt-br',
          { minimumFractionDigits: 2 })}
        </label>

        <InputNumber />

        <Button type="button">
          <ShoppingCart size={18} weight="fill" />
        </Button>
      </PriceContainer>
    </CardContainer>
  )
}
