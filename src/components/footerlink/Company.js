import React from 'react';
import './CompanyPage.css';

const Company = () => {
  return (
    <div className='main'>
      <div className="company-container">
        <div className="company-header">
          <h1>Welcome to EcoShop</h1>
          <p>Your one-stop online shop for eco-friendly products!</p>
        </div>
  
        <div className="company-content">
          <section className="company-description">
            <h2>About Us</h2>
            <p>
              At EcoShop, we believe in making the world a better place by providing
              high-quality, sustainable, and eco-friendly products. We are committed to
              reducing waste, promoting recycling, and helping you make informed, environmentally-conscious
              purchasing decisions.
            </p>
            <p>
              Our mission is to empower customers to make positive changes in their lives
              by offering eco-friendly alternatives to everyday products. From reusable bags
              to sustainable home goods, EcoShop has something for everyone looking to reduce their
              carbon footprint and live a greener lifestyle.
            </p>
          </section>
  
          <section className="company-values">
            <h2>Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <img src="/images/sustainability.png" alt="Sustainability" className="value-icon"/>
                <h3>Sustainability</h3>
                <p>We are dedicated to offering products that contribute to the sustainability of the planet.</p>
              </div>
              <div className="value-item">
                <img src="/images/quality.png" alt="Quality" className="value-icon"/>
                <h3>Quality</h3>
                <p>Our products are designed to last longer, ensuring that you make a lasting impact on the environment.</p>
              </div>
              <div className="value-item">
                <img src="/images/community.png" alt="Community" className="value-icon"/>
                <h3>Community</h3>
                <p>We believe in building a community of eco-conscious consumers who care about the planet.</p>
              </div>
            </div>
          </section>
  
          <section className="company-goals">
            <h2>Our Goals</h2>
            <ul>
              <li>To provide 100% eco-friendly products by 2025.</li>
              <li>To minimize packaging waste and promote reusable packaging.</li>
              <li>To collaborate with like-minded brands to further sustainability goals.</li>
              <li>To raise awareness about eco-friendly living through education and outreach.</li>
            </ul>
          </section>
        </div>
  
        </div>  
      </div>
  );
};

export default Company;
