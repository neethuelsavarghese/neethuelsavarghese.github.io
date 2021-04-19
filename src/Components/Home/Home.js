import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../assets/avatar.png";
import Intro from "../Intro/Intro";
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),

    /* [theme.breakpoints.down("sm")]: {
      marginTop: "600px",
    },*/
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Grid container justify="center">
        <Grid container justify="center">
          <Avatar
            className={classes.avatar}
            src={avatar}
            alt="Neethu Varghese"
          />
        </Grid>
        <Grid container justify="center">
          <Typography className={classes.title} variant="h4">
            <Typed strings={["Neethu Varghese"]} typeSpeed={40} />
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Typography className={classes.subtitle} variant="h5">
            <Typed
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "React Js",
                "Vanilla Js",
                "PHP",
                "Material UI",
                "Redux",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
        </Grid>
      </Grid>

      <Intro />
    </Grid>
  );
};

export default Home;
