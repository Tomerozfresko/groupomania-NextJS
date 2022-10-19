import React, { useState } from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/registerForm/RegisterForm";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

  function isLoginHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <>
      {isLogin ? (
        <LoginForm toggle={isLoginHandler} />
      ) : (
        <RegisterForm toggle={isLoginHandler} />
      )}
    </>
  );
}
