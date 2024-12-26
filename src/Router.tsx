import { Route } from 'react-router'
import { Routes } from 'react-router'
import { DefaultLayout } from './layout/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
