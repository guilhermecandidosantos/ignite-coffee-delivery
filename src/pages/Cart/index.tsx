import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  AddressInLine,
  CartContainer,
  CepInput,
  CityInput,
  ComplementContainer,
  ComplementInput,
  DistrictInput,
  InfoContent,
  InfosCoffee,
  InputsContainer,
  InputsRadioContainer,
  InputsWrapper,
  NumberAddress,
  NumberInput,
  PaymentContainer,
  Placeholder,
  SendOrderButton,
  StateInput,
  StreetInput,
  TitlePaymentContainer,
  TitleWrapperInput,
  Total,
} from './styles'
import { RadioInput } from './Radio'
import { CardPreview } from '../../components/CardPreview'
import { useRef } from 'react'

export function Cart() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = () => {
    if (inputRef.current) {
      let value = inputRef.current.value.replace(/\D/g, '')
      if (value.length > 5) {
        value = value.slice(0, 5) + '-' + value.slice(5)
      } inputRef.current.value = value
    }
  }

  return (
    <CartContainer>
      <InputsContainer>
        <h1>Complete seu pedido</h1>

        <InputsWrapper>
          <TitleWrapperInput>
            <MapPinLine size={18} />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleWrapperInput>

          <CepInput
            type="text"
            placeholder="CEP"
            id="CEP"
            onInput={handleInput}
            ref={inputRef}
            maxLength={9}
          />

          <StreetInput type="text" placeholder="Rua" />

          <NumberAddress>
            <NumberInput type="number" placeholder="Numero" />

            <ComplementContainer>
              <ComplementInput type="text" placeholder=" " />
              <Placeholder className="placeholder">
                <span>Complemento</span>
                <span>Opcional</span>
              </Placeholder>
            </ComplementContainer>

          </NumberAddress>

          <AddressInLine>
            <DistrictInput type="text" placeholder="Bairro" />

            <CityInput type="text" placeholder="Cidade" />

            <StateInput type="text" placeholder="UF" />
          </AddressInLine>

        </InputsWrapper>

        <PaymentContainer>
          <TitlePaymentContainer>
            <CurrencyDollar size={18} />
            <div>
              <h1>Pagamento</h1>
              <p>O pagamento é feito na entrega.
                Escolha a forma que deseja pagar
              </p>
            </div>
          </TitlePaymentContainer>

          <InputsRadioContainer>
            <RadioInput typePayment="credit" description="Cartão de crédito" />
            <RadioInput typePayment="debit" description="Cartão de débito" />
            <RadioInput typePayment="money" description="Dinheiro" />
          </InputsRadioContainer>
        </PaymentContainer>
      </InputsContainer>

      <InfosCoffee>
        <h1>Cafés selecionados</h1>
        <InfoContent>

          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />
          <CardPreview />

          <Total>
            <div>
              <p>Total de itens</p><span>RS 29,70</span>
            </div>

            <div>
              <p>Entrega</p><span>RS 3,50</span>
            </div>

            <div>
              <p>Total de itens</p><span>RS 33,20</span>
            </div>
          </Total>

          <SendOrderButton type="button">Confirmar Pedido</SendOrderButton>
        </InfoContent>
      </InfosCoffee>
    </CartContainer>
  )
}
