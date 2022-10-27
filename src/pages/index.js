import React, { useState } from "react";
import LoginForm from "../components/loginForm/LoginForm";
import RegisterForm from "../components/registerForm/RegisterForm";
import { useSession, signIn, signOut } from "next-auth/react";
import FeedPage from "./main";

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const { data: session } = useSession();

  function isLoginHandler() {
    setIsLogin((prevState) => !prevState);
  }

  if (session) {
    console.log(session);
    return <FeedPage />;
  } else {
    console.log(session);
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
