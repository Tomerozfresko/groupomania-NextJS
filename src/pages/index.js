import React, { useState } from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegisterForm from "../components/registerForm/RegisterForm";
import { useSession, signIn, signOut } from "next-auth/react";
import MainPage from "./main";

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const { data: session, status } = useSession();

  function isLoginHandler() {
    setIsLogin((prevState) => !prevState);
  }

  if (status === "authenticated") {
    console.log(status);
    return <MainPage />;
  } else {
    return (
      <>
        {isLogin ? (
          <LoginForm toggle={isLoginHandler} />
        ) : (
          <RegisterForm toggle={isLoginHandler} />
        )}
        {/* <button onClick={() => signOut()}>Sign out</button>
        Not signed in <br /> */}
      </>
    );
  }
}
export default Register;
