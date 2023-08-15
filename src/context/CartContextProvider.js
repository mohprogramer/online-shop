import React, {useReducer} from 'react';

export const CartContext = React.createContext(); 

const initialState = {
    selectedItem : [],
    itemCounter : 0,
    totalPrice: 0,
    checkout: false
}

const sumItems = selectedItem => {
    const itemCounter = selectedItem.reduce((total, product) => total + product.quantity, 0) 
    const totalPrice = selectedItem.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2)
    return {
        itemCounter,
        totalPrice
    }
}

const cartReducer = (state, action) => {
    console.log(state)
    switch(action.type) {
        case "ADD_ITEM":
            state.selectedItem.push({
                ...action.payload,
                quantity: 1,
            })
            return {
                ...state,
                ...sumItems(state.selectedItem),
                checkout:false
            }
        case "REMOVE_ITEM":
         const newSeletedItem = state.selectedItem.filter(item => item.id !== action.payload.id); 
         return{
            ...state,
            selectedItem: [...newSeletedItem],
            ...sumItems(newSeletedItem)

         }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItem)

            } 
        case "DECREASE":
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;    
            return{
                ...state,
                ...sumItems(state.selectedItem)

            }
        case "CHECKOUT":
            return{
                selectedItem : [],
                itemCounter : 0,
                totalPrice: 0,
                checkout: true
            }    
        case "CLEAR":
            return{
                selectedItem : [],
                itemCounter : 0,
                totalPrice: 0,
                checkout: false
            }
        default:
            return state        
    }
}

const CartContextProvider = (props) => {

    const [state, dispatch] = useReducer(cartReducer,initialState)

    return (
           <CartContext.Provider value={{state,dispatch}} >
                {props.children}
           </CartContext.Provider> 
    );
};

export default CartContextProvider;