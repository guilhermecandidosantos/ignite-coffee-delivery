import { Address, ChangeInput, Coffee, Order } from './reducer'

export enum Actions {
  ADD_COFFEE_ON_CART = 'ADD_COFFEE_ON_CART',
  INCREMENT_COFFEE_ON_CART = 'INCREMENT_COFFEE_ON_CART',
  DECREMENT_COFFEE_ON_CART = 'DECREMENT_COFFEE_ON_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  SUBMIT_NEW_ORDER = 'SUBMIT_NEW_ORDER',
  ADD_ADDRESS = 'ADD_ADDRESS',
  CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT',
}

export function addCoffeeOnCart(coffee: Coffee) {
  return {
    type: Actions.ADD_COFFEE_ON_CART,
    payload: { coffee },
  }
}

export function incrementCoffeeOnCart(coffeeId: number, price: number) {
  return {
    type: Actions.INCREMENT_COFFEE_ON_CART,
    payload: { coffeeId, price },
  }
}

export function decrementCoffeeOnCart(coffeeId: number, price: number) {
  return {
    type: Actions.DECREMENT_COFFEE_ON_CART,
    payload: { coffeeId, price },
  }
}

export function removeCoffeeFromCart(coffeeId: number) {
  return {
    type: Actions.REMOVE_COFFEE_FROM_CART,
    payload: { coffeeId },
  }
}

export function submitNewOrder(order: Order) {
  return {
    type: Actions.SUBMIT_NEW_ORDER,
    payload: { order },
  }
}

export function addAddress(address: Address) {
  return {
    type: Actions.ADD_ADDRESS,
    payload: { address },
  }
}

export function changeValueInput(changeInput: ChangeInput) {
  return {
    type: Actions.CHANGE_VALUE_INPUT,
    payload: { changeInput },
  }
}
