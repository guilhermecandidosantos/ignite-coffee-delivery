import { CurrencyDollar, MapPinLine, Trash } from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressPayment,
  CartContainer,
  CityContainer,
  CoffeeInfo,
  CoffeePreview,
  InputBase,
  InputsContainer,
  NumberComplement,
  PaymentContainer,
  PreviewContainer,
  Price,
  PriceContainer,
  RadioContainer,
  SubmitOrder,
  TitleAddressContainer,
  TitlePayment,

} from './styles'
import { FormEvent, KeyboardEvent, useRef } from 'react'
import { Radio } from './components/Radio'
import coffeeImg from '../../assets/coffees/expresso.svg'
import { InputNumber } from '../../components/InputNumber'

export function Cart() {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget; let inputValue = input.value.replace(/\D/g, '')
    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5) + '-' + inputValue.slice(5, 8)
    }
    const cursorPosition = Number(input.selectionStart) + 1
    input.value = inputValue
    if (cursorPosition !== null) {
      input.setSelectionRange(cursorPosition, cursorPosition)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current
    if (input) {
      const start = Number(input.selectionStart)
      const end = Number(input.selectionEnd)
      if (e.key === 'Backspace' || e.key === 'Delete') {
        const inputValue = input.value
        if (inputValue[start - 1] === '-') {
          e.preventDefault()
          input.value = inputValue.slice(0, start - 1) + inputValue.slice(start)
          input.setSelectionRange(start - 1, start - 1)
        } else {
          setTimeout(() => {
            input.setSelectionRange(start, end)
          }, 0)
        }
      }
    }
  }

  return (
    <CartContainer>
      <AddressPayment>
        <h1>Complete seu pedido</h1>
        <AddressContainer>
          <TitleAddressContainer>
            <MapPinLine size={18} />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </TitleAddressContainer>

          <InputsContainer>
            <InputBase
              type="text"
              placeholder="CEP"
              maxLength={9}
              ref={inputRef}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
            />
            <InputBase type="text" placeholder="Rua" />
            <NumberComplement>
              <InputBase type="text" placeholder="Número" />
              <div>
                <InputBase type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </div>
            </NumberComplement>
            <CityContainer>
              <InputBase type="text" placeholder="Bairro" />
              <InputBase type="text" placeholder="Cidade" />
              <InputBase type="text" placeholder="UF" maxLength={2} />
            </CityContainer>
          </InputsContainer>
        </AddressContainer>

        <PaymentContainer>
          <TitlePayment>
            <CurrencyDollar size={18} />
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </TitlePayment>

          <RadioContainer>
            <Radio typePayment="credit" />
            <Radio typePayment="debit" />
            <Radio typePayment="money" />
          </RadioContainer>
        </PaymentContainer>
      </AddressPayment>
      <CoffeePreview>
        <h1>Cafés selecionados</h1>

        <PreviewContainer>
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <CoffeeInfo key={index}>
                <img src={coffeeImg} alt="" />
                <div>
                  <p>Expresso Tradicional</p>
                  <div>
                    <InputNumber quantityCoffee={1} />
                    <button type="button">
                      <Trash size={18} />
                      <span>Remover</span>
                    </button>
                  </div>
                </div>
                <span>R$ 9,90</span>
              </CoffeeInfo>
            )
          })}

          <PriceContainer>
            <Price>
              <p>Total de itens</p>
              <span>R$ 29,70</span>
            </Price>

            <Price>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </Price>

            <Price>
              <p>Total</p>
              <span>R$ 33,20</span>
            </Price>
          </PriceContainer>

          <SubmitOrder type="button">confirmar pedido</SubmitOrder>
        </PreviewContainer>
      </CoffeePreview>
    </CartContainer>
  )
}
