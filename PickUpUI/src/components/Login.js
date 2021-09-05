import React ,{ useEffect, useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyle.js'
import { postLogin, getUserDetails } from "../services";
import { MAP, SIGNUP, VENDOR_DASHBOARD } from '../navigation/CONSTANTS.js';
import { useHistory} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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
      "id" : undefined,
      "name": undefined,
      "email": undefined,
      "role": undefined,
      "phone": undefined
    }

    const goToRestaurant = (path) => {
      history.push({
        pathname: MAP,         
        state: { 
          userId: userInfo?.id,
          userName: userInfo?.name,
          phoneNumber: userInfo?.phone
        }
      });
    }
    const goToVondor = (path) => {
      history.push({
        pathname: VENDOR_DASHBOARD,
        state: { 
          userId: userInfo?.id,
          userName: userInfo?.name,
          phoneNumber: userInfo?.phone
        }
      });
    }
    const goToLongin = ()=>{
        if(isNaN(phone)){
          setErrors('Phone must be a number value');
        }
        else{
          var requestDto = {
            "phone": phone,
            "password": password 
          };
       postLogin(requestDto)
       .then(result =>{
            setUserName(result.data.name)
            setId(result.data.id);
            userInfo.name = result.data.name;
            userInfo.email = result.data.email;
            userInfo.role = result.data.role;
            userInfo.phone = result.data.phone;
            
            /***************Getting user.id for the user*********/
            userInfo.id=result.data.id
            window.userId = result.data.id
            // console.log("IDDDDD", result.data.id);
            /************************************************ */
            if (userInfo.role == true){
              console.log('navigate to backoffice');
            // redirect to back office
            goToVondor();
            } else if ( userInfo.role == false){
              goToRestaurant();
            }
          }).catch(err =>{
            if(err.response.status == 401)
              setErrors('User name or password not valid.');
            else{
              if(err.response.status == 404){
                setErrors('Unknown user');
              }else{
                setErrors('Unknow error!');
              }
            }
          });
        }
       }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <span style={errors ? {visibility: "visible", color: "red"}: null} >{errors}</span>
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
              onChange={(e)=>{setPhone(e.target.value) }}
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
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=>goToLongin()
            }
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
                <Link href={SIGNUP} variant="body2" >
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
 