import React, { useContext } from 'react';
//Components
import Product from './Product';
//Context
import { ProductsContext } from '../context/ProductsContextProvider';
//Styles
import styles from "./Store.module.css"


const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className={styles.container} >
                {
                    products.map(item => <Product key={item.id} data={item} />)
                }            
        </div>
    );
};

export default Store;