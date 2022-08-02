import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import { red, orange } from "@mui/material/colors";
import Navbar from "../components/navbar";
import News from "./news";

import Button from "@mui/material/Button";

const darktheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: red[500],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darktheme}>
      <CssBaseline />
      <Navbar />
      <News />
      <Button variant="solid" color="red">
        hi
      </Button>
    </ThemeProvider>
  );
}

export default MyApp;
