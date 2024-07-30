import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Grid, Paper } from '@mui/material';

const EventDetailsPage = () => {
  const { category } = useParams();

  // Example data for different categories
  const eventDetails = {
    Weddings: [
      { name: 'Elegant Wedding Venue', description: 'An elegant venue for your special day.' },
      // Add more wedding event details here
    ],
    'Corporate Events': [
      { name: 'Modern Conference Hall', description: 'A professional space for corporate events.' },
      // Add more corporate event details here
    ],
    'Birthday Parties': [
      { name: 'Fun Birthday Venue', description: 'A lively venue for birthday parties.' },
      // Add more birthday event details here
    ],
    Conferences: [
      { name: 'State-of-the-art Conference Room', description: 'Well-equipped for conferences.' },
      // Add more conference event details here
    ],
    'Private Parties': [
      { name: 'Intimate Private Venue', description: 'Perfect for private gatherings.' },
      // Add more private party event details here
    ],
    'Charity Events': [
      { name: 'Charity Event Space', description: 'Ideal for charitable events and fundraisers.' },
      // Add more charity event details here
    ]
  };

  const categoryEvents = eventDetails[category] || [];

  return (
    <Box p={3}>
      <Typography variant="h3" gutterBottom align="center">
        {category} Events
      </Typography>
      <Grid container spacing={4}>
        {categoryEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h5" component="div">
                {event.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {event.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventDetailsPage;
