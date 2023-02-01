import { Box, Link, Paper, TextField, Typography } from "@mui/material";
import { OutputMode } from "@/types/OutputModes";
import { useEffect, useState } from "react";

interface ResultProps {
  imageString: string;
  serverUrl: string;
  openModal: () => void;
  outputMode: OutputMode;
}

function ImageDisplay(props: ResultProps) {
  return (
    <Box
      sx={{ objectFit: "scale-down", maxWidth: "100%", cursor: "pointer" }}
      component={"img"}
      src={`${props.serverUrl}/${props.outputMode.valueOf()}/${
        props.imageString
      }`}
      alt={"result"}
      onClick={props.openModal}
    />
  );
}

function TextDisplay(props: ResultProps) {
  return (
    <Link
      href={`${props.serverUrl}/${props.outputMode.valueOf()}/${
        props.imageString
      }`}
      target={"_blank"}
    >
      Click for text diagram
    </Link>
  );
}
export default function Result(props: ResultProps) {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        p: 1.3,
      }}
      elevation={3}
    >
      {props.outputMode !== OutputMode.TXT ? (
        <ImageDisplay
          imageString={props.imageString}
          serverUrl={props.serverUrl}
          openModal={props.openModal}
          outputMode={props.outputMode}
        />
      ) : (
        <TextDisplay
          imageString={props.imageString}
          serverUrl={props.serverUrl}
          openModal={props.openModal}
          outputMode={props.outputMode}
        />
      )}
      {/*<ImageDisplay*/}
      {/*  imageString={props.imageString}*/}
      {/*  serverUrl={props.serverUrl}*/}
      {/*  openModal={props.openModal}*/}
      {/*  outputMode={props.outputMode}*/}
      {/*/>*/}
    </Paper>
  );
}
