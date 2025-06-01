import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='container-fluid home-bg hero section light-background'>
      <section className='home-section'>
        <div className="container position-relative">
          <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
            <h2>WELCOME TO EYECARE</h2>
            <p>Exceptional eye care with advanced technology and compassionate service</p>
          </div>
          {/* End Welcome */}

          <div className="content row gy-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
                <h3>Why Choose Eyecare?</h3>
                <p>
                  At Eyecare, we are dedicated to providing top-notch vision care and eye health services. Our team of experienced professionals uses state-of-the-art technology to ensure you receive the best care possible. From routine eye exams to specialized treatments, we cater to all your eye care needs with compassion and expertise.
                </p>
                <div className="text-center">
                  <a href="#about" className="more-btn">
                    <span>Learn More</span> <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* End Why Box */}

            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="d-flex flex-column justify-content-center">
                <div className="row gy-4">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                      <i className="bi bi-clipboard-data"></i>
                      <h4>Comprehensive Eye Exams</h4>
                      <p>Our comprehensive eye exams are designed to detect and address any vision or eye health issues you may have, ensuring your eyes stay healthy and your vision remains clear.</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                      <i className="bi bi-gem"></i>
                      <h4>Advanced Technology</h4>
                      <p>We utilize the latest technology and equipment to provide precise diagnoses and effective treatments, ensuring the best possible outcomes for our patients.</p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                      <i className="bi bi-inboxes"></i>
                      <h4>Personalized Care</h4>
                      <p>We understand that every patient is unique, and we tailor our services to meet your individual needs, providing personalized care that ensures your comfort and satisfaction.</p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </section>
    </div>
  );
}
