import { createContext, ReactNode, useReducer } from 'react'
import { Address, cartReducer, ChangeInput, Coffee, Order } from '../../reducer/cart/reducer'
import {
  addAddress,
  addCoffeeOnCart,
  changeValueInput,
  decrementCoffeeOnCart,
  incrementCoffeeOnCart,
  removeCoffeeFromCart,
  submitNewOrder,
} from '../../reducer/cart/actions'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[]
  orders: Order[]
  address: Address
  totalPriceCoffees: number
  addNewCoffeeOnCart: (coffee: Coffee) => void
  decrementCoffeeById: (coffeeId: number, price: number) => void
  incrementCoffeeById: (coffeeId: number, price: number) => void
  removeCoffeeById: (coffeeId: number) => void
  submitOrder: (order: Order) => void
  registerAddress: (address: Address) => void
  changeValue: (changeInput: ChangeInput) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
      totalPriceCoffees: 0,
      address: {
        street: '',
        neighborhood: '',
        city: '',
        state: '',
        zip: '',
      },
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      localStorage.setItem(
        '@coffee-delivery:cart-state-1.0.0',
        JSON.stringify({
          cart: [],
          totalPriceCoffees: 0,
          orders: [],
          address: {
            street: '',
            neighborhood: '',
            city: '',
            state: '',
            zip: '',
          },
        }),
      )
      return initialState
    },
  )

  const { cart, totalPriceCoffees, orders, address } = cartState

  function addNewCoffeeOnCart(coffee: Coffee) {
    dispatch(addCoffeeOnCart(coffee))
  }

  function decrementCoffeeById(coffeeId: number, price: number) {
    dispatch(decrementCoffeeOnCart(coffeeId, price))
  }

  function incrementCoffeeById(coffeeId: number, price: number) {
    dispatch(incrementCoffeeOnCart(coffeeId, price))
  }

  function removeCoffeeById(coffeeId: number) {
    dispatch(removeCoffeeFromCart(coffeeId))
  }

  function submitOrder(order: Order) {
    dispatch(submitNewOrder(order))
  }

  function registerAddress(address: Address) {
    dispatch(addAddress(address))
  }

  function changeValue(changeInput: ChangeInput) {
    dispatch(changeValueInput(changeInput))
  }

  return (
    <CartContext.Provider value={{
      cart,
      orders,
      address,
      totalPriceCoffees,
      addNewCoffeeOnCart,
      decrementCoffeeById,
      incrementCoffeeById,
      removeCoffeeById,
      submitOrder,
      registerAddress,
      changeValue,
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
