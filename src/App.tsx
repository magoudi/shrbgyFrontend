import "./App.css";
import { Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import EnterancePage from "./pages/EnterancePage";
import FormPage from "./pages/FormPage";

declare module "@mui/material/styles" {
  interface TypeBackground {
    input: string;
  }
}
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#DDBA95", // Hover states and soft highlights
      main: "#C49A6C", // Base button and accent color
      dark: "#98724B", // Pressed states and deeper accents
      contrastText: "#050505",
    },
    secondary: {
      main: "#967751",
      light: "#967751", // Deep Gold / Brass
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#050505", // Rich Black
      paper: "#121212",
      input: "#0A0A0A", // Dark Surface
    },
    text: {
      primary: "#EAEAEA", // Soft White
      secondary: "#858585", // Muted Gray
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<EnterancePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
