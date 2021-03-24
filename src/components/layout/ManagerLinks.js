import { NavLink } from "react-router-dom";

const ManagerLinks = () => {
  return (
    <ul className="right hide-on-med-and-down">
      <li className="light-green-text text-darken-1">
        <NavLink to="/manager/newrelease">
          <button className="btn btn-flat white light-green-text text-darken-2 pulse">
            New Release
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/manager/existingrelease/all">
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

export default ManagerLinks;
