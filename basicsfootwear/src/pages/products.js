    import React, { useEffect, useState } from 'react';
    import './products.css'; // You can create this for styling or use Tailwind/CSS-in-JS

    const Products = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('http://44.217.243.121:5000/api/products') // Assumes your backend is serving from /api/products
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(err => console.error('Error fetching products:', err));
      }, []);

       return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-heading">Explore Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.imageURL}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-brand">Brand: {product.brand}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-stock">In Stock: {product.items_left}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    };

    export default Products;