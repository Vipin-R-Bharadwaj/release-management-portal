import { useEffect, useState } from "react";
import NewDashboard from "../user/dev/new_release/NewDashboard";
import Dashboard from "../user/dev/existing_release/Dashboard";
import ReleaseOptions from "../user/dev/ReleaseOptions";

const LoginSuccess = () => {
  const [display, setDisplay] = useState("");
  let btnOption = null;
  const clickHandler = (value) => {
    btnOption = value.target.id;
    if (btnOption === "New Release") {
      setDisplay(<NewDashboard />);
    } else {
      setDisplay(<Dashboard />);
    }
  };
  useEffect(() => {
    console.log("Use effect");
  }, []);
  return (
    <div className="dashboardBackground">
      <ReleaseOptions clickHandler={clickHandler} />
      {display}
      <div className="padding-top-40px"></div>
    </div>
  );
};

export default LoginSuccess;
