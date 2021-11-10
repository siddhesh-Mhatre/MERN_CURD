import React, { useState } from "react";
import siginupic from "../images/signup.svg";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
   const history = useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if(res.status===400 || !data){
        window.alert("invalid login");
    }else{
        window.alert("login sucessfull");
        history("/");
    }
  };
  return (
    <section className="sign-in">
      <div className="container mt-5">
        <div className="signin-content row d-flex">
          <div className="signin-image col-lg-6 col-md-12 col-sm-12">
            <figure className="img-thumbnail">     <img src={siginupic} alt="pic" /></figure>
            <NavLink to="/signup" className="signup-image-link">
              create an acount
            </NavLink>
          </div>

          <div className="signin-form col-lg-6 col-md-12 col-sm-12">
            <h2 className="form-title">sign in</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className="form-submit btn btn-success"
                  value="register"
                  onClick={loginUser}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
