import { AppBar, Box, Button, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div id="d1">

<Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            marginTop:"1%",
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
        <br/><br/>

        <TextField
          type="Email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "300px" }}
        />
        <br />
        <br />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: "300px" }}
        />
        <br />
        <br />
        <button>Login</button>
      </Box>
    </div>
  );
};

export default Login;
