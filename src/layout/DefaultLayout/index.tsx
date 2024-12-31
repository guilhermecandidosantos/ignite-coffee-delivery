import { Outlet } from 'react-router'
import { Header } from '../../components/Header'
import { LayoutContainer } from './style'
import { CartContextProvider } from '../../context/cart/CartContext'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </LayoutContainer>
  )
}
