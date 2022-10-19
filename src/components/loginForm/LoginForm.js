import classes from "./LoginForm.module.css";
import Link from "next/link";

export default function Login(props) {
  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>Groupomania</h3>
          <span className={classes.loginDesc}>Better employee experience.</span>
        </div>
        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input placeholder="Email" className={classes.loginInput} />
            <input placeholder="Password" className={classes.loginInput} />
            <button className={classes.loginButton}>
              <Link href="../main">Log In</Link>
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
