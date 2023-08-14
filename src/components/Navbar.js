import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
//Icon
import basket from '../assets/icons/shop.svg'
//Context
import { CartContext } from '../context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to='/' >Products</Link>
                <div>
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