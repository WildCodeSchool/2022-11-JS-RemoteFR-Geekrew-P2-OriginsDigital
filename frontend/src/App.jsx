import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpConfirmation from "./pages/SignUpConfirmation";
import Video from "./pages/Video";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import LegalSpace from "./pages/LegalSpace";
import GTCU from "./pages/GTCU";
import GTCS from "./pages/GTCS";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-confirmation" element={<SignUpConfirmation />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/video/:id" element={<Video />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<LegalSpace />} />
        <Route path="/gtcu" element={<GTCU />} />
        <Route path="/gtcs" element={<GTCS />} />
      </Routes>
      {/* <Footer /> */}
      <Navbar />
    </>
  );
}

export default App;
