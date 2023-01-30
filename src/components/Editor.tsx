import { Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface EditorProps {
  imageString: string;
  setImageString: (s: string) => void;
}
export default function Editor(props: EditorProps) {
  const plantumlEncoder = require("plantuml-encoder");
  const initialValue = plantumlEncoder.decode(props.imageString);
  const [uml, setUml] = useState<string>(initialValue);

  useEffect(() => {
    setUml(plantumlEncoder.decode(props.imageString));
  }, [plantumlEncoder, props.imageString]);

  useEffect(() => {
    const timeOut = setTimeout(
      () => props.setImageString(plantumlEncoder.encode(uml)),
      200
    );
    return () => clearTimeout(timeOut);
  }, [props, uml, plantumlEncoder]);

  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        p: 1.3,
        display: "flex",
        alignItems: "center",
      }}
      elevation={3}
    >
      <TextField
        id="outlined-multiline-static"
        label="plantuml"
        maxRows={25}
        minRows={5}
        multiline
        fullWidth
        value={uml}
        onChange={(e) => setUml(e.target.value)}
      />
    </Paper>
  );
}
