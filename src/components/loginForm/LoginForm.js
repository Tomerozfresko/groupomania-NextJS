import classes from "./LoginForm.module.css";
// import Link from "next/link";
import { useRouter } from "next/router";

import { useRef } from "react";

export default function Login(props) {
  const router = useRouter();

  const passwordRef = useRef("initial");
  const emailRef = useRef();

  function loginHandler(event) {
    event.preventDefault();

    const loginData = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    function userLogin(loginData) {
      const response = fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    userLogin(loginData);
    router.push("/main");
  }

  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Groupomania</h3>
          <span className={classes.loginDesc}>Better employee experience.</span>
        </div>
        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input
              type="text"
              ref={emailRef}
              placeholder="Email"
              className={classes.loginInput}
            />
            <input
              type="text"
              ref={passwordRef}
              placeholder="Password"
              className={classes.loginInput}
            />
            <button onClick={loginHandler} className={classes.loginButton}>
              Login
            </button>
            <span className={classes.loginForgot}>Forgot Password?</span>
            <button
              onClick={props.toggle}
              className={classes.loginRegisterButton}
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
