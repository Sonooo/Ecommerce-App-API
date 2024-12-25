
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL,
      pass: process.env.PASSWORD // Use the app password, not your main password
    }
  });


  // const emailTemplate = fs.readFileSync(path.join(__dirname, 'welcome-email.html'), 'utf-8');
 
  // Define a function to send an email
async function sendEmail(email, subject, html) {
    try {
      await transporter.sendMail({
        from: process.env.GMAIL,
        to: email,
        subject: subject,
        html: html // Optional HTML content
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle email sending errors (e.g., log or notify admins)
    }
  }
  
  module.exports = sendEmail;