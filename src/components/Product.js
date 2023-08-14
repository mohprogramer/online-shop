import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//Functions
import { shotern, isInCart, quantityCounter } from '../helpers/founctions';
//Context
import { CartContext } from '../context/CartContextProvider';
//Icons
import trash from '../assets/icons/trash.svg'


const Product = ({data}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div>
            <img src={data.image} alt={data.title} style={{width:"200px"}} />
            <h3>{shotern(data.title)}</h3>
            <p>${data.price}</p>
            <div>
                <Link to={`/products/${data.id}`} >Details</Link>
                <div>
                    {
                        isInCart(state, data.id) ? 
                        <button onClick={() => {dispatch({type:"INCREASE",payload:data})}} >+</button>:
                        <button onClick={() => dispatch({type:"ADD_ITEM",payload:data})} >Add to cart</button>
                        
                    }
                    {
                        quantityCounter(state, data.id) === 1 && <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:data})} ><img src={trash} alt='trash' style={{width:"10px"}} /></button>
                    }
                    {
                        quantityCounter(state, data.id) > 1 && <button onClick={() => dispatch({type:"DECREASE",payload:data})} >-</button>
                    }
                </div>
            </div>
        </div>

    );
};

export default Product;