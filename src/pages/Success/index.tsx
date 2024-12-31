import { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext'
import { useParams } from 'react-router'
import {
  Circle,
  DeliveryContainer,
  InfoContainer,
  InfoDeliveryContainer,
  SuccessContainer,

} from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { TypePayment } from '../Cart/components/Radio'

export function Success() {
  const { orders } = useContext(CartContext)
  const { id } = useParams()

  const order = orders.find((o) => o.id === id)

  function returnDescription(payment: TypePayment) {
    switch (payment) {
      case TypePayment.credit:
        return 'Cartão de crédito'
      case TypePayment.debit:
        return 'Cartão de debito'
      case TypePayment.money:
        return 'Dinheiro'
      default:
        return ''
    }
  }

  if (order) {
    return (
      <SuccessContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <InfoDeliveryContainer>
          <DeliveryContainer>

            <InfoContainer>
              <Circle circleColor="purple"><MapPin size={20} weight="fill" /></Circle>
              <div>
                <p>Entrega em <strong>{order.street}, {order.number}</strong></p>
                <p>{order.neighborhood} - {order.city}, {order.state}</p>
              </div>
            </InfoContainer>

            <InfoContainer>
              <Circle circleColor="yellow"><Timer size={20} weight="fill" /></Circle>
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min </p>
              </div>
            </InfoContainer>

            <InfoContainer>
              <Circle circleColor="yellow-dark"><CurrencyDollar size={20} /></Circle>
              <div>
                <p>Pagamento na entrega</p>
                <p>{returnDescription(order.paymentMethod)}</p>
              </div>
            </InfoContainer>

          </DeliveryContainer>
          <img src="/assets/motoboy.svg" alt="" />
        </InfoDeliveryContainer>
      </SuccessContainer>
    )
  } else {
    return <h1>Order Not Found!</h1>
  }
}
