import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import useUser from "../../../hooks/useUser";

//use credeintails provider to authenticate user

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = await useUser(credentials);
//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },

//     }),
//   ],
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
//   database: process.env.DATABASE_URL,
//   pages: {
//     signIn: "/auth/signin",
//     signOut: "/auth/signout",
//     error: "/auth/error", // Error code passed in query string as ?error=
//     verifyRequest: "/auth/verify-request", // (used for check email message)
//     newUser: null, // If set, new users will be directed here on first sign in
//   },
//   callbacks: {
//     async jwt(token, user, account, profile, isNewUser) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session(session, token) {
//       session.id = token.id;
//       session.email = token.email;
//       session.name = token.name;
//       session.role = token.role;
//         return session;
//     },
//   },
// });

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
