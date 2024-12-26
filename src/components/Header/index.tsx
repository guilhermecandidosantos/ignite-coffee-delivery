import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { defaultTheme } from '../../styles/theme/default'
export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <span>
          <MapPin size={18} weight="fill" color={defaultTheme.purple} />
          Monte Mor, SP
        </span>
        <button>
          <ShoppingCart weight="fill" size={18} />
          <span>3</span>
        </button>
      </div>
    </HeaderContainer>
  )
}
