import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { AppBar, Typography, Button, Avatar,Box,Toolbar,IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";
import decode from "jwt-decode";
const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const logOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    console.log("Log Out");
    setUser(null);
  };
  console.log("This is Nav Bar");
  useEffect(() => {
    console.log("Use Effect of NavBar");
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < new Date().getTime()) logOut();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
      <Box sx={{ flexGrow: 1 }} className={classes.appBar} >
        <AppBar position="static"  color={"inherit"}>
          <Toolbar>
            {/*<IconButton*/}
            {/*    size="large"*/}
            {/*    edge="start"*/}
            {/*    color="inherit"*/}
            {/*    aria-label="menu"*/}
            {/*    sx={{ mr: 2 }}*/}
            {/*>*/}
            {/*  <MenuIcon />*/}
            {/*</IconButton>*/}
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <h1>
                Memories
              </h1>
            </Typography>

              <Button color="inherit" size={"large"} href={"/sign-in"}>
                <Typography variant={"subtitle1"} component={"div"}>
                  <p>
                    Login
                  </p>
                </Typography>
              </Button>

          </Toolbar>
        </AppBar>

      </Box>
  );
};

export default NavBar;
