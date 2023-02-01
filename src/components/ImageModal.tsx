import { Box, Modal } from "@mui/material";
import { OutputMode } from "@/types/OutputModes";

interface ImageModalProps {
  imageString: string;
  serverUrl: string;
  modalOpen: boolean;
  outputMode: OutputMode;

  closeModal: () => void;
}

export default function ImageModal(props: ImageModalProps) {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80vw",
    maxHeight: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    objectFit: "contain",
  };
  return (
    <Modal open={props.modalOpen} onClose={props.closeModal}>
      <Box
        component={"img"}
        src={`${props.serverUrl}/${props.outputMode.valueOf()}/${
          props.imageString
        }`}
        sx={style}
      ></Box>
    </Modal>
  );
}
