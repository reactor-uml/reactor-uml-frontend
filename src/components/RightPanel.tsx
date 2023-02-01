import { Paper } from "@mui/material";
import { OutputMode } from "@/types/OutputModes";
import StringDisplay from "@/components/StringDisplay";
import OutputToggle from "@/components/OutputToggle";
import Result from "@/components/Result";

interface RightPanelProps {
  imageString: string;
  serverUrl: string;
  openModal: () => void;
  outputMode: OutputMode;
  setImageString: (s: string) => void;
  setOutputMode: (mode: OutputMode) => void;
}

export default function RightPanel(props: RightPanelProps) {
  return (
    <Paper
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1em",
        p: 1.3,
      }}
      elevation={0}
    >
      <OutputToggle
        setOutputMode={props.setOutputMode}
        outputMode={props.outputMode}
      />
      <StringDisplay
        imageString={props.imageString}
        setImageString={props.setImageString}
      />
      <Result
        imageString={props.imageString}
        serverUrl={props.serverUrl}
        openModal={props.openModal}
        outputMode={props.outputMode}
      />
    </Paper>
  );
}
