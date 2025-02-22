import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptors";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginform] = useState({
    email: "",
    password: "",
  });
  const [showCredentials, setShowCredentials] = useState(false);

  const change1 = (e) => {
    setLoginform({ ...loginForm, [e.target.name]: e.target.value });
  };

  const click1 = () => {
    axiosInstance
      .post("https://project-admin-mentor-portal.onrender.com/login", loginForm)
      .then((res) => {
        toast.success(res.data.message);

        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          if (res.data.role === "admin") {
            navigate("/admindash");
          } else if (res.data.role === "mentor") {
            sessionStorage.setItem("mentorId", res.data.mentorId);
            navigate("/mentordash");
          } else {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid Credentials");
      });
  };


  return (
    <div>
      <div className="loginhome">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "white",
              boxShadow: "none",
              borderRadius: "20px",
              margin: 0,
            }}
          >
            <Toolbar>
              <div className="logo">
                <img src="/images/logo.jpg" alt="Logo" className="logo-image" />
              </div>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  sx={{
                    color: "#27374d",
                    fontWeight: 600,
                    fontSize: "2.1rem",
                    textAlign: "left",
                    lineHeight: "1.1",
                  }}
                >
                  ICTAK
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "1.1rem",
                    textAlign: "left",
                  }}
                >
                  PROJECT PORTAL
                </Typography>
              </Box>
              <Link to={"/"}>
                <Button className="button">Home</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>

        <div className="loginhero">
          {/* Hero Section */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardMedia
                    component="img"
                    sx={{ maxWidth: "100%", height: "auto", marginTop: "2rem" }}
                    image="/images/login.jpg"
                    alt="Login cover"
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ margin: "10px", boxShadow: "none", padding: "20px" }}>
                  <Typography className="login">Login</Typography>
                  <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                    Please enter your credentials to access the Admin or Mentor dashboard.
                  </Typography>

                  <TextField
                    type="Email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={change1}
                    sx={{ width: "100%", maxWidth: "400px", marginBottom: "15px" }}
                  />

                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    onChange={change1}
                    sx={{ width: "100%", maxWidth: "400px", marginBottom: "15px" }}
                  /><br/>

                  <Button className="button" onClick={click1}>
                    Login
                  </Button><br/>

                  {/* Click to Reveal Credentials Button */}
                  <Box sx={{ marginTop: "20px" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setShowCredentials(!showCredentials)}
                    >
                      Need login credentials?
                    </Button>
                  </Box>

                  {/* Credentials Section */}
                  {showCredentials && (
                    <Box
                      sx={{
                        marginTop: "15px",
                        padding: "15px",
                        backgroundColor: "#dddddd",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography variant="body2">
                        <strong>Admin Login:</strong> admin123@gmail.com | 
                        <span id="admin-pass"> Admin123 </span>
                      </Typography>

                      <Typography variant="body2">
                        <strong>Mentor Login:</strong> Akhila123@gmail.com | 
                        <span id="mentor-pass"> Akhila12345 </span>
                      </Typography>
                    </Box>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
