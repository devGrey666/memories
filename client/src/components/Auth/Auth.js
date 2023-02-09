import React, { useState } from "react";
import useStyles from "./styles";
import {
  Paper,
  Container,
  Button,
  Typography,
  Grid,
  Avatar,
  TextField, Box
} from "@mui/material";

import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp, signIn } from "../../actions/auth.js";
import { LockOutlined } from "@mui/icons-material";
const Auth = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
    setFormData(initialState);
    setShowPassword(false);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper} variant={"outlined"} elevation={1} >
        <Avatar className={classes.avatar} >
          <LockOutlined />
        </Avatar>
        <Typography variant="subtitle1" component={"div"}><h2>{isSignup ? "Sign Up" : "Sign In"}</h2></Typography>
        {/*<form  onSubmit={handleSubmit} className={`${classes.form} mui-form`}>*/}
        <Box
            component="form"
            mx={1.5}
            mt={1.5}
            sx={{
              '& .MuiTextField-root': { mt: 1.5,backgroundColor:"#fff" },
            }}
            noValidate
            autoComplete="off"
        >
            {isSignup && (
                <>
                <TextField
                  name="firstName"
                  label="First Name"
                  autoFocus={true}
                  handleChange={handleChange}
                  defaultValue={formData.firstName}
                  size={"small"}
                  fullWidth
                ></TextField>

                <TextField
                    className={classes.mt20}
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  value={formData.lastName}
                  size={"small"}
                  fullWidth
                ></TextField>
                </>
            )}
            <>
            <TextField
                className={classes.input}
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
              defaultValue={formData.email}
              size={"small"}
              fullWidth
            ></TextField>
            <TextField
                className={classes.input}
              name="password"
              label="password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
              defaultValue={formData.password}
              size={"small"}
              fullWidth
            ></TextField>
            {isSignup && (
              <TextField
                  className={classes.input}
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
                defaultValue={formData.confirmPassword}
                fullWidth
                size={"small"}
              ></TextField>
            )}
            </>

          <Box component={"div"} style={{textAlign:"center"}} sx={{
            '& .MuiButton-root': { mt: 2.5 ,width:"50%",backgroundColor:"#f79918" ,
              borderRadius:"7px" ,'&:hover':{backgroundColor:"#fff",color:"#f79918"}},
          }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <h4>{isSignup ? "Sign Up" : "Sign In"}</h4>
          </Button>
          </Box>
          <Grid container justifyContent="center" mt={2.5} mb={1.5}>
            <Grid item>
              <Button onClick={switchMode} style={{color:"#222222"}}>
                <h5>
                  {isSignup
                      ? "Sign In"
                      : "Register Now"}
                </h5>
              </Button>
            </Grid>
          </Grid>
        {/*</form>*/}
          </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
