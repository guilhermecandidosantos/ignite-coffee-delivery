import {
  CardsContainer,
  CartInfo,
  CoffeeInfo,
  HomeContainer,
  ImageCoffee,
  InfoContainer,
  Infos,
  PackageInfo,
  TextHome,
  TimerInfo,
} from './styles'
import coffeeImage from '../../assets/coffee-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import backgroundInfo from '../../assets/background.svg'
import { coffees } from '../../data.json'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <img src={backgroundInfo} alt="" />
      <InfoContainer>
        <Infos>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver,
              a qualquer hora
            </h2>
          </div>

          <div>
            <TextHome>
              <CartInfo>
                <ShoppingCart size={16} weight="fill" />
              </CartInfo>
              <p>Compra simples e segura</p>
            </TextHome>
            <TextHome>
              <PackageInfo>
                <Package size={16} weight="fill" />
              </PackageInfo>
              <p>Embalagem mantém o café intacto</p>
            </TextHome>
            <TextHome>
              <TimerInfo>
                <Timer size={16} weight="fill" />
              </TimerInfo>
              <p>Entrega rápida e rastreada</p>
            </TextHome>
            <TextHome>
              <CoffeeInfo>
                <Coffee size={16} weight="fill" />
              </CoffeeInfo>
              <p>O café chega fresquinho até você</p>
            </TextHome>
          </div>
        </Infos>
        <ImageCoffee>
          <img src={coffeeImage} alt="" />
        </ImageCoffee>
      </InfoContainer>

      <h1>Nossos cafés</h1>

      <CardsContainer>
        {coffees.map((coffee) => {
          return <Card key={coffee.id} coffee={coffee} />
        })}
      </CardsContainer>
    </HomeContainer>
  )
}
