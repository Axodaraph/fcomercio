export const cartInitialState = JSON.parse(globalThis.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REST_TO_CART: 'REST_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = state => {
  globalThis.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { _id } = action.payload
    const productInCartIndex = state.findIndex(item => item._id === _id)

    if (productInCartIndex >= 0) {
      // 👀 una forma sería usando structuredClone
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

      // 👶 usando el map
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }

      //   return item
      // })

      // ⚡ usando el spread operator y slice
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REST_TO_CART]: (state, action) => {
    const { _id } = action.payload
    const productInCartIndex = state.findIndex(item => item._id === _id)

    if (productInCartIndex >= 0) {
      const currentQuantity = state[productInCartIndex].quantity;
        
        if (currentQuantity > 1) {
            // Si la cantidad es mayor que 1, simplemente disminuimos la cantidad
            const newState = [
                ...state.slice(0, productInCartIndex),
                { ...state[productInCartIndex], quantity: currentQuantity - 1 },
                ...state.slice(productInCartIndex + 1)
            ];

            updateLocalStorage(newState);
            return newState;
        } else {
            // Si la cantidad es 1 o menor, eliminamos el producto del carrito
            const newState = [
                ...state.slice(0, productInCartIndex),
                ...state.slice(productInCartIndex + 1)
            ];

            updateLocalStorage(newState);
            return newState;
        }
    }
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { _id } = action.payload
    const newState = state.filter(item => item._id !== _id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}