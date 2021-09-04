import React, { useState } from "react";
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
import Container from "@material-ui/core/Container";
import useStyles from "./SignUpStyle.js";
import { LOGIN } from "../navigation/CONSTANTS";
import { postUser } from "../services";
import { Input } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const classes = useStyles();
  const [confirmation, setConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const goToCreateUser = () => {
    var userDto = {
      name: name,
      role: role,
      password: password,
      email: email,
      phone: phone,
    };
    console.log(userDto);
    postUser(userDto);
    setConfirmation("your account is created successfully");
  };
  const emailTextHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const nameTextHandleChange = (event) => {
    setName(event.target.value);
  };
  const phoneTextHandleChange = (event) => {
    setPhone(event.target.value);
  };
  const passwordTextHandleChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="User Name"
                autoFocus
                onChange={nameTextHandleChange}
                value={name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="lname"
                onChange={phoneTextHandleChange}
                value={phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailTextHandleChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordTextHandleChange}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <label for="cars">Choose a role:</label>

              <select
                name="roles"
                id="roles"
                onSelect={(e) => setRole(e.options[e.selectedIndex].text)}
              >
                <option value="Manager">manager</option>
                <option value="Client">client</option>
              </select>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => goToCreateUser()}
          >
            Sign Up
          </Button>
          <button
            type="submit"
            class="waves-effect waves-light btn green"
            onClick={() => goToCreateUser()}
          >
            Create Account{" "}
          </button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href={LOGIN} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
