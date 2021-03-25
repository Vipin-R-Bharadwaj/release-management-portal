import { useState } from "react";
// import ValidateURL from "../../../../../validation/ValidateURL";
import Input from "./form/Input";
import Button from "./form/Button";
import DatePickerHOC from "./form/DatePickerHOC";
import CreatableSelect from "react-select/creatable";

import { withRouter } from "react-router";

const DailyDetails = (props) => {
  // const [data, setData] = useState(DailyData);
  const data = JSON.parse(localStorage.getItem("Existing Release")).daily;
  console.log(data);

  const getDropdown = (arr) => {
    var tmp = [];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] !== undefined) {
        tmp.push({ label: arr[i], value: arr[i] });
      }
    }
    return tmp;
  };

  const podList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).pod
  );

  const releaseStatusList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).release_status
  );

  const releaseTypeList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).release_type
  );

  const impactList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).impact
  );

  const impactAreasList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).impact_areas
  );

  const requiresBarList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).generic
  );

  const sqlApprovalList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).sql_queries_approval
  );

  const heavySQLAlterList = [
    {
      label: "Yes",
      value: "Yes",
    },
    {
      label: "No",
      value: "No",
    },
  ];

  const torList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).type_of_release
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      item,
      pod,
      releaseType,
      description,
      impact,
      impactAreas,
      releaseStatus,
      developerPOC,
      tor,
      prLink,
      releaseDate,
      techPRSignoffDate,
      sqlApproval,
      heavySQLAlter,
      qaPOC,
      stageQASignoffDate,
      integrationQASignoffDate,
      rollOut,
      requiresBAR,
      barDate,
    });
  };

  const backHandler = (event) => {
    event.preventDefault();
    props.history.push(
      `/${
        JSON.parse(localStorage.getItem("credentials")).role
      }/existingrelease/all`
    );
  };

  const [item, setItem] = useState(data[0].item);
  const [pod, setPod] = useState(data[0].pod);
  const [releaseType, setReleaseType] = useState(data[0].releaseType);
  const [description, setDescription] = useState(data[0].description);
  const [impact, setImpact] = useState(data[0].impact);
  const [impactAreas, setImpactAreas] = useState(data[0].impactAreas);
  const [releaseStatus, setReleaseStatus] = useState(data[0].releaseStatus);
  const [developerPOC, setDeveloperPOC] = useState(data[0].developerPOC);
  const [tor, setTor] = useState(data[0].tor);
  const [prLink, setPrLink] = useState(data[0].prLink);
  const [releaseDate, setReleaseDate] = useState(data[0].releaseDate);
  const [techPRSignoffDate, setTechPRSignoffDate] = useState(
    data[0].techPRSignoffDate
  );
  const [sqlApproval, setSqlApproval] = useState(data[0].sqlApproval);
  const [heavySQLAlter, setHeavySQLAlter] = useState(data[0].heavySQLAlter);
  const [qaPOC, setQaPOC] = useState(data[0].qaPOC);
  const [stageQASignoffDate, setStageQASignoffDate] = useState(
    data[0].stageQASignoffDate
  );
  const [integrationQASignoffDate, setIntegrationQASignoffDate] = useState(
    data[0].integrationQASignoffDate
  );
  const [rollOut, setRollOut] = useState(data[0].rollOut);
  const [requiresBAR, setRequiresBAR] = useState(data[0].requiresBAR);
  const [barDate, setBarDate] = useState(data[0].barDate);

  return (
    <div>
      <div className="padding-top-40px"></div>
      <div className="center">
        <div className="card z-depth-2 formStyle1">
          <h2 className="red-text text-darken-1">Daily Release</h2>
          <div className="padding-top-20px"></div>
          <div className="divider"></div>
          <div className="padding-top-20px">
            <form onSubmit={(event) => submitHandler(event)}>
              <div className="row">
                <Input
                  key="item"
                  btnID="item"
                  btnType="text"
                  btnClass="validate"
                  btnText="Item"
                  btnWidth="m6"
                  btnValue={item}
                  changeHandler={setItem}
                />
                <div className="col s12 m3">
                  <CreatableSelect
                    id="pod"
                    placeholder={pod}
                    // isClearable
                    options={podList}
                    onChange={(event) => {
                      setPod(event.value);
                    }}
                    maxMenuHeight={8 * 42.5}
                  />
                  <label htmlFor="pod">POD</label>
                </div>
                <div className="col s12 m3">
                  <CreatableSelect
                    id="releaseType"
                    placeholder={releaseType}
                    // isClearable
                    options={releaseTypeList}
                    onChange={(event) => {
                      setReleaseType(event.value);
                    }}
                    maxMenuHeight={releaseTypeList.length * 42.5}
                  />
                  <label htmlFor="releaseType">Release Type</label>
                </div>
              </div>
              <div className="row">
                <Input
                  key="description"
                  btnID="description"
                  btnType="text"
                  btnClass="materialize-textarea"
                  btnText="Description"
                  btnWidth="m12"
                  btnValue={description}
                  changeHandler={setDescription}
                />
              </div>
              <div className="row">
                <div className="col s12 m4">
                  <CreatableSelect
                    id="impact"
                    placeholder={impact}
                    // isClearable
                    options={impactList}
                    onChange={(event) => {
                      setImpact(event.value);
                    }}
                    maxMenuHeight={impactList.length * 42.5}
                  />
                  <label htmlFor="impact">Impact</label>
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    id="impactAreas"
                    placeholder={impactAreas}
                    // isClearable
                    options={impactAreasList}
                    onChange={(event) => {
                      setImpactAreas(event.value);
                    }}
                    maxMenuHeight={8 * 42.5}
                  />
                  <label htmlFor="impactAreas">Impact Areas</label>
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    id="releaseStatus"
                    placeholder={releaseStatus}
                    // isClearable
                    options={releaseStatusList}
                    onChange={(event) => {
                      setReleaseStatus(event.value);
                    }}
                    maxMenuHeight={releaseStatusList.length * 42.5}
                  />
                  <label htmlFor="releaseStatus">Release Status</label>
                </div>
              </div>
              <div className="row">
                <Input
                  key="developerPOC"
                  btnID="developerPOC"
                  btnType="text"
                  btnClass=""
                  btnText="Developer Point of Contact"
                  btnWidth="m6"
                  btnValue={developerPOC}
                  changeHandler={setDeveloperPOC}
                />
                <div className="col s12 m6">
                  <CreatableSelect
                    id="tor"
                    placeholder={tor}
                    // isClearable
                    options={torList}
                    onChange={(event) => {
                      setTor(event.value);
                    }}
                    maxMenuHeight={8 * 42.5}
                  />
                  <label htmlFor="tor">Type of Release</label>
                </div>
              </div>
              <div className="row">
                <DatePickerHOC
                  key={4}
                  id="releaseDate"
                  changeHandler={setReleaseDate}
                  // disabled={true}
                />
                <Input
                  key="prLink"
                  btnID="prLink"
                  btnClass="materialize-textarea"
                  btnType="text"
                  btnText="PR Link"
                  btnWidth="m9"
                  btnValue={prLink}
                  changeHandler={setPrLink}
                />
              </div>
              <div className="row">
                <DatePickerHOC
                  key={5}
                  id="techPRSignoffDate"
                  changeHandler={setTechPRSignoffDate}
                  disabled={true}
                />
                <div className="col s12 m5">
                  <CreatableSelect
                    id="SQL Approval"
                    placeholder={sqlApproval}
                    // isClearable
                    options={sqlApprovalList}
                    onChange={(event) => {
                      setSqlApproval(event.value);
                    }}
                    maxMenuHeight={5 * 42.5}
                  />
                  <label htmlFor="sqlApproval">SQL Approval</label>
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    id="heavySQLAlter"
                    placeholder={heavySQLAlter}
                    // isClearable
                    options={heavySQLAlterList}
                    onChange={(event) => {
                      setHeavySQLAlter(event.value);
                    }}
                    maxMenuHeight={heavySQLAlterList.length * 42.5}
                  />
                  <label htmlFor="heavySQLAlter">Heavy SQL Alter</label>
                </div>
              </div>

              <div className="row">
                <Input
                  key="qaPOC"
                  btnID="qaPOC"
                  btnType="text"
                  btnClass=""
                  btnText="QA POC"
                  btnWidth="m6"
                  btnValue={qaPOC}
                  changeHandler={setQaPOC}
                />
                {[
                  ["stageQASignoffDate", false, 6, setStageQASignoffDate],
                  [
                    "integrationQASignoffDate",
                    false,
                    7,
                    setIntegrationQASignoffDate,
                  ],
                ].map((element) => (
                  <DatePickerHOC
                    id={element[0]}
                    changeHandler={element[3]}
                    key={element[2]}
                    disabled={element[1]}
                  />
                ))}
              </div>
              <div className="row">
                <Input
                  key="rollOut"
                  btnID="rollOut"
                  btnType="text"
                  btnClass=""
                  btnText="RollOut"
                  btnWidth="m4"
                  btnValue={rollOut}
                  changeHandler={setRollOut}
                />
                <div className="col s12 m4">
                  <CreatableSelect
                    id="requiresBar"
                    placeholder={requiresBAR}
                    // isClearable
                    options={requiresBarList}
                    onChange={(event) => {
                      setRequiresBAR(event.value);
                    }}
                    maxMenuHeight={3 * 42.5}
                  />
                  <label htmlFor="requiresBar">Requires BAR</label>
                </div>
                <DatePickerHOC
                  id="barDate"
                  changeHandler={setBarDate}
                  key="8"
                />
              </div>
              <div className="row">
                <Button
                  btnName="Back"
                  iconName="arrow_back"
                  iconAlign="left"
                  btnColor="red darken-1"
                  clickHandler={backHandler}
                />
                <Button
                  btnName="Submit"
                  iconName="send"
                  iconAlign="right"
                  btnColor="light-green darken-2"
                  clickHandler={submitHandler}
                />
              </div>
              <div className="padding-top-10px"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DailyDetails);
