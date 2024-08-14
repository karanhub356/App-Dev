import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const BookingHistory = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <Container maxWidth="lg">
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Booking History
        </Typography>
        <Grid container spacing={4}>
          {bookings.map((booking, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={booking.venue.name}
                  height="140"
                  image={booking.venue.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {booking.venue.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {booking.venue.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Locality: {booking.venue.locality}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Venue Type: {booking.venue.venueType}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rental Cost: {booking.venue.rentalCost}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Number of Guests: {booking.venue.numberOfGuests}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Booked By: {booking.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {booking.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {booking.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Event Type: {booking.eventType}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Event Date: {booking.eventDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Booking Date:{" "}
                    {new Date(booking.bookingDate).toLocaleString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BookingHistory;
