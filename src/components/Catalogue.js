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
    title: "Cours competitifs",
    description:
      "Les camps compétitifs sont une semaine intensive de soccer et l’opportunité unique de s’entraîner avec des joueurs de bon niveau dans un environnement professionnel. Les joueurs auront la possibilité de repartir avec des compétences considérables, dans la maitrise des gestes techniques et des prises de décision",
    image: coursCompetitifsImage,
  },
  {
    id: 2,
    title: "Cours techniques",
    description:
      "Au cours de ce programme, les participants apprendront l’éventail complet de gestes techniques que tout bon joueur doit maîtriser ainsi que les habitudes de travail essentielles pour assurer une progression constante.",
    image: coursTechniquesImage,
  },
  {
    id: 3,
    title: "Cours experience",
    description:
      "Parfait pour les clubs ou les entreprises à la recherche d'une activité de team-building. 12 participants minimum, pour des groupes d'enfants et/ou adultes.",
    image: coursExperienceImage,
  },
  {
    id: 4,
    title: "Cours gardien au but",
    description:
      "Le programme Gardiens de but permet aux gardiens déjà familiers avec les techniques de bases d’intégrer de nouveaux aspects (techniques de déplacement, appuis, maitrise gestuelle, lecture du jeu) afin de passer un cap. L’objectif est d’enrichir le bagage technique du gardien et d’optimiser sa connaissance du poste pour être plus performant dans son club.",
    image: goalKeeperImage,
  },
  {
    id: 5,
    title: "Cours endurance",
    description:
      "Afin de mieux s’exprimer sur le terrain, un joueur doit développer son endurance, sa psychomotricité et découvrir le jeu collectif. Pour atteindre ces objectifs, les Écoles de soccer miseront sur le développement des six points psychomoteurs suivants : Équilibre - Coordination - Endurance - Synchronisation - Tonicité - Espace-temps.",
    image: coursEnduranceImage,
  },
  {
    id: 6,
    title: "Cours joueurs",
    description:
      "Le but de ce programme est d’optimiser la palette des gestes techniques appris au fil des années afin d’arriver à une excellence de niveau de jeu. Un travail est également réalisé sur l’intelligence du joueur afin de l’apprendre à faire les bons choix sur le terrain et sur la mentalité à adopter afin d’exceller avec son club.",
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
              Écoles de soccer - programmes offers
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
                    S'inscrire à un programme
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    to="/book"
                    component={Link}
                  >
                    Reserver un cours
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
