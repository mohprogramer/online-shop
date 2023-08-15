import React, {useContext} from 'react';

//Founction
import { shotern } from '../helpers/founctions';
//Context
import { CartContext } from '../context/CartContextProvider';
//Icons
import trash from '../assets/icons/trash.svg'
//Styles
import styles from './Cart.module.css'


const Cart = ({data}) => {

    const {image,title, price, quantity } = data;
    const {dispatch} = useContext(CartContext);

    return (
        <div className={styles.container} >
            <img src={image} alt={title} className={styles.productImage} />
            <div className={styles.data} >
                <h3>{shotern(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <span className={styles.quantity} >{quantity}</span>
            </div>
            <div className={styles.buttonContainer} >

                <button onClick={() => dispatch({type:"INCREASE",payload:data})} >+</button>
                {
                    quantity > 1 ? <button onClick={() => dispatch({type:"DECREASE",payload:data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM",payload:data})}><img src={trash} alt='trash' /></button>
                }
            </div>
        </div>
    );
};

export default Cart;