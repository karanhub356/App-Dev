import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from localStorage
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  if (bookings.length === 0) {
    return (
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          No Bookings Available
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
      <Typography variant="h6" gutterBottom>
        Booking History
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{booking.name}</Typography>
                <Typography variant="body2">Email: {booking.email}</Typography>
                <Typography variant="body2">Phone: {booking.phone}</Typography>
                <Typography variant="body2">Event Type: {booking.eventType}</Typography>
                <Typography variant="body2">Event Date: {booking.eventDate}</Typography>
                <Typography variant="body2">Booking Date: {booking.bookingDate}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default BookingManagement;
