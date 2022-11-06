import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          //our login logic here
          const res = await fetch("http://localhost:3000/api/users/user", {
            method: "POST",
            body: JSON.stringify(email),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();

          if (!user) {
            console.log("User not found");
            return null;
          }

          if (user && user.password !== password) {
            console.log("passwords Don't match");
            return null;
          }

          if (user && user.password === password) {
            console.log("Match");
            return user;
          }
        } catch (error) {
          console.log("Error received", error);
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
