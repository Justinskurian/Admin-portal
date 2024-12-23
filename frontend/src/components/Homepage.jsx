import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Card, CardMedia, Grid2 } from "@mui/material";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    // Navbar and Logo
    <div>
      <div className="home">
        <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "white",
                boxShadow: "none",
                borderRadius: "20px",
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
                <Link to={"/login"}>
                  <Button className="button">Login</Button>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>

          {/* Hero Section */}
          <div className="homehero">
          <Box sx={{ flexGrow: 1 }} style={{ marginTop: "1%" }}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Card
                  sx={{
                    boxShadow: "none",
                  }}
                >
               <CardMedia
  component="img"
  sx={{
    maxWidth: "95%", 
    height: "auto",    
  }}
  style={{marginLeft:"20px"}}
  image="/images/cover.jpg"
  alt="Cover Image"
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
                  <Typography>Welcome To ICTAK Project Portal</Typography>
                  <br />
                  <Typography
                    sx={{
                      color: "#27374d",
                      fontWeight: 600,
                      fontSize: "3.1rem",
                      textAlign: "left",
                      marginTop: "5px",
                      lineHeight: "1.1",
                    }}
                  >
                    Gateway to the
                    <br /> Thriving{" "}
                    <span style={{ color: "#ff6536" }}>Career</span>
                  </Typography>
                  <br />
                  <Typography>
                    From humble beginnings in 2014, ICT Academy of Kerala
                    <br /> has evolved into the premier hub for ICT and
                    innovation training statewide.
                    <br />
                    <br /> Enroll in our courses and shape your future!
                  </Typography>
                  <br />
                </Card>
                <Link to={"/login"}>
                  <Button className="button" style={{ marginLeft: "50px" }}>
                    Login
                  </Button>
                </Link>
              </Grid2>
            </Grid2>
          </Box>
          </div>
          <div className="other-contents">
            {/* Other Contents */}
            
            <Box sx={{ flexGrow: 1 }}>
              <Grid2 container spacing={2}>
                <Grid2 size={3}>
                  <Card
                    sx={{
                      boxShadow: "none",
                      margin: "10px",
                    }}
                  >
                    <CardMedia component="img" sx={{maxWidth:"100%", height: "auto" }} image="/images/admin.jpg" alt="admin" />
                  </Card>
                </Grid2>
                <Grid2 size={3}>
                  <Card
                    sx={{
                      marginTop: "50px",
                      marginLeft: "10px",
                      boxShadow: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#27374d",
                        fontWeight: 600,
                        fontSize: "2rem",
                        textAlign: "left",
                        marginTop: "5px",
                        lineHeight: "1.1",
                      }}
                    >
                      <span style={{ color: "#ff6536" }}>Admin</span>
                      <br /> Dashboard
                    </Typography>
                    <br />
                    <Typography>
                      Seamlessly manage mentors, projects, and data with
                      intuitive tools.
                    </Typography>
                    <br />
                  </Card>
                </Grid2>

                <Grid2 size={3}>
                  <Card
                    sx={{
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia component="img" sx={{maxWidth:"100%", height: "auto" }} image="/images/mentor.jpg" alt="mentor" />

                  </Card>
                </Grid2>
                <Grid2 size={3}>
                  <Card
                    sx={{
                      marginLeft: "10px",
                      marginTop: "50px",
                      boxShadow: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#27374d",
                        fontWeight: 600,
                        fontSize: "2rem",
                        textAlign: "left",
                        marginTop: "5px",
                        lineHeight: "1.1",
                      }}
                    >
                      <span style={{ color: "#ff6536" }}>Mentor</span>
                      <br />
                      Dashboard
                    </Typography>
                    <br />
                    <Typography>
                      Guide and track projects efficiently with streamlined
                      resources.
                    </Typography>
                    <br />
                  </Card>
                </Grid2>
              </Grid2>
            </Box>
          </div>
        </div>
        <div className="footer">
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              Where to <span style={{ color: "#ff6536" }}>Find</span> Us
            </Typography>
            <div className="section-container">
              <div className="section">
                <Typography
                  sx={{
                    margin: "2%",
                    lineHeight: "1.3",
                  }}
                >
                  <b>Head Quarters</b>
                  <br />
                  <br />
                  G1, Ground Floor, Thejaswini,
                  <br />
                  Technopark Campus <br />
                  Thiruvananthapuram
                  <br />
                  Kerala, India - 695 581
                  <br />
                  Phone : +91 47270 0811{" "}
                </Typography>
              </div>
              <div className="section">
                <Typography>
                  <b>Regional Centre (Central)</b>
                  <br />
                  <br /> B-Wing, Kanikonna
                  <br />
                  Villa Infopark Campus
                  <br /> Koratty, Thrissur Kerala, <br />
                  India 680 308
                  <br />
                  Phone:+914802731050
                </Typography>
              </div>
              <div className="section">
                <Typography>
                  <b>Regional Centre (North)</b>
                  <br />
                  <br /> 2nd Floor, UL <br />
                  Cyberpark Building
                  <br /> Nellikode Post Kozhikode
                  <br /> Kerala, India 673 016 <br />
                  Phone :+914952431432
                </Typography>
              </div>
            </div>
          </Box>
        </div>
        <Typography
          sx={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}
        >
          info@ictkerala.org | +91 75 940 51437 <br /> © 2024 ICT Academy of
          Kerala
        </Typography>
      </div>
    </div>
  );
};

export default Homepage;
