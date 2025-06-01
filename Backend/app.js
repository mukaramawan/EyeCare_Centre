const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables
const cors = require('cors');


const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const RECEIVER_EMAIL = 'mukaramawan.official@gmail.com'; // Hospital's email address

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // Use the application-specific password generated for your Gmail account
  },
});


app.post('/api/appointment', (req, res) => {
  const { name, email, phone, date, department, doctor, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !date || !department || !doctor) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  const mailOptions = {
    from: email, // Use user's email as the sender
    to: RECEIVER_EMAIL,
    subject: 'New Appointment Request',
    text: `You have a new appointment request from ${name}.
    Email: ${email}
    Phone: ${phone}
    Appointment Date: ${date}
    Department: ${department}
    Doctor: ${doctor}
    Message: ${message || 'No additional message.'}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send appointment request. Please try again.' });
    }
    res.status(200).json({ message: 'Appointment request sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
