// import { useContext } from "react";

// import { Context } from "../Context.jsx";

// import "./Dashboard.css";

// export default function Dashboard() {
//   const { data } = useContext(Context);

//   function generateTables() {
//     const tables = [];

//     for (let tablename in data) {
//       tables.push(
//         <table key={tablename}>
//           <thead>
//             <tr>
//               <th colSpan={Object.keys(data[tablename][0]).length}>
//                 {tablename}
//               </th>
//             </tr>
//             <tr>
//               {Object.keys(data[tablename][0]).map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data[tablename].map((table, index) => (
//               <tr key={index}>
//                 {Object.keys(table).map((key) => (
//                   <td key={key}>{table[key]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }

//     return tables;
//   }

//   return <div className="dashboard">{generateTables()}</div>;
// }
import "./Dashboard.css";

export default function Dashboard() {
  return <div>Dashboard</div>;
}
