import { CurrencyDollar, MapPinLine, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressPayment,
  CartContainer,
  CityContainer,
  CoffeePreview,
  EmptyContainer,
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
import { FormEvent, useContext } from 'react'
import { Radio } from './components/Radio'
import { CartContext } from '../../context/cart/CartContext'
import { CoffeePreviewCart } from './components/CoffeePreviewCart'
import { z } from 'zod'
import { TypePayment } from './components/Radio'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Order } from '../../reducer/cart/reducer'
import { useNavigate } from 'react-router'

const schema = z.object({
  zipCode: z.string().min(9).max(9),
  street: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
  paymentMethod: z.enum([TypePayment.credit, TypePayment.debit, TypePayment.money]),
})

type FormData = z.infer<typeof schema>

export function Cart() {
  const { cart, totalPriceCoffees, submitOrder, address, registerAddress } = useContext(CartContext)
  const navigate = useNavigate()
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const { register, handleSubmit, watch } = methods

  const delivery = 3.5

  const handleInput = async (e: FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget
    let inputValue = input.value.replace(/\D/g, '')
    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5) + '-' + inputValue.slice(5, 8)
    }
    const cursorPosition = Number(input.selectionStart) + 1
    input.value = inputValue
    if (cursorPosition !== null) {
      input.setSelectionRange(cursorPosition, cursorPosition)
    }
    if (inputValue.length === 9) {
      const zip = inputValue.slice(0, 5) + inputValue.slice(6, 9)
      await fetch(`https://viacep.com.br/ws/${zip}/json/`, {
        method: 'GET',
      }).then((response) => {
        response.json().then((data) => {
          if (data.erro) {
            const addressData = Object.assign({
              street: '',
              neighborhood: '',
              city: '',
              state: '',
              zip,
            })
            registerAddress(addressData)
          } else {
            const addressData = Object.assign({
              street: data.logradouro,
              neighborhood: data.bairro,
              city: data.localidade,
              state: data.uf,
              zip,
            })
            registerAddress(addressData)
          }
        })
      }).catch(err => {
        alert(err)
      })
    }
  }

  function handleSubmitOrder(data: FormData) {
    const id = String(new Date().getTime())
    const order: Order = {
      id,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod,
      coffees: cart,
    }
    submitOrder(order)

    const addressData = Object.assign({
      street: data.street,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      zip: data.zipCode,
    })

    registerAddress(addressData)

    navigate(`/${id}/success`, { replace: true })
  }
  const complementIsEmpty = !watch('complement')

  if (cart.length > 0) {
    return (
      <CartContainer onSubmit={handleSubmit(handleSubmitOrder)}>

        <FormProvider {...methods}>
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
                  onInput={async (e) => handleInput(e)}
                  {...register('zipCode')}
                  defaultValue={address.zip.slice(0, 5) + '-' + address.zip.slice(5, 8)}
                />
                <InputBase
                  type="text"
                  placeholder="Rua" {...register('street')}
                  defaultValue={address.street}
                />
                <NumberComplement>
                  <InputBase type="text" placeholder="Número" {...register('number')} />
                  <div>
                    <InputBase type="text" placeholder="Complemento" {...register('complement')} />
                    {complementIsEmpty && <span>Opcional</span>}

                  </div>
                </NumberComplement>
                <CityContainer>
                  <InputBase
                    type="text"
                    placeholder="Bairro" {...register('neighborhood')}
                    defaultValue={address.neighborhood}
                  />
                  <InputBase
                    type="text"
                    placeholder="Cidade" {...register('city')}
                    defaultValue={address.city}
                  />
                  <InputBase
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    {...register('state')}
                    defaultValue={address.state}
                  />
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
                <Radio typePayment={TypePayment.credit} {...register('paymentMethod')} />
                <Radio typePayment={TypePayment.debit} {...register('paymentMethod')} />
                <Radio typePayment={TypePayment.money} {...register('paymentMethod')} />
              </RadioContainer>
            </PaymentContainer>
          </AddressPayment>
        </FormProvider>
        <CoffeePreview>
          <h1>Cafés selecionados</h1>

          <PreviewContainer>
            {cart.map((coffee) => {
              return (
                <CoffeePreviewCart
                  key={coffee.id}
                  coffee={coffee}
                />
              )
            })}

            <PriceContainer>
              <Price>
                <p>Total de itens</p>
                <span>R$ {totalPriceCoffees.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                </span>
              </Price>

              <Price>
                <p>Entrega</p>
                <span>R$ {delivery.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                </span>
              </Price>

              <Price>
                <p>Total</p>
                <span>R$ {(totalPriceCoffees + delivery)
                  .toLocaleString('pt-BR',
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </Price>
            </PriceContainer>

            <SubmitOrder type="submit">confirmar pedido</SubmitOrder>
          </PreviewContainer>
        </CoffeePreview>

      </CartContainer>
    )
  } else {
    return (
      <EmptyContainer>
        <h1>Carrinho vazio</h1>
        <ShoppingCartSimple size={80} />
      </EmptyContainer>
    )
  }
}
