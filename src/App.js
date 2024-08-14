import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignUpPage";
import HomePage from "./HomePage";
import AdminDashboard from "./AdminDashboard";
import BookingForm from "./BookingForm";
import BookingHistory from "./BookingHistory";
import HallList from "./HallList";
import Payment from "./Payment";
import EventCategoriesPage from "./EventCategoriesPage";
import EventDetailsPage from "./EventDetailsPage";
import AvailableHallsPage from "./AvailableHallsPage";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Navbar";
import About from "./About";
import PhotosPage from "./PhotosPage";
import ProductPage from "./ProductPage";
import VendorPage from "./VendorPage";

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookingOpen = () => {
    setBookingOpen(true);
  };

  const handleBookingClose = () => {
    setBookingOpen(false);
  };

  return (
    <Router>
      <Navbar onBookingOpen={handleBookingOpen} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/photos" element={<PhotosPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking-form"
          element={
            <ProtectedRoute>
              <BookingForm
                open={bookingOpen}
                handleClose={handleBookingClose}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking-history"
          element={
            <ProtectedRoute>
              <BookingHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hall-list"
          element={
            <ProtectedRoute>
              <HallList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event-categories"
          element={
            <ProtectedRoute>
              <EventCategoriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event-details/:category"
          element={
            <ProtectedRoute>
              <EventDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/available-halls"
          element={
            <ProtectedRoute>
              <AvailableHallsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendors"
          element={
            <ProtectedRoute>
              <VendorPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
