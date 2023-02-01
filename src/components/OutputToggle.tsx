import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { OutputMode } from "@/types/OutputModes";

interface OutputToggleProps {
  setOutputMode: (mode: OutputMode) => void;
  outputMode: OutputMode;
}

export default function OutputToggle(props: OutputToggleProps) {
  return (
    <Paper sx={{ p: 2, mr: "auto" }}>
      <FormControl>
        <FormLabel>Output Mode</FormLabel>
        <RadioGroup
          row
          name="row-radio-buttons-group"
          value={props.outputMode.valueOf().toUpperCase()}
          onChange={(e) => {
            props.setOutputMode(
              OutputMode[e.target.value as keyof typeof OutputMode]
            );
          }}
        >
          <FormControlLabel value="PNG" control={<Radio />} label="PNG" />
          <FormControlLabel value="SVG" control={<Radio />} label="SVG" />
          <FormControlLabel value="TXT" control={<Radio />} label="ASCII" />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
