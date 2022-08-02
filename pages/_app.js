import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";
import Navbar from "../components/navbar";

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
      <main>
        <Navbar />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
