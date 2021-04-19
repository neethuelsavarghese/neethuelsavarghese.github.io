import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../assets/tech.jpeg";
import Box from "@material-ui/core/Box";

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
    color: "#d2b48c",
    fontSize: "1.5rem",
  },
  IntroText: {
    color: "#d2b48c",
    fontSize: "1.5rem",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={4}>
        <Typography component="div" className={classes.IntroText}>
          Web developer who likes to do things right. I help in creating
          scalable and maintainable applications using ReactJS, Drupal,
          wordpress that use best practices and that extend existing
          technologies, libraries and APIs. I'm willing to do volunteer jobs
          which involves programming also I'm open to Full Time /Contract jobs
          anywhere Canada or USA. Contact me at @ neethuelsavarghese93@gmail.com
        </Typography>
        <div className={classes.paper}>
          <Typography component="h2" className={classes.headerText}>
            Connect with me
          </Typography>

          <Box display="flex" boxShadow={0}>
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
              <EmailIcon
                onClick={() =>
                  window.open("mailto:neethuelsavarghese93@gmail.com")
                }
              />
            </Avatar>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
