import classes from "./LoginForm.module.css";
import { useRef } from "react";
import { signIn } from "next-auth/react";

export default function Login(props) {
  const passwordRef = useRef("initial");
  const emailRef = useRef();

  async function handleLogin(event) {
    event.preventDefault();
    await signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });
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
            <button onClick={handleLogin} className={classes.loginButton}>
              Login
            </button>
            <button
              onClick={props.toggle}
              className={classes.loginRegisterButton}
            >
              Sign Up
            </button>
            <span className={classes.loginForgot}>Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
