const nodemailer = require("nodemailer");
require("dotenv").config();

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
      from: name,
      to: "sanjay100daysofcode@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ success: true, message: "Message Sent" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
