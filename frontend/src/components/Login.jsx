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
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            boxShadow:" 0 1px 10px rgba(0, 0, 0, 0.1)" ,
            borderRadius:"20px",
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
                  color: "#0099cc",
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
      <div className="containerlogin">
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
    </div>
  );
};

export default Login;
