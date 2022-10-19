import "./styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

//Folders structure

// /public
//     favicon.ico
// /src
//     /components
//         /elements
//             /auth
//                 AuthForm.tsx
//                 AuthForm.test.ts
//             /[Name]
//                 [Name].tsx
//                 [Name].test.ts
//     /hooks
//     /types
//     /utils
//     /test
//         /api
//             authAPI.test.js
//             [name]API.test.js
//         /pages
//             index.test.js

//     /pages
//         /api
//           /authAPI
//               authAPI.js
//           /[name]API
//               [name]API.js
//         _app.tsx
//         _document.tsx
//         index.tsx
