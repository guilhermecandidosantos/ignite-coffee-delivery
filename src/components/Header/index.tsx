import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { defaultTheme } from '../../styles/theme/default'
import { NavLink } from 'react-router-dom'

export function Header() {
  const theme = defaultTheme
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <span>
          <MapPin size={24} color={theme['purple']} weight="fill" />
          Monte Mor, SP
        </span>
        <NavLink to="/cart">
          <button>
            <span>1</span>
            <ShoppingCart size={24} weight="fill" />
          </button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
