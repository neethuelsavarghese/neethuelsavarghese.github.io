import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `about us`, path: `/about-us` },
  { title: `product`, path: `/product` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
  { title: `faq`, path: `/faq` },
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
