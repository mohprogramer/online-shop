import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContextProvider';
import Product from './Product';

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