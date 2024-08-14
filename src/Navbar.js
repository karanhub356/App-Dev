import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AccountCircle, Home, Event, Payment, Info, AdminPanelSettings } from "@mui/icons-material";

const Navbar = ({ onBookingOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "rgba(0, 0, 0, 0.8)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          Hall Bookin' Zone
        </Typography>
        <Button
          color="inherit"
          startIcon={<Home />}
          onClick={() => navigate("/home")}
        >
          Home
        </Button>
        <Button
          color="inherit"
          startIcon={<Event />}
          onClick={() => navigate("/event-categories")}
        >
          Events
        </Button>
        <Button
          color="inherit"
          startIcon={<Payment />}
          onClick={() => navigate("/payment")}
        >
          Payment
        </Button>
        <Button
          color="inherit"
          startIcon={<AccountCircle />}
          onClick={onBookingOpen} // Open the booking form
        >
          Booking
        </Button>
        
        <Button
          color="inherit"
          startIcon={<AdminPanelSettings />}
          onClick={() => navigate("/admin")}
        >
          Admin
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
