import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
//Components
import Cart from './Cart';

//Context
import { CartContext } from '../context/CartContextProvider';

//Styles
import styles from './ShopCart.module.css'

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container} >
            <div className={styles.cartContainer} >
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div className={styles.payments} >
                    <p><span>Total items: </span>{state.totalCounter}</p>
                    <p><span>Total payment: </span>{state.totalPrice}</p>
                    <div className={styles.buttonContainer} >
                        <button className={styles.clear} onClick={() => dispatch({type:"CHECKOUT"})}>Checkout</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                    !state.checkout && state.itemCounter === 0 && <div className={styles.complete} >
                        <h3>Want to buy?</h3>
                        <Link to="/" >Back to shop</Link>
                    </div>
            }
            {
                state.checkout && <div className={styles.complete} >
                    <h3>Check out successfuly</h3>
                    <Link to='/' >Buy more</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;