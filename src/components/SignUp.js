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
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignUp(props) {
  const { intl } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [errorFirstName, setErrorFirstName] = React.useState("");
  const [errorLastName, setErrorLastName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");

  const letterOnlyRegex = "[a-zA-Z]+";

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onChange = (event) => {
    if (event.target.value.match(letterOnlyRegex)) {
      if (event.target.id == "firstName") {
        setErrorFirstName("");
      }
      if (event.target.id == "lastName") {
        setErrorLastName("");
      }
      if (event.target.id == "email") {
        setErrorEmail("");
      }
    } else {
      if (event.target.id == "firstName") {
        setErrorFirstName(<FormattedMessage id="form.error.alphabet.field" />);
      }
      if (event.target.id == "lastName") {
        setErrorLastName(<FormattedMessage id="form.error.alphabet.field" />);
      }
      if (event.target.id == "email") {
        setErrorEmail(<FormattedMessage id="form.error.alphabet.field" />);
      }
    }
  };

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
                error={errorFirstName.length === 0 ? false : true}
                helperText={errorFirstName}
                onChange={onChange.bind(this)}
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
                error={errorLastName.length === 0 ? false : true}
                helperText={errorLastName}
                onChange={onChange.bind(this)}
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
                error={errorEmail.length === 0 ? false : true}
                helperText={errorEmail}
                onChange={onChange.bind(this)}
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
          <Tooltip
            TransitionComponent={Zoom}
            title={intl.formatMessage({
              id: "enroll.content.form.enroll.tooltip",
            })}
          >
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              {/* S'inscrire */}
              <FormattedMessage id="enroll.content.form.enroll" />
            </Button>
          </Tooltip>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {/* This is a success message! */}
              <FormattedMessage id="enroll.content.form.snacbar.complete" />
            </Alert>
          </Snackbar>
        </form>
      </div>
    </Container>
  );
}
export default injectIntl(SignUp);
