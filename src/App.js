import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'; // Import your store
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
import PhotosPage from './PhotosPage'; // Import PhotosPage component
import ProductPage from "./ProductPage"; // Import ProductPage
import VendorPage from "./VendorPage"; // Import VendorPage

const App = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookingOpen = () => {
    setBookingOpen(true);
  };

  const handleBookingClose = () => {
    setBookingOpen(false);
  };

  return (
    <Provider store={store}> {/* Wrap your application with Provider */}
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
                <BookingForm open={bookingOpen} handleClose={handleBookingClose} />
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
          <Route path="/bookinghistory" element={<BookingHistory />} />
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
          <Route
            path="/about"
            element={<About />}
          />
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
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <BookingForm open={bookingOpen} handleClose={handleBookingClose} onBookingSubmit={() => {}} />
      </Router>
    </Provider>
  );
};

export default App;
