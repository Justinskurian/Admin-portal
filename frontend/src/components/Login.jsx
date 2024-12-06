import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosinterceptors";

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
        alert(res.data.message);

        if (res.data.token) {
          sessionStorage.setItem("token", res.data.token);
          if (res.data.role === "admin") {
            navigate("/admindash");
          } else if (res.data.role === "mentor") {
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
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            marginTop: "1%",
            backgroundColor: "white",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <div className="logo">
              <img
                src="src/images/logo.jpg"
                alt="Logo"
                className="logo-image"
              />
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                sx={{
                  color: "rgb(0, 153, 204)",
                  fontWeight: 600,
                  fontSize: "2.1rem",
                  textAlign: "left",
                  marginTop: "5px",
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
          </Toolbar>
        </AppBar>
      </Box>
      <Box id="bo1" component="section">
        <Typography className="login">Login</Typography>
        <br />
        <br />

        <TextField
          type="Email"
          id="outlined-basic1"
          label="Email"
          variant="outlined"
          sx={{ width: "300px" }}
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
          sx={{ width: "300px" }}
          name="password"
          onChange={change1}
        />
        <br />
        <br />
        <Button className="button" onClick={click1}>
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
