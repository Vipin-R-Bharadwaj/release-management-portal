import { Link, NavLink } from "react-router-dom";
import useFetch from "../../../useFetch";
// import newRelease from "../../../images/contact_header";

const NewDashboard = () => {
  const dailyDropdown = useFetch("http://localhost:8080/daily/dropdowns");
  localStorage.setItem("DailyDropdown", JSON.stringify(dailyDropdown));
  const frontendDropdown = useFetch("http://localhost:8080/frontend/dropdowns");
  localStorage.setItem("FrontendDropdown", JSON.stringify(frontendDropdown));
  const hotfixDropdown = useFetch("http://localhost:8080/hotfix/dropdowns");
  localStorage.setItem("HotfixDropdown", JSON.stringify(hotfixDropdown));
  return (
    <div className="center sendBackground">
      <div className="padding-top-40px"></div>
      {/* <div>
        <img src={newRelease} alt="" />
      </div> */}
      <div className="row">
        <div className="col s12 m4">
          <div className="dailyCardPadding">
            <NavLink
              to={`/${
                JSON.parse(localStorage.getItem("credentials")).role
              }/newrelease/daily`}
            >
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">
                  <b>Daily Release</b>
                </div>
                <div className="padding-top-20px"></div>
                <div className="card-panel">
                  <span>
                    <input
                      disabled
                      id="dailyitem"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="dailyitem">Item</label>
                    <input
                      disabled
                      id="dailypod"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="dailypod">POD</label>
                    <input disabled id="dailyreleaseType" type="text" />
                    <label htmlFor="dailyreleaseType">Release Type</label>
                  </span>
                  <div className="padding-top-10px"></div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="frontendCardPadding">
            <Link
              to={`/${
                JSON.parse(localStorage.getItem("credentials")).role
              }/newrelease/frontend`}
            >
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">Frontend Release</div>
                <div className="padding-top-20px"></div>
                <div className="card-panel">
                  <span className="white-text">
                    <input
                      disabled
                      id="item"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="item">Item</label>
                    <input disabled id="pod" type="text" className="validate" />
                    <label htmlFor="pod">POD</label>
                    <input disabled id="releaseType" type="text" />
                    <label htmlFor="releaseType">Release Type</label>
                  </span>
                  <div className="padding-top-10px"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="hotfixCardPadding">
            <Link
              to={`/${
                JSON.parse(localStorage.getItem("credentials")).role
              }/newrelease/hotfix`}
            >
              <div className="card formStyle2 hoverable light-green">
                <div className="padding-top-20px"></div>
                <div className="card-title white-text">Hotfix Release</div>
                <div className="padding-top-20px"></div>
                <div className="card-panel lime-text text-darken-4">
                  <span>
                    <input
                      disabled
                      id="item"
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="item">Item</label>
                    <input disabled id="pod" type="text" className="validate" />
                    <label htmlFor="pod">POD</label>
                    <input disabled id="releaseType" type="text" />
                    <label htmlFor="releaseType">Release Type</label>
                  </span>
                  <div className="padding-top-10px"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="padding-top-20px"></div> */}
    </div>
  );
};

export default NewDashboard;
