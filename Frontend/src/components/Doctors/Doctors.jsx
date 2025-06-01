import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import doctor1 from '../../assets/img/doctors/doctors-1.jpg';
import doctor2 from '../../assets/img/doctors/doctors-2.jpg';
import doctor3 from '../../assets/img/doctors/doctors-3.jpg';
import doctor4 from '../../assets/img/doctors/doctors-4.jpg';
import './doctors.css';

const Doctors = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const doctors = [
    {
      name: 'Dr. Walter White',
      role: 'Chief Ophthalmologist',
      description: 'Specializes in cataract and refractive surgery, committed to restoring vision.',
      image: doctor1,
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Sarah Jhonson',
      role: 'Pediatric Ophthalmologist',
      description: 'Expert in children’s eye disorders, ensuring the best care for young patients.',
      image: doctor2,
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. William Anderson',
      role: 'Retina Specialist',
      description: 'Focused on diseases of the retina, providing advanced treatments for retinal conditions.',
      image: doctor3,
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Dr. Amanda Jepson',
      role: 'Glaucoma Specialist',
      description: 'Dedicated to the diagnosis and management of glaucoma, preserving patient vision.',
      image: doctor4,
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Doctors</h2>
        <p>Meet our team of dedicated eye care professionals</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          {doctors.map((doctor, index) => (
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img src={doctor.image} className="img-fluid" alt={doctor.name} />
                </div>
                <div className="member-info">
                  <h4>{doctor.name}</h4>
                  <span>{doctor.role}</span>
                  <p>{doctor.description}</p>
                  <div className="social">
                    <a href={doctor.social.twitter}><i className="bi bi-twitter"></i></a>
                    <a href={doctor.social.facebook}><i className="bi bi-facebook"></i></a>
                    <a href={doctor.social.instagram}><i className="bi bi-instagram"></i></a>
                    <a href={doctor.social.linkedin}><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
