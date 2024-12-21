import {
  AppBar,
  Box,
  Button,
  Card,
  CardMedia,
  Grid2,
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
  const change1 = (e) => {
    setLoginform({ ...loginForm, [e.target.name]: e.target.value });
  };

  const click1 = () => {
    axiosInstance
      .post("http://localhost:3000/login", loginForm)
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
                <img
                  src="/images/logo.jpg"
                  alt="Logo"
                  className="logo-image"
                />
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
            <Grid2 container spacing={15}>
              <Grid2 size={6}>
                <Card
                  sx={{
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    sx={{ height: 450 }}
                    image="/images/login.jpg"
                  />
                </Card>
              </Grid2>
              <Grid2 size={6}>
                <Card
                  sx={{
                    margin: "10px",
                    boxShadow: "none",
                  }}
                >
                  <Typography className="login">Login</Typography>
                  <br />
                  Please enter your credentials to access the
                  <br /> Admin or Mentor dashboard.
                  <br />
                  <br /> <br />
                  <TextField
                    type="Email"
                    id="outlined-basic1"
                    label="Email"
                    variant="outlined"
                    sx={{ width: "400px" }}
                    name="email"
                    onChange={change1}
                  />
                  <br />
                  <br />
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    sx={{ width: "400px" }}
                    name="password"
                    onChange={change1}
                  />
                  <br />
                  <br />
                  <Button className="button" onClick={click1}>
                    Login
                  </Button>
                </Card>
              </Grid2>
            </Grid2>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
