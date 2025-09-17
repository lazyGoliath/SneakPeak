import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="contact-container max-w-3xl mx-auto p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-6 text-center">Get in touch with us! Fill out the form below and we'll get back to you as soon as possible.</p>
      {submitted && <p className="success-message mb-4 text-green-600 font-semibold text-center">Thank you for contacting us! We will get back to you soon.</p>}
      <form className="contact-form space-y-6" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name" className="block mb-1 font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <span className="error-message text-red-600 text-sm">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block mb-1 font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <span className="error-message text-red-600 text-sm">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block mb-1 font-semibold">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          {errors.message && <span className="error-message text-red-600 text-sm">{errors.message}</span>}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">Send</button>
      </form>
    </div>
  );
};

export default Contact;