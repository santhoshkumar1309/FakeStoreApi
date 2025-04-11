import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(null);
  
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        .catch(e=>console.error('Error fetching product',e));
    },[id]);
    if(!product){
        return <div className='loading'>Loading product..</div>;
    }
  
  return (
    <div className='details-container'>
      <Link to='/' className='back-button'>← Back</Link>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className='price'>${product.price}</p>
      <p className="rating">Rating: ⭐ {product.rating?.rate} ({product.rating?.count} reviews)</p>
      <p className='description'>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
