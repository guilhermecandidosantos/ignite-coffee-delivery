import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/theme/default'

export function Header() {
  const theme = defaultTheme
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <span>
          <MapPin size={24} color={theme['purple']} weight="fill" />
          Monte Mor, SP
        </span>
        <button>
          <ShoppingCart size={24} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
