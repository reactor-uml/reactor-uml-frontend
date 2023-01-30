import { Paper, TextField } from "@mui/material";

interface StringDisplayProps {
  imageString: string;
  setImageString: (s: string) => void;
}
export default function StringDisplay(props: StringDisplayProps) {
  return (
    <Paper
      sx={{ p: 2, width: "100%", justifyContent: "center", display: "flex" }}
    >
      <TextField
        label={"Encoded String"}
        value={props.imageString}
        fullWidth
        onChange={(e) => props.setImageString(e.target.value)}
      />
    </Paper>
  );
}
