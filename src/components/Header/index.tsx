import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { CardButton, HeaderContainer } from './styles'
import { defaultTheme } from '../../styles/theme/default'
import { NavLink } from 'react-router'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={18} weight="fill" color={defaultTheme.purple} />
          Monte Mor, SP
        </span>
        <NavLink to="/cart">
          <CardButton>
            <ShoppingCart weight="fill" size={18} />
            <span>3</span>
          </CardButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
