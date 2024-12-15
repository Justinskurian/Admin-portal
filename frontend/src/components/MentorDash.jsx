import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MentorDashboard = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const mentorId = sessionStorage.getItem("mentorId")
      console.log("mentor ID",mentorId)
      if(!mentorId){
        console.log("Mentor Id not found")
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:3000/mentor/project/${mentorId}`
        );
        console.log("projects response:",res.data)
        setProjects(res.data.projects);
      } catch (error) {
        console.log("Error fetching", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      {/* Header */}
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
                    color: "#0099cc",
                    fontWeight: 600,
                    fontSize: "2.1rem",
                    textAlign: "left",
                    marginTop: "5px",
                    lineHeight: "1.1",
                  }}
                >
                  MENTOR
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    fontSize: "1.1rem",
                    textAlign: "left",
                  }}
                >
                  Dashboard
                </Typography>
              </Box>
              <Link to={"/login"}>
                <Button className="button">Logout</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      <Container sx={{ mt: 4 }} style={{ marginTop: "5%" }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Card sx={{ width: "30%" }}>
            <CardContent>
              {projects.map((project) => (
                <ListItem key={project._id}>
                  <ListItemText
                    primary={project.title}
                    secondary={project.description}
                    
                  />
                                <Button size="small" onClick={() => handleSelectProject(1)}>
                View Submissions
              </Button>
                </ListItem>
              ))}
            </CardContent>
            <CardActions>

            </CardActions>
          </Card>
        </div>

        {selectedProject && (
          <div>
            <Typography variant="h5" sx={{ mt: 4 }}>
              Submissions for Project
            </Typography>

            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel>Filter</InputLabel>
              <Select value={filter} onChange={handleFilterChange}>
                <MenuItem value="">Evaluated</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
                <MenuItem value="pedning">Pending</MenuItem>
              </Select>
            </FormControl>

            <TableContainer sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Marks</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TextField placeholder="Name" size="small" />
                    </TableCell>
                    <TableCell>
                      <TextField placeholder="Status" size="small" />
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        placeholder="Marks"
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField placeholder="Comments" size="small" />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                      >
                        View Project
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                      >
                        Save
                      </Button>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}

        <div>
          <Typography variant="h5" sx={{ mt: 4 }}>
            Reference Materials
          </Typography>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link to={"/reference"}>
              {" "}
              <center>
                <Button className="addButton">Add</Button>
              </center>
            </Link>
            <Link to={"/reference"}>
              <Button className="deleteButton">Delete</Button>
            </Link>
            <Link to={"/reference"}>
              {" "}
              <center>
                <Button className="addButton">View</Button>
              </center>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MentorDashboard;
