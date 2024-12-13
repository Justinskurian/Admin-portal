import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import MentorDashboard from "./components/MentorDash";
import ProjectTopicForm from "./components/ProjectTopicForm";
import AssignProject from "./components/AdminComponents/AssignProject";
import AdminAddMentor from "./components/AdminComponents/AdminAddMentor";
import AdminAddProject from "./components/AdminComponents/AdminAddProject";
import AdminContent from "./components/AdminComponents/AdminContent";
import AdminDashboard from "./components/AdminDashboard";
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
        <Route path="/projecttopic" element={<ProjectTopicForm/>}/>
        <Route path="/admindash" element={<AdminDashboard child={<AdminContent/>} />}></Route>
        <Route path="/addmentor" element={<AdminDashboard child={<AdminAddMentor/>} />}></Route>
        <Route path="/addproject" element={<AdminDashboard child={<AdminAddProject/>} />}></Route>
        <Route path="/assignproject" element={<AdminDashboard child={<AssignProject/>} />}></Route>
        <Route path="/reference" element={<Reference/>}></Route>



      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
