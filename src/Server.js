// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();
const port = 5000;

app.use(bodyParser.json());

const accountSid = 'your_twilio_account_sid';
const authToken = 'your_twilio_auth_token';
const client = twilio(accountSid, authToken);

// Simulate OTP storage
let otpStorage = {};

app.post('/send-otp', (req, res) => {
  const { countryCode, mobileNumber } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
  otpStorage[mobileNumber] = otp;

  client.messages.create({
    body: `Your OTP is ${otp}`,
    from: 'your_twilio_phone_number',
    to: `${countryCode}${mobileNumber}`
  }).then(() => {
    res.sendStatus(200);
  }).catch(err => {
    console.error('Failed to send OTP:', err);
    res.sendStatus(500);
  });
});

app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  const mobileNumber = Object.keys(otpStorage)[0];
  if (otpStorage[mobileNumber] === otp) {
    delete otpStorage[mobileNumber];
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
