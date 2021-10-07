import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

const MyContainer = styled("div")(({ borderHaut, shadow }) => ({
  margin: "0 auto",
  width: "100%",
  maxWidth: "100%",
  padding: "9px",
  marginTop: "3rem",
  marginBottom: "3rem",
  borderTop: borderHaut === "none" ? "0" : `1px solid ${grey[700]}`,
  boxShadow:
    shadow === "none"
      ? "none"
      : "rgba(185, 180, 180, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
}));

export default MyContainer;
