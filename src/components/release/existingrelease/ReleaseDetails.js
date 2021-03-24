import useFetch from "../../../useFetch";
import { withRouter } from "react-router";
import DailyDetails from "./daily/DailyDetails";
import HotfixDetails from "./hotfix/HotfixDetails";
import FrontendDetails from "./frontend/FrontendDetails";

const ReleaseDetails = (props) => {
  const data = useFetch(
    `http://localhost:8000/${
      JSON.parse(localStorage.getItem("credentials")).eid
    }`
  );
  return (
    <div className="container center">
      {props.match.params.releaseType === "daily" ? (
        <DailyDetails DailyData={data && data.daily} />
      ) : props.match.params.releaseType === "hotfix" ? (
        <HotfixDetails HotfixData={data && data.hotfix} />
      ) : (
        <FrontendDetails FrontendData={data && data.frontend} />
      )}
    </div>
  );
};

export default withRouter(ReleaseDetails);
