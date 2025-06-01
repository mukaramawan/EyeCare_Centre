import React, { useState } from "react";
import "./appointments.css";
import axios from "axios";

export default function Appointments() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      date,
      department,
      doctor,
      message,
    };

    axios.post('http://localhost:4000/api/appointment', formData)
      .then((response) => {
        console.log("Appointment request sent successfully:", response.data);
        // Optionally, you can handle success feedback or navigation here
      })
      .catch((error) => {
        console.error("Failed to send appointment request:", error);
        // Handle error feedback to the user
      });
  };

  return (
    <section id="appointment" className="appointment section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Appointment</h2>
        <p>Schedule your appointment with our experienced eye care professionals today</p>
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form className="php-email-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
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
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="error-message"></div>
            <div className="text-center">
              <button type="submit">Make an Appointment</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
