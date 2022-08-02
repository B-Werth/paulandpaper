import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";
import Navbar from "../components/navbar";
import News from "./news";

const darktheme = createTheme({
  palette: {
    mode: "dark",
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
    </ThemeProvider>
  );
}

export default MyApp;
