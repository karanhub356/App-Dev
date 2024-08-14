import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Fade,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(null); // State to store data from GET request
  const navigate = useNavigate();

  // Handle login and fetch user data
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/users/", {
        params: {
          email: email,
          password: password,
        },
      });

      // Find the user that matches the email and password
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setUserData(user); // Set the user data from the GET request
        navigate("/home"); // Redirect to home page
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      console.error("Fetch user data failed", error);
    }
  };

  return (
    <div className="login-background">
      <video autoPlay muted loop className="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container component="main" maxWidth="xs" className="login-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={10} className="login-paper">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className="login-title"
            >
              Welcome Back!
            </Typography>
            <Typography
              variant="body2"
              align="center"
              className="login-subtitle"
            >
              Please login to your account
            </Typography>
            <Fade in={!!error} timeout={600}>
              <Typography color="error" align="center" className="login-error">
                {error}
              </Typography>
            </Fade>
            <Box component="form" sx={{ mt: 3 }} onSubmit={handleLogin}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      edge="end"
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, borderRadius: "20px", boxShadow: 6 }}
                className="login-button"
              >
                Login
              </Button>
              <Typography align="center" className="login-link">
                Don't have an account?{" "}
                <Link to="/signup" className="login-link-text">
                  Sign up here
                </Link>
              </Typography>
            </Box>
            {userData && (
              <Typography align="center" className="login-info">
                {/* Render some information from the GET request here */}
                Logged in as: {userData.email}
              </Typography>
            )}
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
};

export default LoginPage;
