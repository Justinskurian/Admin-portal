import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

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
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
