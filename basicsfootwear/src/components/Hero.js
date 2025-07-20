import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <h1>Welcome to ActiveGear Pro</h1>
    <p>Your ultimate destination for premium sportswear and high-performance athletic equipment</p>
    <Link to="/products" className="cta-button">Shop Now</Link>
  </section>
);

export default Hero;
