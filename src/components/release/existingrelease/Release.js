import { useState } from "react";
import ReleaseList from "./ReleaseList";
import { withRouter } from "react-router";
import CreatableSelect from "react-select/creatable";
import useFetch from "../../../useFetch";

const Release = (props) => {
  const userid = JSON.parse(localStorage.getItem("credentials")).eid;
  const data = useFetch(`http://localhost:8000/${userid}`);
  data && localStorage.setItem("Existing Release", JSON.stringify(data));

  // const parsedData = Object.keys(data).map((key) => [key, data[key]]);
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
      <div className="padding-top-20px"></div>
      <CreatableSelect
        placeholder="All"
        // isClearable
        options={optionList}
        onChange={(event) => {
          clickHandler(event);
        }}
        defaultValue="Select release type"
        maxMenuHeight={170}
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
                  data.daily.map((element) => (
                    <ReleaseList
                      role={
                        JSON.parse(localStorage.getItem("credentials")).role
                      }
                      typeOfRelease="daily"
                      key={element.id}
                      id={element.id}
                      data={element}
                    />
                  ))}
                {data &&
                  data.frontend.map((element) => (
                    <ReleaseList
                      role={
                        JSON.parse(localStorage.getItem("credentials")).role
                      }
                      typeOfRelease="frontend"
                      key={element.id}
                      id={element.id}
                      data={element}
                    />
                  ))}
                {data &&
                  data.hotfix.map((element) => (
                    <ReleaseList
                      role={
                        JSON.parse(localStorage.getItem("credentials")).role
                      }
                      typeOfRelease="hotfix"
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
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/daily`
        )
      ) : option === "3" ? (
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/frontend`
        )
      ) : option === "4" ? (
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/hotfix`
        )
      ) : (
        <> </>
      )}
      <div className="padding-top-20px"></div>
    </div>
  );
};

export default withRouter(Release);
