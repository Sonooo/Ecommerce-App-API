const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD // Use the app password, not your main password
    }
  });

  // Define a function to send an email
async function sendEmail(email, subject, text, html) {
    try {
      await transporter.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: subject,
        text: text,
        html: html // Optional HTML content
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle email sending errors (e.g., log or notify admins)
    }
  }
  
  module.exports = sendEmail;