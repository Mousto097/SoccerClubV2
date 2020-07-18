import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import { translate } from "react-i18next";

function Navbar(props) {
  const classes = useStyles();

  const { t } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    const value = event.target.getAttribute("value");
    console.log("I ==> choosed: ", value);
    props.onSelectLanguage(value);
    setAnchorEl(null);
  };

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
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem value="en" onClick={handleClose}>
              Francais
            </MenuItem>
            <MenuItem value="fre" onClick={handleClose}>
              English
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

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
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default Navbar;
