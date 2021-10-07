import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DangerousIcon from "@mui/icons-material/Dangerous";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Card from "./Card";
import { blue, red, grey, green } from "@mui/material/colors";
import { Grid } from "@mui/material";
import MyContainer from "./MyContainer";

const MesCards = ({ borderHaut }) => {
  return (
    <MyContainer borderHaut={borderHaut} shadow="none">
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={{ xs: 2, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={grey[700]}
            titre={"CAS TOTAL"}
            resultat="874 000"
          >
            <PublicIcon sx={{ color: `${grey[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={blue[700]}
            titre={"CAS ACTIFS"}
            resultat="8656 54678"
          >
            <LocalHospitalIcon sx={{ color: `${blue[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={green[700]}
            titre={"RETABLIS"}
            resultat="7878 4456456"
          >
            <HealthAndSafetyIcon sx={{ color: `${green[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={red[700]}
            titre={"MORTS"}
            resultat="7789 045645600"
          >
            <DangerousIcon sx={{ color: `${red[700]}` }} />
          </Card>
        </Grid>
      </Grid>
    </MyContainer>
  );
};

export default MesCards;
