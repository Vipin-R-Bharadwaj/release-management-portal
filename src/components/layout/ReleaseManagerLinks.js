import { NavLink } from "react-router-dom";

const ReleaseManagerLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
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

export default ReleaseManagerLinks;
