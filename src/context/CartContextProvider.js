import React, {useReducer} from 'react';

export const CartContext = React.createContext(); 

const initialState = {
    selectedItem : [],
    itemCounter : 0,
    totalPrice: 0,
    checkout: false
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
            }
        case "REMOVE_ITEM":
         const newSeletedItem =   state.selectedItem.filter(item => item.id !== action.payload.id); 
         return{
            ...state,
            selectedItem: [...newSeletedItem]
         }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return {
                ...state
            } 
        case "DECREASE":
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;    
            return{
                ...state
            }
        case "CHECKOUT":
            return{
                selectedItem : [],
                itemCounter : 0,
                totalPrice: 0,
                checkout: true
            }    
        case "CLEAR":
            return initialState
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