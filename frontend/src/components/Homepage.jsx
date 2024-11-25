import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { margin, styled, textAlign } from "@mui/system";
import { Card, CardContent, CardMedia, Grid2 } from "@mui/material";

const Homepage = () => {
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
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
            <button>Login</button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "3%" }}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Card
              sx={{
                boxShadow: "none",
              }}
            >
              <CardMedia sx={{ height: 400 }} image="src/images/cover.jpg" />
            </Card>
          </Grid2>
          <Grid2 size={6}>
            <Card
              sx={{
                margin: "10px",
                boxShadow: "none",
              }}
            >
              <Typography>Welcome To ICTAK Project Portal</Typography>
              <br />
              <Typography
                sx={{
                  color: "rgb(0, 153, 204)",
                  fontWeight: 600,
                  fontSize: "3.1rem",
                  textAlign: "left",
                  marginTop: "5px",
                  lineHeight: "1.1",
                }}
              >
                Gateway to the Thriving Career
              </Typography>
              <br />
              <Typography>
                From humble beginnings in 2014, ICT Academy of Kerala has
                evolved into the premier hub for ICT and innovation training
                statewide.
              </Typography>
              <br /> 
            </Card>
            <button style={{marginLeft:"50px"}}>Login</button>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default Homepage;
