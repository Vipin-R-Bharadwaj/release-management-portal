// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import Button from "../login/form/Button";

// const DeveloperLinks = ({ clickHandler }) => {
//   const [newReleaseClicked, setnewReleaseClicked] = useState(
//     " light-green darken-1"
//   );
//   const [existingReleaseClicked, setexistingReleaseClicked] = useState(
//     " light-green darken-1"
//   );
//   const btnNewReleaseClass =
//     "btn waves-effect waves-light btn-large btnStyling" + newReleaseClicked;
//   const btnExistingReleaseClass =
//     "btn waves-effect waves-light btn-large btnStyling" +
//     existingReleaseClicked;
//   const activeHandler = (event) => {
//     event.target.outerText === "NEW RELEASE" ? (
//       newReleaseClicked === " light-green darken-1" ? (
//         <>
//           {setnewReleaseClicked(" pulse green darken-3")}
//           {setexistingReleaseClicked(" light-green darken-1")}
//         </>
//       ) : (
//         <>
//           {setexistingReleaseClicked(" light-green darken-1")}
//           {setnewReleaseClicked(" pulse green darken-3")}
//         </>
//       )
//     ) : existingReleaseClicked === " " ? (
//       <>
//         {setexistingReleaseClicked(" pulse green darken-3")}
//         {setnewReleaseClicked(" light-green darken-1")}
//       </>
//     ) : (
//       <>
//         {setnewReleaseClicked(" light-green darken-1")}
//         {setexistingReleaseClicked(" pulse green darken-3")}
//       </>
//     );
//     clickHandler(event);
//   };
//   return (
//     <>
//       <li>
//         <button
//           className="btn waves-effect waves-light btn-large btnStyling light-green darken-2"
//           type="Submit"
//           onClick={(event) => activeHandler(event)}
//         >
//           <NavLink to="/dev/newrelease" className="black-text">
//             New Release
//           </NavLink>
//         </button>
//         {/* <a href="sass.html" className="light-green-text text-darken-1">
//           Sass
//         </a> */}
//       </li>
//       <li>
//         <a href="badges.html" className="light-green-text text-darken-1">
//           Components
//         </a>
//       </li>
//       <li>
//         <a
//           className="dropdown-trigger light-green-text text-darken-1"
//           href="#!"
//           data-target="dropdown1"
//         >
//           Dropdown<i className="material-icons right">arrow_drop_down</i>
//         </a>
//       </li>
//       <li>
//         <button
//           className="btn waves-effect waves-light btn-large btnStyling light-green darken-2"
//           type="Submit"
//           onClick={(event) => activeHandler(event)}
//         >
//           <NavLink to="/dev/newrelease" className="black-text">
//             New Release
//           </NavLink>
//         </button>
//       </li>
//       <li>
//         <NavLink to="/dev/existingrelease" className="black-text">
//           View Existing Release
//         </NavLink>
//       </li>
//       <li>
//         <NavLink to="/" className="black-text">
//           Logout
//         </NavLink>
//       </li>
//     </>
//     // <div className="row">
//     //   <div className="padding-top-20px"></div>
//     //   {/* new release button */}
//     //   <div className="col s12 m4">
//     //     <div className="input-field col s12">
//     //       <button
//     //         id="New Release"
//     //         className={btnNewReleaseClass}
//     //         onClick={(event) => activeHandler(event)}
//     //       >
//     //         New Release
//     //       </button>
//     //     </div>
//     //   </div>
//     //   {/* View existing release button */}
//     //   <div className="col s12 m6">
//     //     <div className="input-field col s12">
//     //       <button
//     //         id="View Existing Release"
//     //         className={btnExistingReleaseClass}
//     //         onClick={(event) => activeHandler(event)}
//     //       >
//     //         View Existing Release
//     //       </button>
//     //     </div>
//     //   </div>
//     //   {/* Username with profile icon */}
//     //   <div className="col s12 m2">
//     //     <div className="row">
//     //       <div className="col s6 m6">
//     //         <NavLink to="/" className="btn red darken-1 btn-large btnStyling">
//     //           Logout
//     //         </NavLink>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default DeveloperLinks;

import { NavLink } from "react-router-dom";

const DeveloperLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li className="light-green-text text-darken-1">
        <NavLink
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/newrelease`}
        >
          <button className="btn btn-flat white light-green-text text-darken-2 pulse">
            New Release
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/all`}
        >
          <button className="btn btn-flat white light-green-text text-darken-2 pulse">
            View Existing Release
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <button className="btn btn-flat red darken-3 white-text pulse">
            Logout
          </button>
        </NavLink>
      </li>
    </ul>
  );
};

export default DeveloperLinks;
