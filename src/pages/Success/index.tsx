import { Infos, Item, SuccessContainer, SuccessWrapper } from './styles'
import send from '../../assets/send.svg'
import { MapPin } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <SuccessWrapper>
        <Infos>
          <div>
            <Item variant="purple">
              <MapPin size={18} weight="fill" />
            </Item>

            <div>
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>

          <div>
            <Item variant="yellow">
              <MapPin size={18} weight="fill" />
            </Item>

            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min </strong></p>
            </div>
          </div>

          <div>
            <Item variant="yellowDark">
              <MapPin size={18} weight="fill" />
            </Item>

            <div>
              <p>Pagamento na entrega</p>
              <p><strong>Cartão de crédito</strong></p>
            </div>
          </div>

        </Infos>
        <img src={send} alt="" />
      </SuccessWrapper>
    </SuccessContainer>
  )
}
