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
        //our login logic here
        console.log(
          "🚀 ~ file: [...nextauth].js ~ line 19 ~ authorize ~ credentials",
          credentials
        );
        // const res = await fetch("http://localhost:3000/api/auth/login", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // });

        // const user = await res.json();

        if (email === "test@test.com" && password === "1234") {
          console.log("you are connected");
          return { email, password };
        }
        console.log("failed to login");
        return null;
      },
    }),
  ],
  // pages: {
  //   signIn: "/",
  // },
};

// export const authOptions = {app
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       // credentials: {
//       //   username: { label: "Username", type: "text", placeholder: "jsmith" },
//       //   password: { label: "Password", type: "password" },
//       // },
// async authorize(credentials, req) {
// console.log(
//   "🚀 ~ file: [...nextauth].js ~ line 19 ~ authorize ~ credentials",
//   credentials
// );
// console.log();
// const res = await fetch("http://localhost:3000/api/auth/login", {
//   method: "POST",
//   body: JSON.stringify(credentials),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
//         // .then((res) => res.json())
//         // .then((data) => {
//         //   console.log(data);
//         // })

//         // You need to provide your own logic here that takes the credentials
//         // submitted and returns either a object representing a user or value
//         // that is false/null if the credentials are invalid.
//         // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//         // You can also use the `req` object to obtain additional parameters
//         // (i.e., the request IP address)

//         const user = await res.json();

//         // If no error and we have user data, return it
//         if (res.ok && user) {
//           console.log(
//             "🚀2 ~ file: [...nextauth].js ~ line 47 ~ authorize ~ user",
//             user
//           );
//           return user;
//         }
//         // Return null if user data could not be retrieved
//         return null;
//       },
//     }),
//   ],
// };

export default NextAuth(authOptions);
