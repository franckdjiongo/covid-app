import React from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          position: "fixed",
          borderTop: (t) => `1px solid ${t.palette.divider}`,
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            textAlign="center"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {new Date().getFullYear()} Fait par{" "}
            {
              <Link href="https://www.franckdjiongo.ca/" underline="hover">
                Armel Franck Djiongo
              </Link>
            }
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
