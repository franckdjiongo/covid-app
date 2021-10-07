import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import React from "react";

const MyContainer = styled("div")(({ boxShadowColor }) => ({
  width: "100%",
  //margin: "0 auto",
  padding: "9px",
  //marginTop: "25px",
  borderBottom: 3,
  maxWidth: "90%",
  background: grey[900],
  borderRadius: 4,
  boxShadow: `0 1px 3px 3px ${boxShadowColor}`,
}));

const Card = ({ boxShadowColor, titre, children, resultat }) => {
  return (
    <MyContainer boxShadowColor={boxShadowColor}>
      <Stack direction="row">
        <Typography
          variant="h5"
          textAlign="left"
          component="h1"
          sx={{ flexGrow: 1 }}
        >
          {titre}
        </Typography>
        <Typography variant="h4" component="h1">
          {children}
        </Typography>
      </Stack>
      <Typography variant="h6" component="h1" color={boxShadowColor}>
        {resultat} cas
      </Typography>
    </MyContainer>
  );
};

export default Card;
