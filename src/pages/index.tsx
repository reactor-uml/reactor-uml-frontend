import Head from "next/head";

import {
  Box,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from "@mui/material";
import Editor from "@/components/Editor";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";
import { OutputMode } from "@/types/OutputModes";
import RightPanel from "@/components/RightPanel";
import Header from "@/components/Header";

interface HomeProps {
  serverUrl: string;
}

export default function Home(props: HomeProps) {
  const [imageString, setImageString] = useState<string>(
    "SoWkIImgAStDuIfEJin9LJ3YuahCoKnELT2rKqZAJ-9oICrB0SdY0G00"
  );
  const [modelOpen, setModelOpen] = useState<boolean>(false);
  const [outputMode, setOutputMode] = useState<OutputMode>(OutputMode.PNG);
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
    <>
      <Head>
        <title>ReactorUML</title>
        <meta name="description" content="React based plantuml webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Header themeToggle={toggleTheme} />
        <main>
          <ImageModal
            imageString={imageString}
            serverUrl={props.serverUrl}
            closeModal={() => setModelOpen(false)}
            modalOpen={modelOpen}
            outputMode={outputMode}
          />
          <Box
            sx={{
              display: "flex",
              pt: 0,
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
              gap: "1em",
              position: "static",
            }}
          >
            <Grid container justifyContent={"center"}>
              <Grid item md={7} lg={7} xs={12} sm={6}>
                <Editor
                  imageString={imageString}
                  setImageString={setImageString}
                  darkMode={darkMode}
                />
              </Grid>
              <Grid item lg={5} md={5} xs={12} sm={6}>
                <RightPanel
                  imageString={imageString}
                  serverUrl={props.serverUrl}
                  openModal={() => setModelOpen(true)}
                  outputMode={outputMode}
                  setImageString={setImageString}
                  setOutputMode={setOutputMode}
                />
              </Grid>
            </Grid>
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      serverUrl: process.env.SERVER_URL,
    },
  };
}
