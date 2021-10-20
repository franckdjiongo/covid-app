import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import donneeInformation from "../data/donneeInformation";

const Information = ({ data }) => {
  return (
    <Card>
      <Stack
        direction="column"
        spacing={3}
        textAlign="center"
        alignItems="center"
        m={3}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", letterSpacing: 5 }}
        >
          CAS
        </Typography>
        {!data ? (
          <div>
            <h1>Chargement des données</h1>
          </div>
        ) : (
          Object.values(donneeInformation(data)).map((typography, key) => (
            <Typography
              key={key}
              variant="h4"
              component="p"
              color={typography.color}
              textAlign="center"
              alignItems="center"
            >
              {typography.name}
              {typography.content}
            </Typography>
          ))
        )}
      </Stack>
    </Card>
  );
};

export default Information;
