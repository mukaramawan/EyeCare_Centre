import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">EyeCare Centre</span>
            </a>
            <div className="footer-contact pt-3">
              <p>123 Main Street</p>
              <p>Cityville, State, Zip Code</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 123 456 7890</span></p>
              <p><strong>Email:</strong> <span>info@eyecarecentre.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">Eye Exams</a></li>
              <li><a href="#">Glasses Fitting</a></li>
              <li><a href="#">Contact Lenses</a></li>
              <li><a href="#">LASIK Consultation</a></li>
              <li><a href="#">Emergency Eye Care</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Patient Education</a></li>
              <li><a href="#">Insurance Information</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Appointment Booking</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">EyeCare Centre</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you've purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
