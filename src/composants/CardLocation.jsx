import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReactCountryFlag from "react-country-flag";

import { Typography, CardMedia, CardContent, Card, Box } from "@mui/material";

const CardLocation = ({ infoLocation }) => {
  let today = new Date();
  let dateToday =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <Box
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      m={3}
    >
      <Card>
        <CardHeader
          avatar={
            <IconButton aria-label="settings">
              <LocationOnIcon />
            </IconButton>
          }
          title="Votre position actuellement"
          subheader={dateToday}
        />
        <CardMedia alt="Flag Country">
          <ReactCountryFlag
            countryCode={infoLocation.code}
            style={{
              fontSize: "15rem",
              lineHeight: "2em",
            }}
            svg
          />
        </CardMedia>
        <CardContent>
          <Typography
            sx={{ width: "auto" }}
            gutterBottom
            variant="h4"
            component="h1"
          >
            {infoLocation.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h1">
            {infoLocation.city}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Latitude : {infoLocation.latitude} <br />
            Longitude : {infoLocation.longitude} <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardLocation;
