// import React from "react";

// function test() {

// async function clickHandler() {
//   let tomer = await fetch("/api/user");
//   console.log(tomer);
//     }

//   return <button onClick={clickHandler}>Here we will fetch the users</button>;
// }

// export default test;

// // export async function getStaticProps() {
// //   let res = await fetch("/api/user");
// //   let data = JSON.parse(res);
// //   console.log(data);
// //   return {
// //     props: {
// //       users: data,
// //     },
// //   };
// // }

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   useEffect(async () => {
//     axios
//       .get("/api/user")
//       .then(({ data }) => {
//         console.log(data);
//         setUsers(data);
//       })
//       .catch((error) => {
//         let message;
//         if (error.response) {
//           message = error.response.data.message;
//         } else {
//           message = error.message;
//         }
//         setErrorMessage(message);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <div>
//         <h1 className="mb-4 text-lg">Users:</h1>
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//         {users.map((user) => (
//           <p>
//             {user.username} {user.profilepicture}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  //Get Method
  const apiGet = async () => {
    let res = await fetch("api/user");
    let data = await res.json();
    setData(data);
  };

  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.username}>
              {item.username},{item.profilepicture}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FetchAPI;
