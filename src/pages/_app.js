import "./styles/global.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;

// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component, pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps}/>
//     </SessionProvider>
//   )
// }
