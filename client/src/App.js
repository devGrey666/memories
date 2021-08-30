import React from "react";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("app");
  return (
    <div>
      <Container maxWidth="xl">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              {() => <Redirect to="/posts"></Redirect>}
            </Route>

            <Route path="/posts" exact>
              <Home />
            </Route>
            <Route path="/posts/search" exact>
              <Home />
            </Route>
            <Route path="/sign-in" exact>
              {!user ? <Auth /> : <Redirect to="/posts"></Redirect>}
            </Route>
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
