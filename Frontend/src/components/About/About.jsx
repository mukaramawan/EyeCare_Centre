import React from 'react';
import './about.css';
import image from '../../assets/img/about.jpg';
import icon1 from '../../assets/img/icons/icon1.png';
import icon2 from '../../assets/img/icons/icon2.png';
import icon3 from '../../assets/img/icons/icon3.png';
import Stats from '../Stats/Stats.jsx';

export default function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up">
              <img src={image} className="img-fluid" alt="About our eyecare centre" />
            </div>
            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
              <h3>About Us</h3>
              <p>
                Welcome to our Eyecare Centre, where your vision and eye health are our top priority. Our experienced team of professionals is dedicated to providing comprehensive eye care services using the latest technology and techniques.
              </p>
              <ul>
                <li>
                  <img src={icon1} className='icon' alt="Comprehensive Eye Exams" />
                  <div>
                    <h5>Comprehensive Eye Exams</h5>
                    <p>We offer thorough eye examinations to ensure your vision is at its best and detect any eye conditions early.</p>
                  </div>
                </li>
                <li>
                  <img src={icon2} className='icon' alt="Advanced Treatment Options" />
                  <div>
                    <h5>Advanced Treatment Options</h5>
                    <p>Our clinic is equipped with the latest technology to provide advanced treatments for a variety of eye conditions.</p>
                  </div>
                </li>
                <li>
                  <img src={icon3} className='icon' alt="Personalized Eye Care" />
                  <div>
                    <h5>Personalized Eye Care</h5>
                    <p>We believe in personalized care and tailor our services to meet the unique needs of each patient.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Stats/>
    </>
  );
}
