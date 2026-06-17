export const initialState = {
    cartItems: []
}

/*action: {
    type: "ADD_TO_CART", "REMOVE_TO_CART"
    payload: product
}*/

export const cartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART": {
            const {id} = action.payload

            //Validar si el item ya existe en el carrito, devuelve true o false
            const existingItem = state.cartItems.find((item) => item.id === id)
            
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        }
        case "REMOVE_FROM_CART" : {
            const {id} = action.payload

            //Validar si el item ya existe en el carrito, devuelve true o false
            const existingItem = state.catItems.find((item) => item.id === id)

            if (existingItem?.quantity === 1) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((item) => item.id !== id)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? {...existingItem, quantity: existingItem.quantity - 1} : item)
                }
            }
        }
        default: 
            return state;
    }
}