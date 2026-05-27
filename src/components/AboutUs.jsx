import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, your one-stop destination for beautiful, healthy houseplants.
          We are passionate about bringing the beauty of nature into your home and workplace.
        </p>
        <p>
          Founded in 2024, Paradise Nursery has been dedicated to providing high-quality plants
          that not only beautify your space but also improve air quality and promote well-being.
          Our team of expert horticulturists carefully selects and nurtures each plant to ensure
          you receive only the best.
        </p>
        <p>
          At Paradise Nursery, we believe that everyone deserves to have a little piece of paradise
          in their lives. Whether you are a seasoned plant enthusiast or just starting your green
          journey, we have the perfect plant for you.
        </p>
        <div className="about-us-values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We source only the healthiest, most vibrant plants.</li>
            <li><strong>Sustainability:</strong> We are committed to eco-friendly practices.</li>
            <li><strong>Community:</strong> We love helping people connect with nature.</li>
            <li><strong>Education:</strong> We provide care tips and guidance for every plant.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;