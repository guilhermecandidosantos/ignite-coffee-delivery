import { Route } from 'react-router'
import { Routes } from 'react-router'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path=":id/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
