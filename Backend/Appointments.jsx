import React, { useState } from "react";
import "./appointments.css";
import axios from "axios";

export default function Appointments() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    axios
      .get("http://localhost:4000", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("failure", error);
      });
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Appointment</h2>
        <p>Schedule your appointment with our experienced eye care professionals today</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="datetime-local"
                name="date"
                className="form-control datepicker"
                id="date"
                placeholder="Appointment Date"
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                required
              >
                <option value="">Select Department</option>
                <option value="General Eye Care">General Eye Care</option>
                <option value="Pediatric Eye Care">Pediatric Eye Care</option>
                <option value="Surgical Eye Care">Surgical Eye Care</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="doctor"
                id="doctor"
                className="form-select"
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Select Doctor</option>
                <option value="Dr. John Smith">Dr. John Smith</option>
                <option value="Dr. Jane Doe">Dr. Jane Doe</option>
                <option value="Dr. Emily Brown">Dr. Emily Brown</option>
              </select>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message (Optional)"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="error-message"></div>
            <div className="text-center">
              <button type="submit" onClick={sendMail}>Make an Appointment</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
