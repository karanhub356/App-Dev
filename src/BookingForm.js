import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
  });

  const navigate = useNavigate(); // Use React Router's navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const bookingDetails = {
      ...formData,
      bookingDate: new Date().toISOString(),
    };

    // Save booking to localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    // Redirect to payment page
    navigate("/payment"); // Update this path if your payment page has a different route

    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Book Venue</DialogTitle>
      <DialogContent>
        <Box mt={2}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Event Type"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Wedding">Wedding</MenuItem>
            <MenuItem value="Party">Party</MenuItem>
            <MenuItem value="Corporate Event">Corporate Event</MenuItem>
          </TextField>
          <TextField
            label="Event Date"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingForm;
