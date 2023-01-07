import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { AppBar, Typography, Button, Avatar } from "@mui/material";
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
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.mainBrand}>
        <Link to="/">
          <img
            src={memoriesText}
            className={classes.image}
            alt="memories.png"
            height="60px"
          />
          <img
            src={memoriesLogo}
            className={classes.image}
            alt="memories.png"
            height="60px"
          />
        </Link>
      </div>
      <div className={classes.mainAuth}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.src}
            >
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h6" className={classes.userName}>
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              component={Link}
              to="/sign-in"
              onClick={logOut}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/sign-in"
            >
              Sign In
            </Button>
          </div>
        )}
      </div>
    </AppBar>
  );
};

export default NavBar;
