import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ProgramCheckbox from "./ProgramCheckbox";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import { FormattedMessage, injectIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const { intl } = props;
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SportsSoccerIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {/* S'inscrire à un programme */}
          <FormattedMessage id="enroll.content.form.title" />
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={intl.formatMessage({
                  id: "enroll.content.form.first.name",
                })}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={intl.formatMessage({
                  id: "enroll.content.form.last.name",
                })}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={intl.formatMessage({
                  id: "enroll.content.form.email",
                })}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <ProgramCheckbox />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                // label="I want to receive inspiration, marketing promotions and updates via email."
                label={intl.formatMessage({
                  id: "enroll.content.form.promotion",
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {/* S'inscrire */}
            <FormattedMessage id="enroll.content.form.enroll" />
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default injectIntl(SignUp);
