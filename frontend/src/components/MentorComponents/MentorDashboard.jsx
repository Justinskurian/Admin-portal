import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
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
  Button,
  Paper,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";

const MentorDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editSubmission, setEditSubmission] = useState(null);
  const [filter, setFilter] = useState("");

  // Fetching projects
  useEffect(() => {
    const fetchProjects = async () => {
      const mentorId = sessionStorage.getItem("mentorId");
      if (!mentorId) {
        console.log("Mentor ID not found");
        return;
      }
      try {
        const res = await axios.get(
          `https://project-admin-mentor-portal.onrender.com/mentor/project/${mentorId}`
        );
        setProjects(res.data.projects);
      } catch (error) {
        console.log("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleSelectProject = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredSubmissions = () => {
    const project = projects.find((p) => p._id === selectedProject);
    if (!project) return [];
    return project.submissions.filter((submission) =>
      filter ? submission.evaluationStatus === filter : true
    );
  };

  const handleEditSubmission = (submission) => {
    setEditSubmission(submission);
  };

  const handleSaveSubmission = async () => {
    if (!editSubmission || !selectedProject) return;

    try {
      const projectId = selectedProject;
      const { _id: submissionId, ...updatedSubmission } = editSubmission;

      const res = await axios.put(
        `https://project-admin-mentor-portal.onrender.com/mentor/project/${projectId}/submission/${submissionId}`,
        updatedSubmission
      );

      if (res.status === 200) {
        setProjects((prevProjects) =>
          prevProjects.map((project) => {
            if (project._id === projectId) {
              return {
                ...project,
                submissions: project.submissions.map((sub) =>
                  sub._id === submissionId ? { ...sub, ...updatedSubmission } : sub
                ),
              };
            }
            return project;
          })
        );
        setEditSubmission(null);
      }
    } catch (error) {
      console.log("Error updating submission:", error);
    }
  };

  const handleDeleteSubmission = async (submissionId) => {
    try {
      const projectId = selectedProject;
      const res = await axios.delete(
        `https://project-admin-mentor-portal.onrender.com/mentor/project/${projectId}/submission/${submissionId}`
      );

      if (res.status === 200) {
        setProjects((prevProjects) =>
          prevProjects.map((project) => {
            if (project._id === projectId) {
              return {
                ...project,
                submissions: project.submissions.filter(
                  (sub) => sub._id !== submissionId
                ),
              };
            }
            return project;
          })
        );
        console.log("Submission deleted successfully");
      }
    } catch (error) {
      console.log("Error deleting submission:", error);
    }
  };

  return (
    <Container sx={{ mt: 4 }} >
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Card sx={{ width: "100%", mb: 4, }}>
        <CardContent>
          <FormControl sx={{ mt: 2, minWidth: 120  }}>
            <InputLabel>Filter</InputLabel>
            <Select value={filter} onChange={handleFilterChange}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Evaluated">Evaluated</MenuItem>
            </Select>
          </FormControl>
          {projects.map((project) => (
            <div key={project._id}>
<Box sx={{ display: "flex", flexDirection: "column", padding: "10px" }}>
  <Typography variant="h6">{project.title}</Typography>
  <Typography>{project.description}</Typography>

  <Box sx={{ display: "flex", justifyContent: "flex-end", width: "80%" }}>
    <Button onClick={() => handleSelectProject(project._id)}>
      {selectedProject === project._id ? "Hide Submissions" : "View Submissions"}
    </Button>
  </Box>
</Box>

              {selectedProject === project._id && (
                <TableContainer component={Paper} style={{ marginTop: "1rem" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Evaluation Status</TableCell>
                        <TableCell>Marks</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {getFilteredSubmissions().map((submission) => (
                        <TableRow key={submission._id}>
                          <TableCell>
                            {editSubmission &&
                            editSubmission._id === submission._id ? (
                              <TextField
                                value={editSubmission.studentName}
                                onChange={(e) =>
                                  setEditSubmission({
                                    ...editSubmission,
                                    studentName: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              submission.studentName
                            )}
                          </TableCell>
                          <TableCell>
                            {editSubmission &&
                            editSubmission._id === submission._id ? (
                              <Select
                                value={editSubmission.evaluationStatus}
                                onChange={(e) =>
                                  setEditSubmission({
                                    ...editSubmission,
                                    evaluationStatus: e.target.value,
                                  })
                                }
                              >
                                <MenuItem value="Pending">Pending</MenuItem>
                                <MenuItem value="Completed">Completed</MenuItem>
                                <MenuItem value="Evaluated">Evaluated</MenuItem>
                              </Select>
                            ) : (
                              submission.evaluationStatus
                            )}
                          </TableCell>
                          <TableCell>
                            {editSubmission &&
                            editSubmission._id === submission._id ? (
                              <TextField
                                type="number"
                                value={editSubmission.marks || ""}
                                onChange={(e) =>
                                  setEditSubmission({
                                    ...editSubmission,
                                    marks: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              submission.marks || "Not Evaluated"
                            )}
                          </TableCell>
                          <TableCell>
                            {editSubmission &&
                            editSubmission._id === submission._id ? (
                              <TextField
                                value={editSubmission.comments}
                                onChange={(e) =>
                                  setEditSubmission({
                                    ...editSubmission,
                                    comments: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              submission.comments || "No Comments"
                            )}
                          </TableCell>
                          <TableCell>
                            {editSubmission &&
                            editSubmission._id === submission._id ? (
                              <Button onClick={handleSaveSubmission}>
                                Save
                              </Button>
                            ) : (
                              <>
                                <Button
                                  onClick={() =>
                                    handleEditSubmission(submission)
                                  }
                                >
                                  Edit
                                </Button>
                                <Button
                                  color="error"
                                  onClick={() =>
                                    handleDeleteSubmission(submission._id)
                                  }
                                >
                                  Delete
                                </Button>
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default MentorDashboard;
