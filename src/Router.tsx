import { Route } from 'react-router'
import { Routes } from 'react-router'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
