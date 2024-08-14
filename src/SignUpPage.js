import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper, Box, Fade, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import './SignUpPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Check if email is already registered
      const existingUsersResponse = await axios.get('http://localhost:8000/users/', {
        params: { email }
      });

      if (existingUsersResponse.data.length > 0) {
        setError('Email is already in use');
        return;
      }

      // Create new user
      const response = await axios.post('http://localhost:8000/users/', {
        name,
        email,
        password
      });

      if (response.status === 201) {
        // Redirect to login page upon successful signup
        navigate('/login');
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup failed:', err);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-background">
      {/* Your video background and other styling */}
      <Container component="main" maxWidth="xs" className="signup-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={10} className="signup-paper">
            <Typography component="h1" variant="h4" align="center" className="signup-title">
              Create Account
            </Typography>
            <Typography variant="body2" align="center" className="signup-subtitle">
              Please sign up to create a new account
            </Typography>
            <Fade in={!!error} timeout={600}>
              <Typography color="error" align="center" className="signup-error">
                {error}
              </Typography>
            </Fade>
            <Box component="form" onSubmit={handleSignup} sx={{ mt: 3 }}>
              {/* Your input fields */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
              />
              {/* Other input fields similar to the 'name' field */}
              
              {/* Submit button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, borderRadius: '20px', boxShadow: 6 }}
                className="signup-button"
              >
                Sign Up
              </Button>
              {/* Link to login page */}
              <Typography align="center" className="signup-link">
                Already have an account? <Link to="/login" className="signup-link-text">Login here</Link>
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
};

export default SignupPage;
