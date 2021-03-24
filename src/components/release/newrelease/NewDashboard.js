import { Link, NavLink } from "react-router-dom";
import useFetch from "../../../useFetch";
// import newRelease from "../../../images/newRelease.gif";

const NewDashboard = () => {
  const sqlApprovalArray = useFetch(
    "http://localhost:8080/daily/getsqlqueriesapproval"
  );
  localStorage.setItem("sqlApprovalArray", JSON.stringify(sqlApprovalArray));
  return (
    <div className="center">
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
