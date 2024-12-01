import React, { useState } from "react";
import { AppBar,  Toolbar,  Typography,  Container,  Card,  CardContent,  CardActions,  Button,  TextField,  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Select, MenuItem,  InputLabel, FormControl,
} from "@mui/material";

const MentorDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSelectProject = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mentor Dashboard
          </Typography>
          <Button className="button">Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <div style={{ display: "flex", gap: "1rem" }}>
          
          <Card sx={{ width: "30%" }}>
            <CardContent>
              <Typography variant="h6">Project Title</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleSelectProject(1)}>
                View Submissions
              </Button>
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
                      <TextField type="number" placeholder="Marks" size="small" />
                    </TableCell>
                    <TableCell>
                      <TextField placeholder="Comments" size="small" />
                    </TableCell>
                    <TableCell>
                    <Button variant="contained" color="secondary" size="small">
                          View Project
                        </Button>
                      <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
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
          <TextField
            label="Add Reference Material"
            fullWidth
            placeholder="Enter reference material title or link"
            sx={{ mt: 2 }}
          />
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Button className="button">
              Add Material
            </Button>
            <Button className="button">
              Delete Material
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MentorDashboard;
