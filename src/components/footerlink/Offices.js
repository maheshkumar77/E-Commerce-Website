import React from 'react';
import './OfficePage.css';

const Offices = () => {
  return (
    <div className="office-container">
    <header className="office-header">
      <h1>Our Offices</h1>
      <p>Explore our locations around the world</p>
    </header>

    <section className="office-locations">
      <h2>Our Global Offices</h2>
      <div className="locations">
        <div className="location">
          <h3>New York, USA</h3>
          <p>Headquarters</p>
          <p>123 Green St, New York, NY 10001</p>
          <p>Contact: (212) 555-1234</p>
        </div>
        <div className="location">
          <h3>London, UK</h3>
          <p>Regional Office</p>
          <p>10 Eco Lane, London, EC2A 4BX</p>
          <p>Contact: +44 20 7946 0857</p>
        </div>
        <div className="location">
          <h3>Berlin, Germany</h3>
          <p>European Office</p>
          <p>5 Green Blvd, Berlin, 10115</p>
          <p>Contact: +49 30 123456</p>
        </div>
        <div className="location">
          <h3>Sydney, Australia</h3>
          <p>Asia-Pacific Office</p>
          <p>42 Eco Park Rd, Sydney, NSW 2000</p>
          <p>Contact: +61 2 9876 5432</p>
        </div>
      </div>
    </section>

    <section className="office-team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="team-member">
          <img src="https://i0.wp.com/icrtcst24.rvscollege.ac.in/wp-content/uploads/2015/04/speaker-3-v2.jpg?w=768&ssl=1" alt="John Doe" />
          <h3>John Doe</h3>
          <p>CEO</p>
          <p>John leads the company with a focus on sustainability and global impact.</p>
        </div>
        <div className="team-member">
          <img src="https://images.squarespace-cdn.com/content/v1/559d3f3ae4b0015f5414a0e0/364a5627-664d-4e93-83c9-fa8901beaa51/Untitled+design+%281%29.jpg?format=500w" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>COO</p>
          <p>Jane is responsible for managing day-to-day operations and team coordination.</p>
        </div>
        <div className="team-member">
          <img src="https://einaudi.cornell.edu/sites/default/files/styles/thumbnail_square/public/2020-05/drl5-david-lee-new.jpg?h=252f27fa&itok=ZIubU7rc" alt="David Lee" />
          <h3>David Lee</h3>
          <p>Head of Sustainability</p>
          <p>David works on driving sustainable practices and partnerships across the company.</p>
        </div>
      </div>
    </section>

    
  </div>

  );
};

export default Offices;
