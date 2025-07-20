    import React, { useEffect, useState } from 'react';
    import './products.css'; // You can create this for styling or use Tailwind/CSS-in-JS

    const Products = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('http://54.147.55.16/api/products') // Assumes your backend is serving from /api/products
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(err => console.error('Error fetching products:', err));
      }, []);

      return (
        <div className="products-container">
          <h2 className="products-heading">All Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.imageURL} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>Brand: {product.brand}</p>
                <p>Price: ${product.price}</p>
                <p>In Stock: {product.items_left}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default Products;