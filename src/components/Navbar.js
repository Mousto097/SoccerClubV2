import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="logo.png" alt="logo" className={classes.logo} />
          <Typography variant="h5" className={classes.title}>
            A vos crampons
          </Typography>
          <Button color="inherit" to="/" component={Link}>
            Home
          </Button>
          <Button color="inherit" to="/explore" component={Link}>
            Nos programmes
          </Button>
          <Button color="inherit" to="/enroll" component={Link}>
            S'inscrire à un programme
          </Button>
          <Button color="inherit" to="/book" component={Link}>
            Reserver un cours
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: 50,
  },
}));

export default Navbar;
