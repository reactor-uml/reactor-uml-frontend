import Head from "next/head";

import { Container, Grid } from "@mui/material";
import Editor from "@/components/Editor";
import Result from "@/components/Result";
import { useState } from "react";
import StringDisplay from "@/components/StringDisplay";
import ImageModal from "@/components/ImageModal";

interface HomeProps {
  serverUrl: string;
}

export default function Home(props: HomeProps) {
  const [imageString, setImageString] = useState<string>(
    "AqvEp4bLCEBYIip9J4vLqBLJICfF0W00"
  );
  const [modelOpen, setModelOpen] = useState<boolean>(false);
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
      <main>
        <ImageModal
          imageString={imageString}
          serverUrl={props.serverUrl}
          closeModal={() => setModelOpen(false)}
          modalOpen={modelOpen}
        />
        <Container
          sx={{
            display: "flex",
            pt: "2em",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
            gap: "1em",
            position: "static",
          }}
        >
          <StringDisplay
            setImageString={setImageString}
            imageString={imageString}
          />
          <Grid container spacing={6} justifyContent={"center"}>
            <Grid item md={6} lg={6} xs={12} sm={6}>
              <Editor
                imageString={imageString}
                setImageString={setImageString}
              />
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={6}>
              <Result
                openModal={() => setModelOpen(true)}
                serverUrl={props.serverUrl}
                imageString={imageString}
              />
            </Grid>
          </Grid>
        </Container>
      </main>
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
