import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-container max-w-4xl mx-auto p-4 sm:p-8">
      <div className="about-header text-center mb-8">
        <h1 className="text-3xl font-bold">About SneakPeak</h1>
        <p className="subtitle mt-2 text-lg sm:text-xl">Your Premium Destination for Authentic Sneakers</p>
      </div>

      <div className="about-content space-y-8">
        <section className="our-story">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p className="text-justify">
            Founded in 2025, SneakerSpot was born from a passion for sneaker culture
            and a desire to provide authentic, high-quality footwear to enthusiasts
            worldwide. What started as a small local shop has grown into a trusted
            online destination for sneaker lovers.
          </p>
        </section>

        <section className="our-mission">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-justify">
          Sneak Peak is set to redefine the luxury resale market by providing a seamless,
          AI-powered platform for authenticated refurbished sneakers, apparel, and accessories.
          By ensuring trust through blockchain tracking and advanced verification, the platform
          promotes both exclusivity and sustainability.<br /><br />

          Moving forward, Sneak Peak aims to expand globally, collaborate with luxury brands,
          and integrate cutting-edge technologies like RFID and NFC authentication. Future
          plans include physical experience centers, AI-driven personalization, and eco-friendly
          refurbishing techniques, ensuring a sustainable yet premium shopping experience for
          luxury enthusiasts worldwide. 
<br /><br />

            We're committed to delivering authentic sneakers, exceptional customer
            service, and creating a community where sneaker enthusiasts can find
            their perfect pair. Every product in our collection is carefully
            verified for authenticity and quality.
          </p>
        </section>

        <section className="why-choose-us">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
          <div className="features-grid space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
            <div className="feature">
              <h3 className="text-xl font-semibold mb-1">100% Authentic</h3>
              <p className="text-justify">All our sneakers are guaranteed authentic and sourced directly from authorized retailers.</p>
            </div>
            <div className="feature">
              <h3 className="text-xl font-semibold mb-1">Wide Selection</h3>
              <p className="text-justify">From classic styles to the latest releases, we carry all your favorite brands and models.</p>
            </div>
            <div className="feature">
              <h3 className="text-xl font-semibold mb-1">Fast Shipping</h3>
              <p className="text-justify">Quick and secure shipping worldwide with real-time tracking available.</p>
            </div>
            <div className="feature">
              <h3 className="text-xl font-semibold mb-1">Expert Support</h3>
              <p className="text-justify">Our knowledgeable team is here to help you find the perfect pair for your needs.</p>
            </div>
          </div>
        </section>

        <section className="our-team">
          <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
          <p className="text-justify">
            Our dedicated team of sneaker experts, technologists, and customer service
            professionals work tirelessly to deliver the best experience possible.
          </p>
        </section>

        <section className="our-values">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Authenticity: We guarantee genuine products.</li>
            <li>Sustainability: We promote eco-friendly practices.</li>
            <li>Customer Focus: We prioritize your satisfaction.</li>
            <li>Innovation: We leverage technology for excellence.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;