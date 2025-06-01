const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

const EMAIL_USER = 'eyecarecentre12@gmail.com';
const EMAIL_PASS = 'eyecarecentre@';
const RECEIVER_EMAIL = '9t19t3@gmail.com'; // Hospital's email address

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
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






const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "eyecarecentre12@gmail.com",
        pass: "oqvzokinbtvlkrqw",
      },
    });

    const mail_configs = {
      from: "eyecarecentre12@gmail.com",
      to: email,
      subject: subject,
      html: `
      <p>${message}</p>
      <p>Best Regards</p>
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  }); 
}

app.get("/", (req, res) => {
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});


















const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const EMAIL_USER = 'eyecarecentre12@gmail.com';
const EMAIL_PASS = 'oqvzokinbtvlkrqw';
const RECEIVER_EMAIL = 'eyecarecentre12@gmail.com'; // Hospital's email address

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
