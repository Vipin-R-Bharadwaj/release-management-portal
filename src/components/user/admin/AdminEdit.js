// import Modal from "@material-ui/core/Modal";
// import { useState } from "react";

// const AdminEdit = ({ record, props }) => {
//   const [data, setData] = useState(record);
//   const editHandler = (event, data) => {
//     console.log(event.target);
//     props.history.push({
//       pathname: `/admin/edit/${event.target.id}`,
//       data: data,
//     });
//   };

//   const deleteHandler = (event) => {
//     console.log("Deleted!");
//   };
//   return (
//     <tr key={data.eid}>
//       <td className="center">{data.eid}</td>
//       <td className="center">{data.podid}</td>
//       <td className="center">{data.username}</td>
//       <td className="left">{data.email}</td>
//       <td>{data.role}</td>
//       <td className="center">
//         <button
//           id={data.eid}
//           className="btn btn-flat white waves-effect waves-light"
//           onClick={(event) => editHandler(event, data)}
//         >
//           <i id={data.eid} className="material-icons amber-text accent-2">
//             edit
//           </i>
//         </button>
//       </td>
//       <td className="center">
//         <button className="btn btn-flat white waves-effect waves-light">
//           <i
//             id={data.eid}
//             className="material-icons red-text accent-2"
//             onClick={(event) => deleteHandler(event)}
//           >
//             delete
//           </i>
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default AdminEdit;
