import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../assets/tech.jpeg";
import headerimage from "../../assets/main-header.png";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://neethuelsavarghese.github.io/">
        Portfolio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  headerText: {
    fontSize: "1.5rem",
  },
  contactimg: {
    boxShadow: 0,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" className={classes.headerText}>
            Connect with me
          </Typography>

          <img
            width="750"
            border="0"
            src={headerimage}
            className={classes.contactimg}
          />

          <Box display="flex">
            <Avatar className={classes.avatar}>
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/neethuelsavarghese")
                }
              />
            </Avatar>
            <Avatar className={classes.avatar}>
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/neethu-varghese-5b1246a0/"
                  )
                }
              />
            </Avatar>
            <Avatar className={classes.avatar}>
              <InstagramIcon />
            </Avatar>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
