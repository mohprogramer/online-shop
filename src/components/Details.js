import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContextProvider';


const Details = () => {

    const id = useParams()
    const products = useContext(ProductsContext)     
    const {image,price, title, description, category} = products[id.id - 1]

    return (
        <div>
            <img src={image} alt={title} />            
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category: </span>{category}</p>
                <div>
                    <span>{price}</span>
                    <Link to="/" >Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;