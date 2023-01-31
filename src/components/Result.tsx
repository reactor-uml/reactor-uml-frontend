import { Box, Paper } from "@mui/material";
import {useEffect, useState} from "react";

interface ResultProps {
  imageString: string;
  serverUrl: string;
  openModal: () => void;
}
export default function Result(props: ResultProps) {
  const [imageUrl, setImageUrl] = useState<string>("/reactor-full.png")
    useEffect(() => {
        setImageUrl(`${props.serverUrl}/${props.imageString}`)
    }, [props.imageString, props.serverUrl])
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
      <Box
        sx={{ objectFit: "scale-down", maxWidth: "100%", cursor: "pointer" }}
        component={"img"}
        src={imageUrl}
        alt={"result"}
        onClick={props.openModal}
      />
    </Paper>
  );
}
