import { Container, Typography, Grid } from "@mui/material";
import React from "react";

const Introduction = ({ nombrePaysAffecte }) => {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: "bold", letterSpacing: 5 }}
        >
          GLOBAL
        </Typography>
        <Typography
          variant="h4"
          component="p"
          color="error.dark"
          textAlign="center"
          alignItems="center"
        >
          Pays affectés : {nombrePaysAffecte}
        </Typography>
      </Grid>
    </Container>
  );
};

export default Introduction;
