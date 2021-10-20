import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import DangerousIcon from "@mui/icons-material/Dangerous";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Card from "./Card";
import { blue, red, grey, green } from "@mui/material/colors";
import { Grid } from "@mui/material";
import MyContainer from "./MyContainer";

const MesCards = ({ borderHaut, data }) => {
  const [casTotal, casActif, casRetablis, casMorts] = data;

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
            boxShadowColor={grey[500]}
            titre={"CAS TOTAL"}
            resultat={casTotal}
          >
            <PublicIcon sx={{ color: `${grey[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={blue[700]}
            titre={"CAS ACTIFS"}
            resultat={casActif}
          >
            <LocalHospitalIcon sx={{ color: `${blue[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card
            boxShadowColor={green[700]}
            titre={"RETABLIS"}
            resultat={casRetablis}
          >
            <HealthAndSafetyIcon sx={{ color: `${green[700]}` }} />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={3}>
          <Card boxShadowColor={red[700]} titre={"MORTS"} resultat={casMorts}>
            <DangerousIcon sx={{ color: `${red[700]}` }} />
          </Card>
        </Grid>
      </Grid>
    </MyContainer>
  );
};

export default MesCards;
