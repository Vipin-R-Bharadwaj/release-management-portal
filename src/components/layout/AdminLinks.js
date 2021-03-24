import { NavLink } from "react-router-dom";

const AdminLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        {/* <button className="btn btn-flat white text-darken-3 red-text"> */}
        <button className="btn btn-flat white black-text">
          {JSON.parse(localStorage.getItem("credentials")).email}
        </button>
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

export default AdminLinks;
