// src/VendorPage.js

import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  MenuItem,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "./Footer";
import "./VendorPage.css";

const VendorPage = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  // Sample vendor data
  const vendors = [
    {
      name: "Elegant Catering",
      description: "Delicious catering for all types of events.",
      image:
        "https://cdn0.weddingwire.in/vendor/5039/3_2/640/png/special-events.jpeg",
      category: "Catering",
      location: "Mumbai",
    },
    {
      name: "Glamour Photography",
      description: "Professional photography services for weddings.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlTma1qhdT83DfQwD7e5tbmbdvqVo31YxxNg&s",
      category: "Photography",
      location: "Delhi",
    },
    {
      name: "Floral Creations",
      description: "Beautiful floral arrangements for any occasion.",
      image:
        "https://images.zola.com/10e9328f-77d3-45fc-9719-8ac483d5e8b9?w=1200&h=675&fit=crop&q=60",
      category: "Florist",
      location: "Bangalore",
    },
    // Add more vendors as needed
  ];

  const filteredVendors = vendors.filter(
    (vendor) =>
      (category ? vendor.category === category : true) &&
      (location ? vendor.location === location : true)
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="nav-title">
            Vendor Listings
          </Typography>
          <Box className="nav-links">
            <Link to="/vendors" className="nav-link">
              Vendors
            </Link>
            <Link to="/photos" className="nav-link">
              Photos
            </Link>
            <Link to="/realweddings" className="nav-link">
              Real Weddings
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/booking" className="nav-link">
              Booking
            </Link>
            <Link to="/einvites" className="nav-link">
              E-Invites
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className="vendorpage-container">
        <Container maxWidth="lg">
          <Box mt={5}>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            >
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                className="hero-text"
              >
                Find Your Perfect Vendor
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
            >
              <Typography
                variant="h5"
                align="center"
                paragraph
                className="hero-subtext"
              >
                Browse through our list of trusted vendors.
              </Typography>
            </motion.div>
          </Box>

          <Box mt={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="">All Categories</MenuItem>
                  <MenuItem value="Catering">Catering</MenuItem>
                  <MenuItem value="Photography">Photography</MenuItem>
                  <MenuItem value="Florist">Florist</MenuItem>
                  {/* Add more categories as needed */}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  select
                  label="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  fullWidth
                >
                  <MenuItem value="">All Locations</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                  {/* Add more locations as needed */}
                </TextField>
              </Grid>
            </Grid>
          </Box>

          <Box mt={5}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              className="section-title"
            >
              Featured Vendors
            </Typography>
            <Grid container spacing={4}>
              {filteredVendors.map((vendor, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card className="feature-card">
                    <CardMedia
                      component="img"
                      alt={vendor.name}
                      height="140"
                      image={vendor.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {vendor.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {vendor.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category: {vendor.category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Location: {vendor.location}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        className="contact-button"
                      >
                        Contact
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default VendorPage;
