import React from 'react';
import { Typography, Container, Box, Paper, Grid, Card, CardContent } from '@mui/material';
import BookingManagement from './BookingManagement'; // Import the new component
import "./AdminDashboard.css";

// Sample data for halls
const halls = [
  { id: 1, name: "Traditional Indian Wedding Hall", location: "Mumbai", type: "Wedding Hall" },
  { id: 2, name: "Beach Wedding Venue", location: "Goa", type: "Beach Venue" },
  // Add more sample halls here
];

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        {/* Booking Management Section */}
        <BookingManagement />
        
        {/* Available Halls Section */}
        <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
          <Typography variant="h6" gutterBottom>
            Available Halls
          </Typography>
          <Grid container spacing={2}>
            {halls.map((hall) => (
              <Grid item xs={12} md={6} lg={4} key={hall.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{hall.name}</Typography>
                    <Typography variant="body2">Location: {hall.location}</Typography>
                    <Typography variant="body2">Type: {hall.type}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
