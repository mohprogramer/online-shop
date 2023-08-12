import React from 'react';
import { Link } from 'react-router-dom';
import { shotern } from '../helpers/founctions';

const Product = ({data}) => {
    return (
        <div>
            <img src={data.image} alt={data.title} style={{width:"200px"}} />
            <h3>{shotern(data.title)}</h3>
            <p>${data.price}</p>
            <div>
                <Link to={`/products/${data.id}`} >Details</Link>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default Product;