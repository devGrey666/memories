import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import {Container} from "@mui/material";
function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("app");
  return (
    <div>
      <Container maxWidth="xl">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/search" element={<Home />} />
            <Route path="/sign-in" element={!user ? <Auth /> : <Navigate replace to="/posts" /> } />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
