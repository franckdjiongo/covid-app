import React from "react";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import { useHistory } from "react-router-dom";

const MainBar = () => {
  let history = useHistory();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          position: "fixed",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => history.goBack()}
            aria-label="home"
            size="large"
          >
            <PublicIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h4"
            textAlign="center"
            component="div"
            color="primary"
            sx={{ flexGrow: 1 }}
          >
            COVID APP
          </Typography>
          <IconButton aria-label="home" size="large">
            <SearchIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainBar;
