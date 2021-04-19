import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../../assets/images/php.png";
import project2 from "../../assets/images/php2.png";
import project3 from "../../assets/images/php3.png";
import project4 from "../../assets/images/reactjs.png";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    maxWidth: 345,
    height: "100%",
    margin: "3rem auto",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 3rem",
    },
  },
  media: {
    height: "100px",
  },
}));

const projects = [
  {
    name: "My PortFolio",
    description: `My portfolio(this website) bootstraed using create react app using Material UI as  component library.
    I'm a selft learner, I've learned reactJs and Material UI in my own interest and time`,
    image: project4,
    demo: "#",
  },
  {
    name: "Shades of Legacy",
    description: `Shades of Legacy is a project based of PHP, MYSQL & Wordpress where I'm the 
    sole developer in creating the backend and frontend including hosting. Shades of Legacy is to showcase artisry work and the 
    longterm goal is to integrate with Ecommerce where, purchase could be made.`,
    image: project1,
    demo: "https://shadesoflegacy.com/",
  },
  {
    name: "TCLI Foundation",
    description: `TCLI Foundation is a registered non-profit organization in Canada geared 
    towards effecting societal changes through literature, arts and culture. I've helped the team 
    build their donation page , social media campaigns, resources page etc`,
    image: project2,
    demo: "https://tclifoundation.ca/",
  },
  {
    name: "Towunmi Coker's Portfolio Project",
    description: `Towunmi Coker is the Founder of TCLI Foundation, a nonprofit organization that provides 
    education. I'm the sole developer who helped her create a portfolio for her. 
    This project is done in PHP Wordpress. I've created a plugin for wordpress where, it let's the external user 
    book a meeting and can be integrated with google calendar`,
    image: project3,
    demo: "https://towunmicoker.com/",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center" alignItems="stretch">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card className={classes.cardContainer}>
              <CardMedia
                className={classes.media}
                alt="Project 1"
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  target="_blank"
                  variant="contained"
                  color="primary"
                  href={project.demo}
                  alignItems="center"
                  justify="center"
                >
                  View Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
