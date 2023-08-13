import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { shotern, isInCart } from '../helpers/founctions';
import { CartContext } from '../context/CartContextProvider';


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
                        
                    }
                </div>
            </div>
        </div>

    );
};

export default Product;