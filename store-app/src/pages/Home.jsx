import React, {useEffect, useState} from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
    const [products,setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedcat, setselectedcat] = useState('all');
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
            }
            catch (error)
            {
                console.error('Error fetching products:', error);
            }
            };

        const fetchCategories = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products/categories');
                const data = await res.json();
                setCategories(data);
            }
            catch (error){
                console.error('error fetching categories',error);
            }
            };
      fetchProducts();
      fetchCategories();
    }, []);

    const filteredProducts = selectedcat === 'all' ? products : products.filter((product) => product.category === selectedcat);

return (
    <div className='home-container'>
        <h1 className='home-title'>🛒Welcome to Product Store </h1>
        <p className='home-subtitle'>Browse products by category or explore them all</p>
        <div className='category-filter-container'>
            <label htmlFor='category-select' className='category-label'>
                Filter by Category:
            </label>
            <select id='category-select' value={selectedcat} onChange={(e) => setselectedcat(e.target.value)} 
            className='category-select'>
                <option value='all'>All Categories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase()+cat.slice(1)}
                    </option>
               ))}
            </select>
        </div>
        <div className='product-grid'>
            {filteredProducts.length > 0 ? (filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))
        ):(<p className='no-products'>No products found in thsi category.</p>)}
        </div>
    </div>
);
};

export default Home;
