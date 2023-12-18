import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="intro">
        <h3 className="sub-intro">The Exclusive Beauty Pageant</h3>
        <h1 className="main-intro">
          Unveiling Elegance: The Luxury Beauty Pageant Experience
        </h1>
      </div>
      <div className="img-container">
        <img src="/hero.jpg" alt="" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
