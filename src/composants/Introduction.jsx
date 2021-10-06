import { Container, Typography, Grid } from "@mui/material";
import React from "react";

const Introduction = ({ nombrePaysAffecte }) => {
  return (
    <Container sx={{ mt: 5 }}>
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
        <Typography variant="h4" component="p" color="red">
          Pays affectés : {nombrePaysAffecte}
        </Typography>
      </Grid>
    </Container>
  );
};

export default Introduction;
