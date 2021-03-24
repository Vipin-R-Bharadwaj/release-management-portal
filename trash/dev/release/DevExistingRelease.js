import useFetch from "../../../../useFetch";
import DevDashboard from "../existing_release/DevDashboard";

const DevExistingRelease = () => {
  const releaseList = useFetch("http://localhost:8000/all");
  return (
    <div className="center">
      <DevDashboard data={releaseList} />
    </div>
  );
};

export default DevExistingRelease;
