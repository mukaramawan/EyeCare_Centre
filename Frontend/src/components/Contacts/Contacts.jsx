import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contacts.css';

const Contacts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    // For demonstration purposes, you can log the form data
    const formData = new FormData(event.target);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });
    // Reset the form after submission (if needed)
    event.target.reset();
  };

  return (
    <section id="contacts" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact Us</h2>
        <p>Get in touch with our eyecare center for inquiries or appointments.</p>
      </div>
      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: '100%', height: '270px' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>123 Main Street, Cityville, State, Zip Code</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 123 456 7890</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@eyecarecenter.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-md-12">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="col-md-12">
                  <textarea name="message" className="form-control" rows="6" placeholder="Message" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div> */}
                  <div className="error-message"></div>
                  {/* <div className="sent-message">Your message has been sent. Thank you!</div> */}
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
