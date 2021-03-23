import useFetch from "../../useFetch";
import Dashboard from "../user/dev/existing_release/Dashboard";

const ExistingRelease = () => {
  const releaseList = useFetch("http://localhost:8000/all");
  return (
    <div className="center">
      <Dashboard data={releaseList} />
    </div>
  );
};

export default ExistingRelease;
