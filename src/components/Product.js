import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//Functions
import { shotern, isInCart, quantityCounter } from '../helpers/founctions';
//Context
import { CartContext } from '../context/CartContextProvider';
//Icons
import trash from '../assets/icons/trash.svg'
//Styles
import styles from './Product.module.css'

const Product = ({data}) => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container} >
            <img className={styles.cardImage} src={data.image} alt={data.title} />
            <h3>{shotern(data.title)}</h3>
            <p>${data.price}</p>
            <div className={styles.linkContainer} >
                <Link to={`/products/${data.id}`} >Details</Link>
                <div className={styles.buttonContainer} >
                    {
                        isInCart(state, data.id) ? 
                        <button className={styles.smallButton} onClick={() => {dispatch({type:"INCREASE",payload:data})}} >+</button>:
                        <button onClick={() => dispatch({type:"ADD_ITEM",payload:data})} >Add to cart</button>
                        
                    }
                    {
                        quantityCounter(state, data.id) > 0 && <span className={styles.counter}>{quantityCounter(state, data.id)}</span>
                    }
                    {
                        quantityCounter(state, data.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM",payload:data})} ><img src={trash} alt='trash' /></button>
                    }
                    {
                        quantityCounter(state, data.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE",payload:data})} >-</button>
                    }
                </div>
            </div>
        </div>

    );
};

export default Product;