import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './departments.css'; // Assuming you have a separate CSS file for styling
import depart1 from '../../assets/img/departments-1.jpg';
import depart2 from '../../assets/img/departments-2.jpg';
import depart3 from '../../assets/img/departments-3.jpg';
import depart4 from '../../assets/img/departments-4.jpg';
import depart5 from '../../assets/img/departments-5.jpg';
const Departments = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="departments" className="departments section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Departments</h2>
        <p>We provide a range of specialized services to meet your eyecare needs.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" href="#departments-tab-1">Comprehensive Eye Exams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-2">Pediatric Eye Care</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-3">Treatment of Eye Diseases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-4">Surgical Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#departments-tab-5">Vision Therapy</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="departments-tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Comprehensive Eye Exams</h3>
                    <p className="fst-italic">Our comprehensive eye exams include thorough testing and evaluations to ensure your eyes are healthy and your vision is optimal.</p>
                    <p>We utilize advanced technology to detect any early signs of eye diseases, ensuring timely treatment and management. Our exams are tailored to your specific needs and lifestyle.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={depart1} alt="Comprehensive Eye Exams" className="img-fluid image" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Pediatric Eye Care</h3>
                    <p className="fst-italic">Our pediatric eye care services ensure that your child's vision is developing correctly.</p>
                    <p>We provide specialized care for children, including vision screenings, eye exams, and treatment for common pediatric eye conditions. Our team is experienced in making your child's visit comfortable and stress-free.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={depart2} alt="Pediatric Eye Care" className="img-fluid image" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Treatment of Eye Diseases</h3>
                    <p className="fst-italic">We offer treatments for a wide range of eye diseases, including glaucoma, macular degeneration, and diabetic retinopathy.</p>
                    <p>Our specialists use the latest medical and surgical treatments to manage and treat eye diseases, helping to preserve your vision and maintain your quality of life.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={depart3} alt="Treatment of Eye Diseases" className="img-fluid image" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Surgical Services</h3>
                    <p className="fst-italic">Our surgical services include cataract surgery, LASIK, and other advanced procedures to correct vision problems.</p>
                    <p>We use state-of-the-art technology to perform precise and effective surgeries, ensuring the best possible outcomes for our patients. Our experienced surgeons are dedicated to providing the highest quality care.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={depart4} alt="Surgical Services" className="img-fluid image" />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Vision Therapy</h3>
                    <p className="fst-italic">Our vision therapy programs are designed to improve visual skills and treat conditions such as lazy eye and convergence insufficiency.</p>
                    <p>We create customized therapy plans to address your specific needs, using a combination of exercises and specialized equipment to enhance visual function and performance.</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src={depart5} alt="Vision Therapy" className="img-fluid image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
