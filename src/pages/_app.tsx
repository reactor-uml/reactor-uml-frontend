import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const componentOverride = {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#fff",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#fff",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.2,
          backgroundColor: "#a6a0a0",
          ".Mui-checked.Mui-checked + &": {
            opacity: 0.7,
            backgroundColor: "#a6a0a0",
          },
        },
      },
    },
  };

  const darkTheme = createTheme({
    palette: { mode: "dark" },
    components: componentOverride,
  });
  const lightTheme = createTheme({
    palette: { mode: "light" },
    components: componentOverride,
  });
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header themeToggle={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
