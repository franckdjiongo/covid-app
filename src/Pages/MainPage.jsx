import { Button, Container } from "@mui/material";
import CardLocation from "../composants/CardLocation";
import Information from "../composants/Information";
import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

const MainPage = ({ infoLocation, data, erreurDataAll }) => {
  let history = useHistory();
  if (erreurDataAll) return <pre>{JSON.stringify(erreurDataAll, null, 2)}</pre>;
  return (
    <>
      {data ? (
        <Container
          sx={{
            paddingTop: "15rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "Column",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <CardLocation infoLocation={infoLocation} />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Information data={data} />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            size="large"
            sx={{
              marginTop: "2rem",
              marginBottom: "2rem",
              width: "fit-content",
              paddingLeft: "5rem",
              paddingRight: "5rem",
            }}
            onClick={() => history.push("/global")}
          >
            GLOBAL
          </Button>
        </Container>
      ) : (
        <div>
          <h1>Chargement des données</h1>
        </div>
      )}
    </>
  );
};

export default MainPage;
