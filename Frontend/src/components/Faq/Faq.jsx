import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './faq.css'; 

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What are the common signs of vision problems?',
      answer: 'Common signs include blurred vision, difficulty seeing at night, frequent headaches, and eye strain. If you experience any of these symptoms, it is advisable to get your eyes checked.'
    },
    {
      question: 'How often should I have my eyes examined?',
      answer: 'It is recommended to have a comprehensive eye exam every one to two years, depending on your age, risk factors, and whether you currently wear eyeglasses or contact lenses.'
    },
    {
      question: 'What is the difference between an optometrist and an ophthalmologist?',
      answer: 'An optometrist is a healthcare professional who can provide primary vision care, including sight testing and correction. An ophthalmologist is a medical doctor specializing in eye and vision care, capable of performing eye surgery.'
    },
    {
      question: 'Can children wear contact lenses?',
      answer: 'Yes, children can wear contact lenses. However, it depends on the child’s maturity and ability to handle and care for the lenses properly. Consult with your eye care professional to determine the best option.'
    },
    {
      question: 'What should I do if I get something in my eye?',
      answer: 'If you get something in your eye, avoid rubbing it. Rinse your eye with clean water or a saline solution. If the object does not come out or if you experience pain, seek medical attention immediately.'
    },
    {
      question: 'How can I protect my eyes from digital strain?',
      answer: 'To protect your eyes from digital strain, follow the 20-20-20 rule: every 20 minutes, take a 20-second break and look at something 20 feet away. Additionally, ensure proper lighting and use anti-glare screens.'
    }
  ];

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of the common questions we receive about eye care and vision health.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqData.map((faq, index) => (
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  key={index}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <div className="faq-content" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                    <p>{faq.answer}</p>
                  </div>
                  <i className={`faq-toggle bi bi-chevron-${activeIndex === index ? 'down' : 'right'}`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
