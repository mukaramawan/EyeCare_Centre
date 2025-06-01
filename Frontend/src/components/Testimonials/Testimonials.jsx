import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './testimonials.css';
import testimonial1 from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../../assets/img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const swiperConfig = {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    modules: [Autoplay, Pagination]
  };

  const testimonials = [
    {
      name: 'Saul Goodman',
      position: 'Patient',
      image: testimonial1,
      stars: 5,
      quote:
        'The staff at the eyecare center were incredibly helpful and attentive. They took the time to explain everything clearly and made me feel comfortable throughout my visit. Highly recommend their services.',
    },
    {
      name: 'Sara Wilsson',
      position: 'Patient',
      image: testimonial2,
      stars: 5,
      quote:
        'I had an amazing experience at the eyecare center. The optometrist was very knowledgeable and provided me with a thorough eye exam. My new glasses are perfect!',
    },
    {
      name: 'Jena Karlis',
      position: 'Patient',
      image: testimonial3,
      stars: 5,
      quote:
        'I was very impressed with the level of care I received at this eyecare center. The team was professional and friendly, and they helped me find the best solution for my vision needs.',
    },
    {
      name: 'Matt Brandon',
      position: 'Patient',
      image: testimonial4,
      stars: 5,
      quote:
        'Fantastic service and great selection of eyewear! The staff helped me choose a pair of glasses that not only improved my vision but also looked great. I will definitely be coming back.',
    },
    {
      name: 'John Larson',
      position: 'Patient',
      image: testimonial5,
      stars: 5,
      quote:
        'I had a great experience at this eyecare center. The doctors were very thorough and made sure all my questions were answered. I felt very well taken care of.',
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
            <h3>Testimonials</h3>
            <p>
              Hear from our satisfied patients about their experiences at our eyecare center. We are dedicated to providing top-notch eye care services and ensuring our patients' comfort and satisfaction.
            </p>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <Swiper {...swiperConfig}>
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <img
                        src={testimonial.image}
                        className="testimonial-img flex-shrink-0"
                        alt={testimonial.name}
                      />
                      <div>
                        <h3>{testimonial.name}</h3>
                        <h4>{testimonial.position}</h4>
                        <div className="stars">
                          {Array(testimonial.stars)
                            .fill()
                            .map((_, i) => (
                              <i className="bi bi-star-fill" key={i}></i>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{testimonial.quote}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
