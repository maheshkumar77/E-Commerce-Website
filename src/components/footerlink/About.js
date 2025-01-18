import React from 'react';
import './AboutPage.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About EcoShop</h1>
        <p>Your trusted destination for eco-friendly and sustainable products.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            EcoShop was founded with the vision of creating an eco-conscious marketplace that offers a wide range of sustainable and environmentally-friendly products. Our goal is to provide consumers with an easy and accessible way to purchase products that are good for the planet and promote sustainable living.
          </p>
          <p>
            We carefully curate our selection of products, ensuring that every item we offer is produced with minimal environmental impact. Whether it’s reusable household items, eco-friendly fashion, or sustainable food containers, we strive to help our customers make greener choices.
          </p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At EcoShop, our mission is simple: to make sustainable living easier for everyone. We aim to provide high-quality products that are durable, eco-friendly, and contribute to a cleaner planet. Our customers are at the heart of everything we do, and we are committed to offering a seamless shopping experience while promoting environmental responsibility.
          </p>
        </section>

        <section className="about-vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading online destination for sustainable products and inspire people to lead eco-conscious lifestyles. We are passionate about educating consumers about the importance of sustainability and the small changes they can make in their daily lives that add up to a big impact on the environment.
          </p>
        </section>

        <section className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-list">
            <div className="value-item1">
              <h3>Sustainability</h3>
              <p>We believe in offering products that are not only good for you but also kind to the planet.</p>
            </div>
            <div className="value-item2">
              <h3>Transparency</h3>
              <p>We are open about where our products come from and how they are made, ensuring ethical sourcing and production.</p>
            </div>
            <div className="value-item3">
              <h3>Community</h3>
              <p>We are passionate about building a community of eco-conscious individuals who believe in making a positive impact.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <p>
            Our team is a group of passionate individuals dedicated to making the world a greener place. From product curation to customer support, we are all united by our shared commitment to sustainability and ethical practices. We work tirelessly to ensure that EcoShop remains a trusted source for eco-friendly products.
          </p>
        </section>
      </div>

      
    </div>

  );
};

export default About;
