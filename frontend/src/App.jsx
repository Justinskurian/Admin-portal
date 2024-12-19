import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Login from "./components/Login";
import AssignProject from "./components/AdminComponents/AssignProject";
import AdminAddMentor from "./components/AdminComponents/AdminAddMentor";
import AdminAddProject from "./components/AdminComponents/AdminAddProject";
import AdminContent from "./components/AdminComponents/AdminContent";
import AdminDashboard from "./components/AdminDashboard";
import MentorDash from "./components/MentorDash";
import MentorDashboard from "./components/MentorComponents/MentorDashboard";
import Reference from "./components/MentorComponents/Reference";


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
        <Route path="/admindash" element={<AdminDashboard child={<AdminContent/>} />}></Route>
        <Route path="/addmentor" element={<AdminDashboard child={<AdminAddMentor/>} />}></Route>
        <Route path="/addproject" element={<AdminDashboard child={<AdminAddProject/>} />}></Route>
        <Route path="/assignproject" element={<AdminDashboard child={<AssignProject/>} />}></Route>
        <Route path="/reference" element={<MentorDash child={<Reference/>}  />}></Route>
        <Route path="/mentordash" element={<MentorDash child={<MentorDashboard/>}  />}></Route>


      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
