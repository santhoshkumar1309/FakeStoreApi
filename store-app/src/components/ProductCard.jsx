import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p className='rating'>⭐ {product.rating?.rate} ({product.rating?.count})</p>
        </Link>
    );
};

export default ProductCard;
