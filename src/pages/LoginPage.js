import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    // login firebase auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("success ", user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // alert("errorMessage");
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 bg-success text-light text-center">
            Login Page
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-md-5 text-center p-5 shadow bg-light">
              <h1 className="text-center">Login</h1>

              <form className="mt-3">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  className="form-control mt-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-3 mb-3 w-100 text-center"
                  onClick={login}
                >
                  Kirim
                </button>
              </form>
              <p className="mt-2 text-center">
                belum punya akun? silahkan{" "}
                <Link to="/register">registrasi</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
