import React from 'react';
import { Typography, Container, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './PhotosPage.css'; // Import CSS file


// Sample data for photos
const photos = [
  {
    title: 'Beach Wedding',
    imageUrl: "https://holaweddings.com/wp-content/uploads/2023/02/Dreams-Vista-Cancun-beach-wedding-set-up.jpg",
  },
  {
    title: 'Traditional Indian Wedding',
    imageUrl:"https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIxfHxpbmRpYW4lMjB3ZWRkaW5nfGVufDB8fHx8MTYyNDU0Mzg5Ng&ixlib=rb-1.2.1&q=80&w=2000",
  },
  {
    title: 'Royal Palace Wedding',
    imageUrl:  "https://images.herzindagi.info/image/2023/Nov/wedding-in-rajasthan-palace.jpg",
  },
  {
    title: 'Modern Wedding',
    imageUrl: "https://media.licdn.com/dms/image/C5112AQG8SYEDlsZ_ig/article-inline_image-shrink_1000_1488/0/1581762473950?e=1727308800&v=beta&t=7WJm6TY5HhHz4kKczWCEssnSq_iwzLrw_6oDnsWcuB4",
  },
  {
    title: 'Garden Wedding',
    imageUrl: "https://cdn0.weddingwire.in/vendor/4589/3_2/960/jpg/2plc_15_214589-159732127544964.jpeg",
  },
  {
    title: 'Resort Wedding',
    imageUrl: "https://cdn0.weddingwire.in/article/2016/original/1280/jpeg/116102-open-air-wedding-venues-in-kolkata-luxury-raajkutir-kolkata.jpeg",
  },
  // Add more photos here
];

const PhotosPage = () => {
  return (
    <Container maxWidth="lg" className="photos-container">
  <Box>
    <Typography variant="h4" className="photos-title" gutterBottom>
      Wedding Photos
    </Typography>
    <Grid container spacing={4}>
      {photos.map((photo, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className="photo-card">
            <CardMedia
              component="img"
              alt={photo.title}
              height="140"
              image={photo.imageUrl}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {photo.title}
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

export default PhotosPage;
