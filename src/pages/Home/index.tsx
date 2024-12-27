import {
  BackgroundContainer,
  CardsContainer,
  CoffeeTitle,
  Image,
  ImageContainer,
  Infos,
  InfosContainer,
  InfoWrapper,
  Item,
  ItemsContainer,
  TitlesContainer,
} from './styles'
import coffeeImage from '../../assets/coffee-image.svg'
import backgroundImage from '../../assets/background.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <InfoWrapper>
        <Infos>
          <InfosContainer>
            <TitlesContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
            </TitlesContainer>

            <ItemsContainer>
              <Item circleColor="yellow-dark">
                <div><ShoppingCart size={18} weight="fill" /></div>
                <span>Compra simples e segura</span>
              </Item>

              <Item circleColor="base-text">
                <div><Package size={18} weight="fill" /></div>
                <span>Embalagem mantém o café intacto</span>
              </Item>

              <Item circleColor="yellow">
                <div><Timer size={18} weight="fill" /></div>
                <span>Entrega rápida e rastreada</span>
              </Item>

              <Item circleColor="purple">
                <div><Coffee size={18} weight="fill" /></div>
                <span>O café chega fresquinho até você</span>
              </Item>
            </ItemsContainer>
          </InfosContainer>

          <ImageContainer>
            <Image>
              <img src={coffeeImage} alt="" />
            </Image>
          </ImageContainer>
        </Infos>

        <BackgroundContainer>
          <img src={backgroundImage} alt="" />
        </BackgroundContainer>
      </InfoWrapper>

      <CoffeeTitle>
        Nossos Cafés
      </CoffeeTitle>

      <CardsContainer>
        {Array.from({ length: 6 }, (_, index) => {
          return (
            <Card key={index} />
          )
        })}
      </CardsContainer>
    </div>
  )
}
