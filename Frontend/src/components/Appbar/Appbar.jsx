import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './appbar.css'
export default function Appbar() {
  return (
    <>
    <div className="header ">
                <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:contact@example.com">eyecarecentre@gmail.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>+92 123456341</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      </div>

     {/* End Top Bar */}

        <div className='header sticky-top'> 
        <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <h3><b>EyeCare Centre</b></h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className='ms-4'>
              <a aria-current="page" href="#">Home</a>
            </li>
            <li className='ms-4'>
              <a href="#about">About</a>
            </li>
            <li className='ms-4'>
              <a href="#services">Services</a>
            </li>
            <li className='ms-4'>
              <a href="#departments">Departments</a>
            </li>
            <li className='ms-4'>
              <a href="#doctors">Doctors</a>
            </li>
            <li className='ms-4'>
              <a href="#faq">FAQs</a>
            </li>
            <li className='ms-4'>
              <a href="#contacts">Contact</a>
            </li>
            <li className="ms-4">
            <a className="cta-btn d-none d-sm-block" href="#appointment">Make an Appointment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>
    </>
    
  )
}
