import { NavLink } from "react-router-dom";

const ReleaseDetails = () => {
  return (
    <div>
      <NavLink to="/">
        <button className="btn btn-flat red darken-3 white-text pulse">
          Logout
        </button>
      </NavLink>
    </div>
  );
};

export default ReleaseDetails;
