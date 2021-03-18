import { useState } from "react";
import { NavLink } from "react-router-dom";

const ReleaseOptions = ({ loginTitle, clickHandler }) => {
  const [newReleaseClicked, setnewReleaseClicked] = useState(
    " light-green darken-1"
  );
  const [existingReleaseClicked, setexistingReleaseClicked] = useState(
    " light-green darken-1"
  );
  const btnNewReleaseClass =
    "btn waves-effect waves-light btn-large btnStyling" + newReleaseClicked;
  const btnExistingReleaseClass =
    "btn waves-effect waves-light btn-large btnStyling" +
    existingReleaseClicked;
  const activeHandler = (event) => {
    event.target.outerText === "NEW RELEASE" ? (
      newReleaseClicked === " light-green darken-1" ? (
        <>
          {setnewReleaseClicked(" pulse green darken-3")}
          {setexistingReleaseClicked(" light-green darken-1")}
        </>
      ) : (
        <>
          {setexistingReleaseClicked(" light-green darken-1")}
          {setnewReleaseClicked(" pulse green darken-3")}
        </>
      )
    ) : existingReleaseClicked === " " ? (
      <>
        {setexistingReleaseClicked(" pulse green darken-3")}
        {setnewReleaseClicked(" light-green darken-1")}
      </>
    ) : (
      <>
        {setnewReleaseClicked(" light-green darken-1")}
        {setexistingReleaseClicked(" pulse green darken-3")}
      </>
    );
    clickHandler(event);
  };
  return (
    <div className="row">
      <div className="padding-top-20px"></div>
      {/* Username with profile icon */}
      <div className="col s12 m1 pull-m1 right">
        <div className="row">
          <div className="col s6 m6 pull-m8">
            <h5>{loginTitle}</h5>
          </div>
          <div className="col s6 m6">
            <NavLink to="/" className="btn red darken-1 btn-large btnStyling">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
      {/* new release button */}
      <div className="col s12 m5 pull-m1">
        <div className="input-field col s12">
          <button
            id="New Release"
            className={btnNewReleaseClass}
            onClick={(event) => activeHandler(event)}
          >
            New Release
          </button>
        </div>
      </div>
      {/* View existing release button */}
      <div className="col s12 m6 pull-m4">
        <div className="input-field col s12">
          <button
            id="View Existing Release"
            className={btnExistingReleaseClass}
            onClick={(event) => activeHandler(event)}
          >
            View Existing Release
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleaseOptions;
