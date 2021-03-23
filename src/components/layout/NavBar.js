import "../../index.css";
import { withRouter } from "react-router-dom";
import DeveloperLinks from "./DeveloperLinks";
import Logo from "../../images/logo-light.png";
import ManagerLinks from "./ManagerLinks";

const NavBar = (props) => {
  const showLinks =
    props.location.pathname !== "/" ? <DeveloperLinks /> : <> </>;
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
