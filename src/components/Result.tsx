import { Box, Link } from "@mui/material";
import { OutputMode } from "@/types/OutputModes";

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
    <Box>
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
    </Box>
  );
}
