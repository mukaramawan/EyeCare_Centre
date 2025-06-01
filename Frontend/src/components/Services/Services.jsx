import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faGlasses, faProcedures, faMicroscope, faClinicMedical, faFileMedical } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './services.css'

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Providing comprehensive eyecare services with advanced technology and compassionate care</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faEye} className='icons-white'/>
              </div>
              <a href="#" className="stretched-link">
                <h3>Comprehensive Eye Exams</h3>
              </a>
              <p>
                Our thorough eye exams are designed to detect and address any vision or eye health issues, ensuring your eyes stay healthy.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faGlasses} className='icons-white'/>
              </div>
              <a href="#" className="stretched-link">
                <h3>Prescription Eyewear</h3>
              </a>
              <p>
                We offer a wide range of prescription glasses and contact lenses to help you see clearly and comfortably.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faProcedures} className='icons-white'/>
              </div>
              <a href="#" className="stretched-link">
                <h3>Surgical Treatments</h3>
              </a>
              <p>
                We provide advanced surgical treatments for various eye conditions, ensuring you receive the best possible care.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faMicroscope} className='icons-white' />
              </div>
              <a href="#" className="stretched-link">
                <h3>Diagnostic Services</h3>
              </a>
              <p>
                Utilizing the latest technology, we provide precise diagnostic services to identify and manage eye health issues.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faClinicMedical}  className='icons-white'/>
              </div>
              <a href="#" className="stretched-link">
                <h3>Emergency Eye Care</h3>
              </a>
              <p>
                Our team is ready to handle any eye emergencies, providing immediate and effective care when you need it most.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon icon={faFileMedical} className='icons-white' />
              </div>
              <a href="#" className="stretched-link">
                <h3>Patient Education</h3>
              </a>
              <p>
                We believe in empowering our patients with knowledge, offering education on eye health and vision care practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
