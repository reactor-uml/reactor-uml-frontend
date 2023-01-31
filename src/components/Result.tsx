import { Box, Paper } from "@mui/material";

interface ResultProps {
  imageString: string;
  serverUrl: string;
  openModal: () => void;
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
      <Box
        sx={{ objectFit: "scale-down", maxWidth: "100%", cursor: "pointer" }}
        component={"img"}
        src={`${props.serverUrl}/${props.imageString}`}
        alt={"result"}
        onClick={props.openModal}
      />
    </Paper>
  );
}
