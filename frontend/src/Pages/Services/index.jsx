import React from 'react';
import './style.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on all orders over $100',
    },
    {
      id: 2,
      icon: '↩️',
      title: 'Easy Returns',
      description: '30-day hassle-free return policy',
    },
    {
      id: 3,
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Safe and secure payment methods',
    },
    {
      id: 4,
      icon: '👟',
      title: 'Authenticity Guaranteed',
      description: '100% authentic products with verification',
    },
    {
      id: 5,
      icon: '💬',
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
    },
    {
      id: 6,
      icon: '🎁',
      title: 'Member Benefits',
      description: 'Exclusive deals and early access for members',
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-intro">
        We're committed to providing the best experience for sneaker enthusiasts
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;