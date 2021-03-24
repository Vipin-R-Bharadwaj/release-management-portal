import "../../index.css";
import { withRouter } from "react-router-dom";
import DeveloperLinks from "./DeveloperLinks";
import Logo from "../../images/logo-light.png";
import ManagerLinks from "./ManagerLinks";
import ReleaseManagerLinks from "./ReleaseManagerLinks";
import DevOpsLinks from "./DevOpsLinks";
import AdminLinks from "./AdminLinks";

const NavBar = (props) => {
  const showLinks =
    props.location.pathname !== "/" ? (
      <>
        {JSON.parse(localStorage.getItem("credentials")).role ===
        "developer" ? (
          <DeveloperLinks />
        ) : JSON.parse(localStorage.getItem("credentials")).role ===
          "manager" ? (
          <ManagerLinks />
        ) : JSON.parse(localStorage.getItem("credentials")).role ===
          "release_manager" ? (
          <ReleaseManagerLinks />
        ) : JSON.parse(localStorage.getItem("credentials")).role ===
          "devops" ? (
          <DevOpsLinks />
        ) : (
          <AdminLinks />
        )}
      </>
    ) : (
      <> </>
    );
  return (
    <div>
      <nav className="navHeight">
        <div className="nav-wrapper white navPaddingTop">
          <a href="#!" className="brand-logo light-green-text text-darken-1">
            <img src={Logo} alt="Moneyview" className="logo" />
          </a>
          {showLinks}
        </div>
      </nav>
    </div>
  );
};

export default withRouter(NavBar);
