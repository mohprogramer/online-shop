import React, { useContext } from 'react';
//Components
import Product from './Product';
//Context
import { ProductsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div style={{display:"flex", flexWrap:"wrap"}}>
                {
                    products.map(item => <Product key={item.id} data={item} />)
                }            
        </div>
    );
};

export default Store;