import { produce } from 'immer'
import { Actions } from './actions'
import { TypePayment } from '../../pages/Cart/components/Radio'

export interface Coffee {
  id: number;
  price: number
  quantity: number;
}

export interface Order {
  id: string,
  street: string
  number: string
  complement: string | undefined
  neighborhood: string
  city: string
  state: string
  paymentMethod: TypePayment,
  coffees: Coffee[]
}

export interface Address {
  street: string
  neighborhood: string
  city: string
  state: string
  zip: string
}

export interface ChangeInput {
  coffeeId: number
  quantity: number
}

interface CartState {
  cart: Coffee[]
  totalPriceCoffees: number
  orders: Order[]
  address: Address
}

interface ActionsProps {
  type: Actions
  payload: {
    coffee?: Coffee
    coffeeId?: number
    price?: number
    order?: Order
    address?: Address
    changeInput?: ChangeInput
  }
}
export function cartReducer(state: CartState, action: ActionsProps) {
  switch (action.type) {
    case Actions.ADD_COFFEE_ON_CART: {
      const currentIndex = state.cart.findIndex(coffee => {
        return coffee.id === action.payload.coffee?.id
      })

      if (currentIndex < 0) {
        return produce(state, draft => {
          draft.cart.push(action.payload.coffee!)
          draft.totalPriceCoffees += action.payload.coffee!.price * action.payload.coffee!.quantity

          localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: draft.totalPriceCoffees,
              orders: state.orders,
              address: {
                street: state.address.street,
                neighborhood: state.address.neighborhood,
                city: state.address.city,
                state: state.address.state,
                zip: state.address.zip,
              },
            }),
          )
        })
      } else {
        return produce(state, draft => {
          for (const coffee of state.cart) {
            if (coffee.id === action.payload.coffee?.id) {
              draft.cart[currentIndex].quantity += action.payload.coffee!.quantity
              draft.cart[currentIndex].price = action.payload.coffee!.price
            }

            localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
              JSON.stringify({
                cart: draft.cart,
                totalPriceCoffees: state.totalPriceCoffees,
                orders: state.orders,
                address: {
                  street: state.address.street,
                  neighborhood: state.address.neighborhood,
                  city: state.address.city,
                  state: state.address.state,
                  zip: state.address.zip,
                },
              }),
            )
          }
        })
      }
    }
    case Actions.DECREMENT_COFFEE_ON_CART: {
      const currentIndex = state.cart.findIndex(coffee => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, draft => {
        draft.cart[currentIndex].quantity -= 1
        draft.totalPriceCoffees -= action.payload.price!

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
          JSON.stringify({
            cart: draft.cart,
            totalPriceCoffees: draft.totalPriceCoffees,
            orders: state.orders,
            address: {
              street: state.address.street,
              neighborhood: state.address.neighborhood,
              city: state.address.city,
              state: state.address.state,
              zip: state.address.zip,
            },
          }),
        )
      })
    }
    case Actions.INCREMENT_COFFEE_ON_CART: {
      const currentIndex = state.cart.findIndex(coffee => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, draft => {
        draft.cart[currentIndex].quantity += 1
        draft.totalPriceCoffees += action.payload.price!

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
          JSON.stringify({
            cart: draft.cart,
            totalPriceCoffees: draft.totalPriceCoffees,
            orders: state.orders,
            address: {
              street: state.address.street,
              neighborhood: state.address.neighborhood,
              city: state.address.city,
              state: state.address.state,
              zip: state.address.zip,
            },
          }),
        )
      })
    }
    case Actions.REMOVE_COFFEE_FROM_CART: {
      const currentIndex = state.cart.findIndex(coffee => {
        return coffee.id === action.payload.coffeeId
      })

      return produce(state, draft => {
        draft.totalPriceCoffees -=
          state.cart[currentIndex].price * state.cart[currentIndex].quantity
        draft.cart.splice(currentIndex, 1)

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
          JSON.stringify({
            cart: draft.cart,
            totalPriceCoffees: draft.totalPriceCoffees,
            orders: state.orders,
            address: {
              street: state.address.street,
              neighborhood: state.address.neighborhood,
              city: state.address.city,
              state: state.address.state,
              zip: state.address.zip,
            },
          }),
        )
      })
    }
    case Actions.SUBMIT_NEW_ORDER: {
      return produce(state, draft => {
        if (action.payload.order) {
          draft.orders.push(action.payload.order)
          draft.cart = []
          draft.totalPriceCoffees = 0

          localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: [],
              totalPriceCoffees: [],
              orders: draft.orders,
              address: {
                street: state.address.street,
                neighborhood: state.address.neighborhood,
                city: state.address.city,
                state: state.address.state,
                zip: state.address.zip,
              },
            }),
          )
        }
      })
    }
    case Actions.ADD_ADDRESS: {
      return produce(state, draft => {
        Object.assign(draft.address, action.payload.address)

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
          JSON.stringify({
            cart: state.cart,
            totalPriceCoffees: state.totalPriceCoffees,
            orders: state.orders,
            address: {
              street: action.payload.address?.street,
              neighborhood: action.payload.address?.neighborhood,
              city: action.payload.address?.city,
              state: action.payload.address?.state,
              zip: action.payload.address?.zip,
            },
          }),
        )
      })
    }
    case Actions.CHANGE_VALUE_INPUT: {
      return produce(state, draft => {
        const coffeeIndex = draft.cart.findIndex(coffee => {
          return coffee.id === action.payload.changeInput?.coffeeId
        })

        if (draft.cart[coffeeIndex]) {
          draft.cart[coffeeIndex].quantity = Number(action.payload.changeInput?.quantity)
          const newTotalPrice = (draft.totalPriceCoffees -
             (state.cart[coffeeIndex].quantity * state.cart[coffeeIndex].price)) +
              (Number(action.payload.changeInput?.quantity) * state.cart[coffeeIndex].price)

          draft.totalPriceCoffees = newTotalPrice

          localStorage.setItem('@coffee-delivery:cart-state-1.0.0',
            JSON.stringify({
              cart: draft.cart,
              totalPriceCoffees: state.totalPriceCoffees,
              orders: state.orders,
              address: {
                street: state.address.street,
                neighborhood: state.address.neighborhood,
                city: state.address.city,
                state: state.address.state,
                zip: state.address.zip,
              },
            }),
          )
        }
      })
    }
    default:
      return state
  }
}
