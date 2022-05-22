// style & depencency
import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Navigasi from "./components/Navigasi";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostingPage from "./pages/PostingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigasi />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posting" element={<PostingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
