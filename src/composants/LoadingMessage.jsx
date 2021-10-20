import React from "react";
import { Container, Alert } from "@mui/material";

const LoadingMessage = () => {
  return (
    <Container
      sx={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "Column",
      }}
    >
      <Alert severity="info">Chargement des données !</Alert>
    </Container>
  );
};

export default LoadingMessage;
