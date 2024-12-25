const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// POST Route for Contact Form
app.post("/api/contact", async (req, res) => {
  try {
    // Destructure form data
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    // Configure SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "sanjay100daysofcode@gmail.com", 
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Email failed to send!" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
