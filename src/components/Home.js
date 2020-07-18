import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src="logo.png" alt="logo" className={classes.logo} />
          <Typography component="h1" variant="h3" gutterBottom>
            A vos crampons!
          </Typography>
          <Typography component="h1" variant="h5" gutterBottom>
            BIENVENUE À L'ECOLE DE SOCCER: A VOS CRAMPONS
          </Typography>
          <Typography variant="body1" gutterBottom>
            A VOS CRAMPONS! est l'école officielle de football d'Ottawa au
            CANADA offrant une occasion unique à tous les amateurs de football
            âgés de 4 à 16 ans de partager les valeurs d'un club axé sur
            l'excellence et la passion, reconnu internationalement pour son
            savoir-faire et la qualité de son développement des jeunes joueurs.
          </Typography>
          <Button
            color="primary"
            to="/explore"
            component={Link}
            variant="contained"
            className={classes.submit}
          >
            Voir nos programmes
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${require("../img/banner.jpg")})`,
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
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    maxWidth: 150,
  },
}));

export default Home;
