import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContextProvider';

//Styles
import styles from './Details.module.css'

const Details = () => {

    const id = useParams()
    const products = useContext(ProductsContext)     
    const {image,price, title, description, category} = products[id.id - 1]

    return (
        <div className={styles.container} >
            <img className={styles.image} src={image} alt={title} />            
            <div className={styles.textContainer} >
                <h3>{title}</h3>
                <p className={styles.description} >{description}</p>
                <p className={styles.category} ><span>Category: </span>{category}</p>
                <div className={styles.buttonContainer} >
                    <span className={styles.price} >{price}</span>
                    <Link to="/" >Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;