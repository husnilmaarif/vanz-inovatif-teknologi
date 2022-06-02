import React, { useEffect } from "react";
import homepage from "../assets/homepage.png";
import about from "../assets/about.png";
import posting from "../assets/posting.png";
import login from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // authentikasi harus login sebelum posting sesuatu
    const user = auth.currentUser;
    if (!user) {
      // arahkan ke halaman login
      // alert(
      //   "Silahkan login terlebih dahulu, agar segala perubahan tersimpan sebagai data anda"
      // );
      navigate("/login");
    }
  });

  return (
    <>
      <div className="container-fluid d-flex header-homepage justify-content-center align-items-center">
        <button className="text-light greeting btn-primary p-2">
          Selamat Datang
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
