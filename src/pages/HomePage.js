import React, { useEffect, useState } from "react";
import homepage from "../assets/homepage.png";
import about from "../assets/about.png";
import posting from "../assets/posting.png";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function HomePage() {
  const [google, setGoogle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setGoogle(user.displayName);
      } else {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <div className="container-fluid d-flex header-homepage justify-content-center align-items-center">
        <button className="text-light greeting btn-primary me-4">
          Selamat Datang {google}
        </button>
      </div>

      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 kolom-halaman">
            <img src={homepage} alt="home" className="w-50 mb-3" />
            <h6>Home</h6>
          </div>
          <div className="col-md-3 kolom-halaman">
            <img src={about} alt="about" className="w-50 mb-3" />
            <h6>About</h6>
          </div>
          <div className="col-md-3 kolom-halaman">
            <img src={posting} alt="posting" className="w-50 mb-3" />
            <h6>Posting</h6>
          </div>
          <div className="col-md-3" style={{ textAlign: "center" }}>
            <img src={login} alt="login" className="w-50 mb-3" />
            <h6>Login</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
