const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // To load environment variables from .env

// server used to send send emails
const app = express();
app.use(cors({
  origin: "https://sanjay-portfoilo-silk.vercel.app",  // Allow requests from your client domain
}));
app.use(express.json());

app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Use environment variables
    pass: process.env.EMAIL_PASS,  // Use environment variables
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Directly handle the POST request for the contact form submission
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mail = {
    from: `"${name}" <${email}>`,  // From field with name and email
    to: "sanjay100daysofcode@gmail.com", // Use environment variable for recipient email
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong></p>
           <p>${message}</p>`,
  };

  contactEmail.sendMail(mail, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Email failed to send" });
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).json({ success: true, message: "Message Sent" });
    }
  });
});
module.exports = app;