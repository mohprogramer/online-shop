import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//Icon
import basket from '../assets/icons/shop.svg'
//Context
import { CartContext } from '../context/CartContextProvider';
//Styles
import styles from './Navbar.module.css'

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer} >
            <div className={styles.container} >
                <Link className={styles.productLink} to='/' >Products</Link>
                <div className={styles.iconContainer} >
                    <Link to='/cart' >
                        <img src={basket} alt='basket' />
                    </Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;