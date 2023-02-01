import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import GitHub from "@mui/icons-material/GitHub";
import LightMode from "@mui/icons-material/LightMode";
import DarkMode from "@mui/icons-material/DarkMode";

interface HeaderProps {
  themeToggle: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Image src={"/nuclear.png"} alt={"logo"} width={50} height={50} />
          <Typography variant={"h4"}>ReactorUML</Typography>
        </Box>
        <IconButton
          onClick={() =>
            window.open(
              "https://github.com/reactor-uml/reactor-uml-frontend",
              "_blank"
            )
          }
        >
          <GitHub style={{ color: "#fff" }} />
        </IconButton>
        <Stack direction="row" spacing={-0.4} alignItems="center">
          <LightMode style={{ color: "#fff" }} />
          <Switch
            sx={{
              color: "#fff",
              "& .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#aab4be",
                borderRadius: 20 / 2,
              },
            }}
            defaultChecked
            onChange={props.themeToggle}
          />
          <DarkMode style={{ color: "#fff" }} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
