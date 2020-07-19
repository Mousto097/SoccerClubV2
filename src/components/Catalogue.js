import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import bannerImage from "../img/banner.jpg";
import coursJoueurImage from "../img/cours-joueurs.jpg";
import goalKeeperImage from "../img/goal-keeper.jpg";
import coursTechniquesImage from "../img/cours-techniques.jpg";
import coursCompetitifsImage from "../img/cours-competitifs.jpg";
import coursExperienceImage from "../img/cours-experience.jpg";
import coursEnduranceImage from "../img/cours-endurance.jpg";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "0%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];
const cardsData = [
  {
    id: 1,
    title: <FormattedMessage id="programs.card.competitif.title" />,
    description: <FormattedMessage id="programs.card.competitif.description" />,
    image: coursCompetitifsImage,
  },
  {
    id: 2,
    title: <FormattedMessage id="programs.card.techniques.title" />,
    description: <FormattedMessage id="programs.card.techniques.description" />,
    image: coursTechniquesImage,
  },
  {
    id: 3,
    title: <FormattedMessage id="programs.card.experience.title" />,
    description: <FormattedMessage id="programs.card.experience.description" />,
    image: coursExperienceImage,
  },
  {
    id: 4,
    title: <FormattedMessage id="programs.card.gardien.title" />,
    description: <FormattedMessage id="programs.card.gardien.description" />,
    image: goalKeeperImage,
  },
  {
    id: 5,
    title: <FormattedMessage id="programs.card.endurance.title" />,
    description: <FormattedMessage id="programs.card.endurance.description" />,
    image: coursEnduranceImage,
  },
  {
    id: 6,
    title: <FormattedMessage id="programs.card.jouers.title" />,
    description: <FormattedMessage id="programs.card.jouers.description" />,
    image: coursJoueurImage,
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {/* Écoles de soccer - programmes offers */}
              <FormattedMessage id="programs.content.title" />
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    to="/enroll"
                    component={Link}
                  >
                    {/* S'inscrire à un programme */}
                    <FormattedMessage id="programs.content.enroll.button" />
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    to="/book"
                    component={Link}
                  >
                    {/* Reserver un cours */}
                    <FormattedMessage id="programs.content.book.button" />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cardsData.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    src={card.image}
                    component="img"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
