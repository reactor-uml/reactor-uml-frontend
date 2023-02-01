import CodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";

interface EditorProps {
  imageString: string;
  setImageString: (s: string) => void;
  darkMode: boolean;
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
    <CodeMirror
      value={uml}
      theme={props.darkMode ? "dark" : undefined}
      width={"auto"}
      minHeight={"100%"}
      height={"auto"}
      onChange={(e) => setUml(e)}
    />
  );
}
