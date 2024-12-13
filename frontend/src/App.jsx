import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import MentorDashboard from "./components/MentorDash";
import AdminDashboard from "./components/AdminDashboard";
import ProjectTopicForm from "./components/ProjectTopicForm";
import AssignProject from "./components/AssignProject";
import Sidebar from "./components/Sidebar";
import Reference from "./components/Reference";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mentordash" element={<MentorDashboard />} />
        <Route path="/admindash" element={<AdminDashboard child={<AssignProject/>}/>}/>
        <Route path="/projecttopic" element={<ProjectTopicForm/>}/>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/reference" element={<Reference/>}></Route>

      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
