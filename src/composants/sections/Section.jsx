import React from "react";
import MyContainer from "../MyContainer";

import { styled } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import MesCards from "../MesCards";

const Circle = styled("div")(({ color }) => ({
  borderRadius: "50%",
  width: "1.5rem",
  height: "1.5rem",
  background: `${color}`,
}));

const Wrapper = styled("div")({
  marginTop: "1rem",
  marginBottom: "-2rem",
});

const Section = ({ title, color, resultat }) => {
  return (
    <MyContainer>
      <Wrapper>
        <Stack direction="row" spacing={2} alignItems="baseline">
          <Circle color={color} />
          <Typography variant="h4" component="h1" fontWeight="bold">
            {title}
          </Typography>
        </Stack>
        <MesCards borderHaut={"none"} />
      </Wrapper>
    </MyContainer>
  );
};

export default Section;
