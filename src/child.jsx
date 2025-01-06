// import React, { useEffect } from "react";
// import axios from "axios";

// const Child = ({ onDataChange }) => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos/1"
//         );
//         onDataChange(response);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [onDataChange]);

//   return (
//     <div>
//       <h1>this is the child component</h1>
//     </div>
//   );
// };

// export default Child;
