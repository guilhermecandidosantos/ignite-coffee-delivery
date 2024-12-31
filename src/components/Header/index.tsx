import { MapPin, ShoppingCart, X } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { CardButton, HeaderContainer, Loader, ModalContainer, ModalContent, Zip } from './styles'
import { defaultTheme } from '../../styles/theme/default'
import { NavLink } from 'react-router'
import { FormEvent, useContext, useState } from 'react'
import { CartContext } from '../../context/cart/CartContext'
import { createPortal } from 'react-dom'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const zipSchema = z.object({
  zip: z.string().min(9).max(9),
})

type ZipData = z.infer<typeof zipSchema>

export function Header() {
  const { cart, address, registerAddress } = useContext(CartContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit } = useForm<ZipData>({
    resolver: zodResolver(zipSchema),
  })

  function openAndCloseModal() {
    setModalOpen(!modalOpen)
  }

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
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
  }

  async function getLocationByZip(data: ZipData) {
    setLoading(true)

    const zip = data.zip.replace('-', '')

    await fetch(`https://viacep.com.br/ws/${zip}/json/`, {
      method: 'GET',
    }).then((response) => {
      response.json().then((data) => {
        if (data.erro) {
          alert('CEP inválido')

          setLoading(false)
        } else {
          const addressData = Object.assign({
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
            zip,
          })
          registerAddress(addressData)
          setLoading(false)
          setModalOpen(false)
        }
      })
    }).catch(err => {
      alert(err)
    })
  }

  return (
    <HeaderContainer>

      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <button type="button" onClick={openAndCloseModal}>
          <MapPin size={18} weight="fill" color={defaultTheme.purple} />
          {address.city.length > 0
            ? address.city
            : <span>Inserir CEP</span>}
        </button>
        <NavLink to={cart.length > 0
          ? '/cart'
          : '/'}
        >
          <CardButton data-state={cart.length > 0}>
            <ShoppingCart weight="fill" size={18} />
            {cart.length > 0 && (<span>{cart.length}</span>)}
          </CardButton>
        </NavLink>
      </div>
      {modalOpen && createPortal(
        <ModalContainer>
          <ModalContent>
            <X size={20} onClick={openAndCloseModal} />
            <Zip onSubmit={handleSubmit(async (data) => await getLocationByZip(data))}>
              <label htmlFor="zip">Informe o seu CEP</label>
              <div>
                <input type="text" id="zip" onInput={handleInput} {...register('zip')} />
                <button>
                  {loading
                    ? <Loader />
                    : <span>OK</span>}
                </button>

              </div>
            </Zip>
          </ModalContent>
        </ModalContainer>,
        document.body,
      )}
    </HeaderContainer>
  )
}
