import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { Typography, Container, Box, Grid, Card, CardContent, CardMedia, TextField, MenuItem, Button, AppBar, Toolbar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import BookingForm from './BookingForm';
import './HomePage.css';

// Action creators
const loginUser = (user) => ({ type: 'LOGIN', payload: user });
const logoutUser = () => ({ type: 'LOGOUT' });

const HomePage = () => {
  const user = useSelector((state) => state.user); // Access user state from Redux store
  const dispatch = useDispatch(); // Initialize dispatch
  const welcomeMessage = `Welcome, ${user?.name || 'Guest'}!`;
  const navigate = useNavigate();

  const [locality, setLocality] = useState('');
  const [guests, setGuests] = useState('');
  const [rentalCost, setRentalCost] = useState('');
  const [venueType, setVenueType] = useState('');

  const [selectedVenue, setSelectedVenue] = useState(null);
  const [isBookingFormOpen, setBookingFormOpen] = useState(false);

  const handleBookNowClick = (venue) => {
    setSelectedVenue(venue);
    setBookingFormOpen(true);
  };

  const handleBookingFormClose = () => {
    setSelectedVenue(null);
    setBookingFormOpen(false);
  };

  const handleBookingSubmit = () => {
    setBookingFormOpen(false);
    navigate('/bookinghistory');
  };

  const items = [
    {
      name: 'Traditional Indian Wedding Halls',
      description: 'Elegant halls for traditional Indian weddings.',
      image: 'https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTYyNDU0Mzg5Ng&ixlib=rb-1.2.1&q=80&w=2000',
      locality: 'Mumbai',
      venueType: 'Wedding Hall',
      rentalCost: '₹ 50,000 per day',
      numberOfGuests: 'Up to 500 guests',
    },
    {
      name: 'Traditional Christian Wedding Halls',
      description: 'Beautiful venues for Christian weddings.',
      image: 'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/005/722/475/new_medium/weva_photography-_Wedding_Mass.jpeg?1672843874',
      locality: 'Delhi',
      venueType: 'Wedding Hall',
      rentalCost: '₹ 60,000 per day',
      numberOfGuests: 'Up to 600 guests',
    },
    {
      name: 'Traditional Muslim Wedding Halls',
      description: 'Spacious halls for Muslim weddings.',
      image: 'https://www.linandjirsa.com/wp-content/uploads/004-sheraton-park-anaheim-muslim-pakistani-wedding-photography.jpg',
      locality: 'Bangalore',
      venueType: 'Wedding Hall',
      rentalCost: '₹ 55,000 per day',
      numberOfGuests: 'Up to 550 guests',
    },
    {
      name: 'Modern Wedding Halls',
      description: 'State-of-the-art halls for modern weddings.',
      image: 'https://media.licdn.com/dms/image/C5112AQG8SYEDlsZ_ig/article-inline_image-shrink_1000_1488/0/1581762473950?e=1727308800&v=beta&t=7WJm6TY5HhHz4kKczWCEssnSq_iwzLrw_6oDnsWcuB4',
      locality: 'Hyderabad',
      venueType: 'Wedding Hall',
      rentalCost: '₹ 70,000 per day',
      numberOfGuests: 'Up to 700 guests',
    },
    {
      name: 'Beach Wedding Venues',
      description: 'Beautiful beachside venues for weddings.',
      image: 'https://holaweddings.com/wp-content/uploads/2023/02/Dreams-Vista-Cancun-beach-wedding-set-up.jpg',
      locality: 'Goa',
      venueType: 'Beach Venue',
      rentalCost: '₹ 90,000 per day',
      numberOfGuests: 'Up to 300 guests',
    },
    {
      name: 'Royal Palace Wedding Venues',
      description: 'Luxurious palaces for royal weddings.',
      image: 'https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg',
      locality: 'Jaipur',
      venueType: 'Palace',
      rentalCost: '₹ 1,50,000 per day',
      numberOfGuests: 'Up to 1000 guests',
    },
    {
      name: 'Garden Wedding Venues',
      description: 'Scenic garden venues for outdoor weddings.',
      image: 'https://cdn0.weddingwire.in/vendor/4589/3_2/960/jpg/2plc_15_214589-159732127544964.jpeg',
      locality: 'Chennai',
      venueType: 'Garden',
      rentalCost: '₹ 80,000 per day',
      numberOfGuests: 'Up to 400 guests',
    },
    {
      name: 'Rooftop Wedding Venues',
      description: 'Stunning rooftop venues for urban weddings.',
      image: 'https://images.zola.com/c02f1db5-2709-4b65-8bb1-225501b67fe2?w=1024&h=384&fit=crop&q=75&fm=webp',
      locality: 'Pune',
      venueType: 'Rooftop',
      rentalCost: '₹ 75,000 per day',
      numberOfGuests: 'Up to 350 guests',
    },
    {
      name: 'Luxury Resort Wedding Venues',
      description: 'Luxurious resort venues for an unforgettable wedding experience.',
      image: 'https://cdn0.weddingwire.in/article/2016/original/1280/jpeg/116102-open-air-wedding-venues-in-kolkata-luxury-raajkutir-kolkata.jpeg',
      locality: 'Kolkata',
      venueType: 'Resort',
      rentalCost: '₹ 1,00,000 per day',
      numberOfGuests: 'Up to 800 guests',
    }
  ];

  const filteredItems = items.filter(
    (item) =>
      (locality ? item.locality === locality : true) &&
      (guests ? item.numberOfGuests.includes(guests) : true) &&
      (rentalCost ? item.rentalCost.includes(rentalCost) : true) &&
      (venueType ? item.venueType === venueType : true)
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="nav-title">
            India's Favourite Wedding Planning Platform
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
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className="homepage-container">
        <Container maxWidth="lg">
          <Box>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
            >
              <Typography variant="h2" align="center" gutterBottom className="hero-text">
                {welcomeMessage}
              </Typography>
            </motion.div>
            <Box className="search-container">
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Locality"
                    variant="outlined"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Number of Guests"
                    variant="outlined"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    select
                    fullWidth
                  >
                    <MenuItem value="100">Up to 100</MenuItem>
                    <MenuItem value="200">Up to 200</MenuItem>
                    <MenuItem value="300">Up to 300</MenuItem>
                    <MenuItem value="400">Up to 400</MenuItem>
                    <MenuItem value="500">Up to 500</MenuItem>
                    <MenuItem value="600">Up to 600</MenuItem>
                    <MenuItem value="700">Up to 700</MenuItem>
                    <MenuItem value="800">Up to 800</MenuItem>
                    <MenuItem value="900">Up to 900</MenuItem>
                    <MenuItem value="1000">Up to 1000</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Rental Cost"
                    variant="outlined"
                    value={rentalCost}
                    onChange={(e) => setRentalCost(e.target.value)}
                    select
                    fullWidth
                  >
                    <MenuItem value="₹ 50,000">₹ 50,000</MenuItem>
                    <MenuItem value="₹ 60,000">₹ 60,000</MenuItem>
                    <MenuItem value="₹ 70,000">₹ 70,000</MenuItem>
                    <MenuItem value="₹ 80,000">₹ 80,000</MenuItem>
                    <MenuItem value="₹ 90,000">₹ 90,000</MenuItem>
                    <MenuItem value="₹ 1,00,000">₹ 1,00,000</MenuItem>
                    <MenuItem value="₹ 1,50,000">₹ 1,50,000</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Venue Type"
                    variant="outlined"
                    value={venueType}
                    onChange={(e) => setVenueType(e.target.value)}
                    select
                    fullWidth
                  >
                    <MenuItem value="Wedding Hall">Wedding Hall</MenuItem>
                    <MenuItem value="Beach Venue">Beach Venue</MenuItem>
                    <MenuItem value="Palace">Palace</MenuItem>
                    <MenuItem value="Garden">Garden</MenuItem>
                    <MenuItem value="Rooftop">Rooftop</MenuItem>
                    <MenuItem value="Resort">Resort</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Button variant="contained" color="primary" className="search-button" onClick={() => { }}>
                Search
              </Button>
            </Box>
            <Box className="results-container">
              <Grid container spacing={3}>
                {filteredItems.map((item, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card className="result-card">
                      <CardMedia component="img" alt={item.name} height="200" image={item.image} />
                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {item.name}
                        </Typography>
                        <Typography color="textSecondary">
                          {item.description}
                        </Typography>
                        <Typography color="textSecondary">Locality: {item.locality}</Typography>
                        <Typography color="textSecondary">Venue Type: {item.venueType}</Typography>
                        <Typography color="textSecondary">Rental Cost: {item.rentalCost}</Typography>
                        <Typography color="textSecondary">Number of Guests: {item.numberOfGuests}</Typography>
                        <Button variant="contained" color="primary" className="book-button" onClick={() => handleBookNowClick(item)}>
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
        <Footer />
        <BookingForm open={isBookingFormOpen} handleClose={handleBookingFormClose} venue={selectedVenue} onBookingSubmit={handleBookingSubmit} />
      </Box>
    </>
  );
};

export default HomePage;
