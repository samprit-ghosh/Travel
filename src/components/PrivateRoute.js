import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebaseConfig";

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser; // Check if a user is logged in
  return user ? children : <Navigate to="/adminlogin" />; // Redirect to login page if not logged in
};

export default PrivateRoute;
