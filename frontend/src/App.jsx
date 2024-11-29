import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import MentorDashboard from "./components/MentorDash";
import MentorForm from "./components/MentorForm"
import AdminDashboard from "./components/AdminDashboard";
import ProjectTopicForm from "./components/ProjectTopicForm";

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
        <Route path="/mentorform" element={<MentorForm/>}/>
        <Route path="/admindash" element={<AdminDashboard/>}/>
        <Route path="/projecttopic" element={<ProjectTopicForm/>}/>



      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
