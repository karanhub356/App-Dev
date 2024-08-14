import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the import path if necessary

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If there is no user (not authenticated), redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user exists (authenticated), render the children components
  return children;
};

export default ProtectedRoute;  
