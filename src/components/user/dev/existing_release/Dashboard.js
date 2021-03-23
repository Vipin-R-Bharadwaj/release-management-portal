import { useState, useEffect } from "react";
import useFetch from "../../../../useFetch";
import CreatableSelect from "react-select/creatable";
import ExistingReleaseList from "../../../release/ExistingReleaseList";
import { withRouter } from "react-router";

const Dashboard = (props) => {
  const data = useFetch("http://localhost:8000/all");
  const optionList = [
    { label: "All", value: "1" },
    { label: "Daily Release", value: "2" },
    { label: "Frontend Release", value: "3" },
    { label: "Hotfix Relese", value: "4" },
  ];
  const [option, setOption] = useState("1");
  const clickHandler = (event) => {
    if (event !== null) {
      setOption(event.value);
    }
  };
  return (
    <div className="container">
      {/* <div className="container"> */}
      <div className="padding-top-20px"></div>
      <CreatableSelect
        placeholder="All"
        // isClearable
        options={optionList}
        onChange={(event) => {
          clickHandler(event);
        }}
        defaultValue="Select release type"
        maxMenuHeight={150}
      />
      {option === "1" ? (
        <div className="row">
          <div className="padding-top-20px">
            <table className="highlight striped white">
              <thead>
                <tr>
                  <th className="center">Sl No</th>
                  <th className="center">Release</th>
                  <th>Feature Summary</th>
                  <th>Release Type</th>
                  <th>Release Signoff Date</th>
                  <th className="center">Release Date</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((element) => (
                    <ExistingReleaseList
                      key={element.id}
                      id={element.id}
                      data={element}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : option === "2" ? (
        props.history.push("/dev/existingrelease/daily")
      ) : // <Daily />
      option === "3" ? (
        props.history.push("/dev/existingrelease/frontend")
      ) : // <Frontend />
      option === "4" ? (
        props.history.push("/dev/existingrelease/hotfix")
      ) : (
        // <Hotfix />
        <> </>
      )}
      <div className="padding-top-20px"></div>
    </div>
  );
};

export default withRouter(Dashboard);
