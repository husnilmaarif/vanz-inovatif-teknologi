import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function register() {
    if (cpassword !== password) {
      alert("Passwords not matched!");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5 bg-secondary text-light text-center">
          Register Page
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-md-4">
            <h1 className="text-center">Registrasi</h1>
            <form className="mt-3 text-center">
              <input
                type="text"
                placeholder="name"
                className="form-control mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="email"
                className="form-control mt-2"
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
              <input
                type="password"
                placeholder="confirm password"
                className="form-control mt-2"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <button
                className="btn btn-primary mt-3 mb-3 w-100"
                onClick={register}
              >
                Kirim
              </button>
              <br />
              <Link to="/login">kembali ke halaman login</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
