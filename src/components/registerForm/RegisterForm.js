import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./Register.module.css";
import { useRouter } from "next/router";

export default function Register(props) {
  const router = useRouter();

  function passwordValidation(value) {
    return value.trim() !== "";
  }
  function emailValidation(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function usernameValidation(username) {
    var regName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    //names like Mathias d'Arràs || Martin Luther King, Jr. are accepted
    if (!regName.test(username) || username === "") {
      return false;
    } else {
      return true;
    }
  }

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangedHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(usernameValidation);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidation);

  const {
    value: secondPassword,
    isValid: secondPasswordIsValid,
    hasError: secondPasswordHasError,
    valueChangeHandler: secondPasswordChangedHandler,
    inputBlurHandler: secondPasswordBlurHandler,
    reset: resetSecondPasswordInput,
  } = useInput(passwordValidation);

  const passwordsAreEqual = enteredPassword === secondPassword;

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!passwordIsValid) {
      return;
    }

    if (!emailIsValid) {
      return;
    }

    if (!secondPasswordIsValid) {
      return;
    }

    if (!usernameIsValid) {
      return;
    }

    if (!passwordsAreEqual) {
      return;
    }

    const userData = {
      profilepicture: "https://joeschmoe.io/api/v1/random",
      username,
      password: enteredPassword,
      email: enteredEmail,
    };
    function addUser(userData) {
      const response = fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("succesfully added new user:", res);
        })
        .catch((err) => console.log(err));
    }
    //add user
    addUser(userData);
    resetPasswordInput();
    resetEmailInput();
    resetSecondPasswordInput();
    resetUsername();

    router.push("/main");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={classes.login}>
        <div className={classes.loginWrapper}>
          <div className={classes.loginLeft}>
            <h3 className={classes.loginLogo}>Groupomania</h3>
            <span className={classes.loginDesc}>
              Better employee experience.
            </span>
          </div>
          <div className={classes.loginRight}>
            <div className={classes.loginBox}>
              <input
                placeholder={"Username"}
                className={`${classes.loginInput} ${
                  usernameHasError && classes.invalidValue
                }`}
                id="username"
                onChange={usernameChangedHandler}
                onBlur={usernameBlurHandler}
                value={username}
              />
              {usernameHasError && (
                <p className={classes.ErrorText}>Please enter your username</p>
              )}
              <input
                placeholder="Email"
                className={`${classes.loginInput} ${
                  emailHasError && classes.invalidValue
                }`}
                id="email"
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
              {emailHasError && (
                <p className={classes.ErrorText}>Please enter a valid email</p>
              )}

              <input
                placeholder="Password"
                type=""
                className={`${classes.loginInput} ${
                  passwordHasError && classes.invalidValue
                }`}
                id="password"
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                value={enteredPassword}
              />
              {passwordHasError && (
                <p className={classes.ErrorText}>
                  Enter a combination of at least six numbers, letters and
                  punctuation marks (like ! and &).
                </p>
              )}

              <input
                placeholder="Type your password again"
                type=""
                className={`${classes.loginInput} ${
                  secondPasswordHasError && classes.invalidValue
                }`}
                id="secondpassword"
                onChange={secondPasswordChangedHandler}
                onBlur={secondPasswordBlurHandler}
                value={secondPassword}
              />
              {secondPasswordHasError && (
                <p className={classes.ErrorText}>Password cannot be empty</p>
              )}
              {!passwordsAreEqual && (
                <p className={classes.ErrorText}>Passwords are not matching</p>
              )}

              <button className={classes.loginButton}>Sign Up</button>
              <button onClick={props.toggle} className={classes.loginButton}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
