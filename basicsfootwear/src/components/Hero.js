import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Unleash Your Potential</h1>
      <p>Elevate your game with high-performance gear engineered for champions.</p>
      <Link to="/products" className="cta-button">Explore Gear</Link>
    </div>
  </section>
);

export default Hero;
