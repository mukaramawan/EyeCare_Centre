import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './gallery.css';

import galleryImage1 from '../../assets/img/gallery/gallery-1.jpg';
import galleryImage2 from '../../assets/img/gallery/gallery-2.jpg';
import galleryImage3 from '../../assets/img/gallery/gallery-3.jpg';
import galleryImage4 from '../../assets/img/gallery/gallery-4.jpg';
import galleryImage5 from '../../assets/img/gallery/gallery-5.jpg';
import galleryImage6 from '../../assets/img/gallery/gallery-6.jpg';
import galleryImage7 from '../../assets/img/gallery/gallery-7.jpg';
import galleryImage8 from '../../assets/img/gallery/gallery-8.jpg';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
    const lightbox = GLightbox({
      selector: '.glightbox',
    });
    return () => lightbox.destroy(); // Cleanup on unmount
  }, []);

  const galleryItems = [
    { src: galleryImage1, alt: 'Gallery Image 1' },
    { src: galleryImage2, alt: 'Gallery Image 2' },
    { src: galleryImage3, alt: 'Gallery Image 3' },
    { src: galleryImage4, alt: 'Gallery Image 4' },
    { src: galleryImage5, alt: 'Gallery Image 5' },
    { src: galleryImage6, alt: 'Gallery Image 6' },
    { src: galleryImage7, alt: 'Gallery Image 7' },
    { src: galleryImage8, alt: 'Gallery Image 8' },
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Eyecare Center Gallery</h2>
        <p>Take a look at our state-of-the-art facilities and see why we are the best choice for your eye care needs.</p>
      </div>
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {galleryItems.map((item, index) => (
            <div className="col-lg-3 col-md-4" key={index}>
              <div className="gallery-item">
                <a href={item.src} className="glightbox" data-gallery="images-gallery">
                  <img src={item.src} alt={item.alt} className="img-fluid images" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
