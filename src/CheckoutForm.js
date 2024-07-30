// src/CheckoutForm.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Grid, MenuItem, Select, FormControl, InputLabel, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { motion } from 'framer-motion';
import './CheckoutForm.css';

// Dummy data for countries and their codes
const countries = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  // Add more countries as needed
];

const CheckoutForm = () => {
  const [countryCode, setCountryCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [showAmount, setShowAmount] = useState(false);
  const [otp, setOtp] = useState('');
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(123.45); // Example amount

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePayNow = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate OTP generation and sending
    try {
      // Call to your backend service to send OTP
      await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ countryCode, mobileNumber }),
      });
      setLoading(false);
      setShowAmount(true);
      setShowOtpDialog(true);
    } catch (error) {
      console.error('Failed to send OTP:', error);
      setLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    // Call to your backend service to verify OTP
    try {
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Payment successful!');
        setShowOtpDialog(false);
        // Redirect or perform further actions
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return (
    <div className="checkout-page">
      <Container component="main" maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box className="checkout-box">
            <Typography component="h1" variant="h5" className="checkout-title">
              {showAmount ? 'Review Your Payment' : 'Secure Payment'}
            </Typography>
            {!showAmount ? (
              <Box component="form" onSubmit={handlePayNow} sx={{ mt: 1 }}>
                <FormControl fullWidth margin="normal" className="checkout-input">
                  <InputLabel id="country-code-label">Country Code</InputLabel>
                  <Select
                    labelId="country-code-label"
                    id="country-code"
                    value={countryCode}
                    label="Country Code"
                    onChange={handleCountryCodeChange}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="mobileNumber"
                  label="Mobile Number"
                  type="text"
                  id="mobileNumber"
                  autoComplete="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="checkout-input"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="cardNumber"
                  label="Card Number"
                  type="text"
                  id="cardNumber"
                  autoComplete="cc-number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="checkout-input"
                  InputProps={{
                    startAdornment: <span className="payment-icon">💳</span>,
                  }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="expiryDate"
                      label="Expiry Date (MM/YY)"
                      type="text"
                      id="expiryDate"
                      autoComplete="cc-exp"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="checkout-input"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="cvv"
                      label="CVV"
                      type="password"
                      id="cvv"
                      autoComplete="cc-csc"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="checkout-input"
                    />
                  </Grid>
                </Grid>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="checkout-button"
                  >
                    {loading ? <CircularProgress size={24} /> : 'Pay Now'}
                  </Button>
                </motion.div>
              </Box>
            ) : (
              <Box className="amount-details">
                <Typography variant="h6" align="center" className="amount-text">
                  Amount to be paid: ${amount}
                </Typography>
                <Typography variant="body2" align="center" className="amount-subtext">
                  Please enter the OTP sent to your mobile number to complete the payment.
                </Typography>
              </Box>
            )}
          </Box>
        </motion.div>
      </Container>

      {/* OTP Dialog */}
      <Dialog open={showOtpDialog} onClose={() => setShowOtpDialog(false)}>
        <DialogTitle>Enter OTP</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="otp"
            label="OTP"
            type="text"
            fullWidth
            variant="outlined"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowOtpDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleOtpSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CheckoutForm;
