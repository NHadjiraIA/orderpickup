import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
// import useStyles from "./LoginStyle.js";
import { postLogin, getUserDetails } from "../services";
import { MAP, SIGNUP, VENDOR_DASHBOARD } from "../navigation/CONSTANTS.js";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: "95px",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)",
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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

export default function Login(props) {
  window.userId = -1;
  const history = useHistory();
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [Id, setId] = useState("");
  const [errors, setErrors] = useState("");
  const setUserName = props.setUserName;
  const userInfo = {
    id: undefined,
    name: undefined,
    email: undefined,
    role: undefined,
    phone: undefined,
  };

  const goToRestaurant = (path) => {
    history.push({
      pathname: MAP,
      state: {
        userId: userInfo?.id,
        userName: userInfo?.name,
        phoneNumber: userInfo?.phone,
      },
    });
  };
  const goToVendor = (path) => {
    history.push({
      pathname: VENDOR_DASHBOARD,
      state: {
        userId: userInfo?.id,
        userName: userInfo?.name,
        phoneNumber: userInfo?.phone,
      },
    });
  };
  const goToLongin = () => {
    if (isNaN(phone)) {
      setErrors("Phone must be a number value");
    } else {
      var requestDto = {
        phone: phone,
        password: password,
      };
      postLogin(requestDto)
        .then((result) => {
          setId(result.data.id);
          userInfo.id = result.data.id;
          userInfo.name = result.data.name;
          userInfo.email = result.data.email;
          userInfo.role = result.data.role;
          userInfo.phone = result.data.phone;

          /***************Getting user.id for the user*********/
          userInfo.id = result.data.id;
          window.userId = result.data.id;
          // console.log("IDDDDD", result.data.id);
          /************************************************ */
          if (userInfo.role == true) {
            goToVendor();
          } else if (userInfo.role == false) {
            setUserName(result.data.name);
            goToRestaurant();
          }
        })
        .catch((err) => {
          if (err.response.status == 401)
            setErrors("User name or password not valid.");
          else {
            if (err.response.status == 404) {
              setErrors("Unknown user");
            } else {
              setErrors("Unknow error!");
            }
          }
        });
    }
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <span style={errors ? { visibility: "visible", color: "red" } : null}>
            {errors}
          </span>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => goToLongin()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={SIGNUP} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
