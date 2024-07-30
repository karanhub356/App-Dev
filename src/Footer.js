import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <Box className="footer">
      <Container className="footer-container">
        <Grid container spacing={4} direction="row" justifyContent="space-between" className="footer-grid">
          
          <Grid item xs={12} sm={4} className="footer-column">
            <Typography variant="h6" gutterBottom className="footer-title">
              Quick Links
            </Typography>
            <Box className="footer-links">
              <Link href="/home" className="footer-link">
                Home
              </Link>
              <Link href="/product/1" className="footer-link">
                Products
              </Link>
              <Link href="/about" className="footer-link">
                About
              </Link>
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className="footer-column">
            <Typography variant="h6" gutterBottom className="footer-title">
              Follow Us
            </Typography>
            <Box className="footer-icons">
              <IconButton color="inherit" href="https://facebook.com">
                <Facebook sx={{ "&:hover": { color: "#3b5998" } }} />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <Twitter sx={{ "&:hover": { color: "#1DA1F2" } }} />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <Instagram sx={{ "&:hover": { color: "#E1306C" } }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center" className="footer-bottom">
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} My E-commerce. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
