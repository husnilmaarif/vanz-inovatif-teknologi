import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const user = {
      email,
      password,
    };
    console.log(user);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-success text-light text-center">
          Login Page
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-4">
            <h1 className="text-center">Login</h1>

            <form className="mt-3" onSubmit={login}>
              <input
                type="email"
                placeholder="email"
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
                type="submit"
              >
                Kirim
              </button>
            </form>
            <p className="mt-2 text-center">
              belum punya akun? silahkan <Link to="/register">registrasi</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
