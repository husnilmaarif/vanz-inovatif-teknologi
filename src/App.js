// style & depencency
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navigasi from "./components/Navigasi";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostingPage from "./pages/PostingPage";
import EditList from "./components/EditList";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Navigasi />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posting" element={<PostingPage />} />
        <Route path="/edit/:id" element={<EditList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
