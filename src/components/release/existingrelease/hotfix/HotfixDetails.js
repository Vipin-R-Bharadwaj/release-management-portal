import { withRouter } from "react-router";
// import ValidateURL from "../../../../../validation/ValidateURL";
import Button from "./form/Button";
import DatePicker from "./form/DatePicker";
import Input from "./form/Input";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";

const HotfixDetails = (props) => {
  const storedData = JSON.parse(localStorage.getItem("Existing Release"))
    .hotfix;
  const data = storedData.filter((release) => {
    if (release.id === parseInt(props.match.params.id)) return release;
  });
  console.log(data);

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${
        JSON.parse(localStorage.getItem("credentials")).role
      }/existingrelease/hotfix`
    );
  };

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
    JSON.parse(localStorage.getItem("HotfixDropdown")).pod
  );

  const releaseTypeList = getDropdown(
    JSON.parse(localStorage.getItem("DailyDropdown")).release_type
  );

  const impactList = getDropdown(
    JSON.parse(localStorage.getItem("HotfixDropdown")).impact
  );

  const impactAreasList = getDropdown(
    JSON.parse(localStorage.getItem("HotfixDropdown")).impact_areas
  );

  const releaseStatusList = getDropdown(
    JSON.parse(localStorage.getItem("HotfixDropdown")).release_status
  );

  const torList = getDropdown(
    JSON.parse(localStorage.getItem("HotfixDropdown")).type_of_release
  );

  const approvedByList = getDropdown(
    JSON.parse(localStorage.getItem("HotfixDropdown")).appoved_by
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
  const [releaseWindow, setReleaseWindow] = useState(data[0].releaseWindow);

  const [approvedBy, setApprovedBy] = useState(data[0].approvedBy);
  const [heavySQLAlter, setHeavySQLAlter] = useState(data[0].heavySQLAlter);
  const [qaBy, setQaBy] = useState(data[0].qaBy);
  const [srd, setSrd] = useState(data[0].srd);
  const [soh, setSoh] = useState(data[0].soh);

  const backHandler = (event) => {
    event.preventDefault();
    props.history.push(
      `/${
        JSON.parse(localStorage.getItem("credentials")).role
      }/existingrelease/all`
    );
  };

  return (
    <div className="center">
      <div className="card z-depth-2 formStyle1">
        <h2 className="red-text text-darken-1">Hotfix Release</h2>
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
                disabled={true}
                changeHandler={setItem}
              />
              <Input
                key={pod}
                btnID={pod}
                btnType="text"
                btnClass="validate"
                btnText="POD"
                btnWidth="m3"
                btnValue={pod}
                disabled={true}
                changeHandler={setPod}
              />
              <Input
                key={releaseType}
                btnID={releaseType}
                btnType="text"
                btnClass="validate"
                btnText="Release Type"
                btnWidth="m3"
                btnValue={releaseType}
                disabled={true}
                changeHandler={setReleaseType}
              />
            </div>
            <div className="row">
              <Input
                key="description"
                btnID="description"
                btnType="text"
                btnClass="validate"
                btnText="Description"
                disabled={true}
                btnWidth="m12"
                btnValue={description}
                changeHandler={setDescription}
              />
            </div>
            <div className="row">
              <Input
                key={impact}
                btnID={impact}
                btnType="text"
                btnClass="validate"
                btnText="Impact"
                btnWidth="m4"
                btnValue={impact}
                disabled={true}
                changeHandler={setImpact}
              />
              <Input
                key={impactAreas}
                btnID={impactAreas}
                btnType="text"
                btnClass="validate"
                btnText="Impact Aread"
                btnWidth="m4"
                btnValue={impactAreas}
                disabled={true}
                changeHandler={setImpactAreas}
              />

              <div className="col s12 m4">
                <CreatableSelect
                  placeholder={releaseStatus}
                  // isClearable
                  options={releaseStatusList}
                  disabled={true}
                  onChange={(event) => {
                    setReleaseStatus(event.value);
                  }}
                  maxMenuHeight={releaseStatusList.length * 42.5}
                />
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
                disabled={true}
                btnValue={developerPOC}
                changeHandler={setDeveloperPOC}
              />
              <Input
                key={tor}
                btnID={tor}
                btnType="text"
                btnClass=""
                btnText="Developer Point of Contact"
                btnWidth="m6"
                disabled={true}
                btnValue={tor}
                changeHandler={setTor}
              />
            </div>
            <div className="row">
              <div className="col s12 m3 valign-wrapper">
                <DatePicker
                  id="releaseDate"
                  value={releaseDate}
                  disabled={true}
                  changeHandler={(event) => setReleaseDate(event)}
                  disabled={true}
                />
              </div>
              <Input
                key="prLink"
                btnID="prLink"
                btnType="text"
                btnClass=""
                btnText="PR Link"
                btnWidth="m9"
                disabled={true}
                btnValue={{ prLink }}
                changeHandler={setPrLink}
              />
            </div>
            <div className="row">
              <Input
                key="releaseWindow"
                btnID="releaseWindow"
                btnType="text"
                btnClass=""
                btnText="Release Window"
                btnWidth="m4"
                disabled={true}
                btnValue={releaseWindow}
                changeHandler={setReleaseWindow}
              />
              <Input
                key={approvedBy}
                btnID={approvedBy}
                btnType="text"
                btnClass=""
                btnText="Approved By"
                btnWidth="m4"
                disabled={true}
                btnValue={approvedBy}
                changeHandler={setApprovedBy}
              />
              <Input
                key={heavySQLAlter}
                btnID={heavySQLAlter}
                btnType="text"
                btnClass=""
                btnText="Heavy SQL Alter"
                btnWidth="m4"
                disabled={true}
                btnValue={heavySQLAlter}
                changeHandler={setHeavySQLAlter}
              />
            </div>
            <div className="row">
              <Input
                key="qaBy"
                btnID="qaBy"
                btnType="text"
                btnClass=""
                btnText="QA By"
                btnWidth="m4"
                disabled={true}
                btnValue={qaBy}
                changeHandler={setQaBy}
              />
              <Input
                key="srd"
                btnID="srd"
                btnType="text"
                btnClass=""
                btnText="Source Release Date"
                btnWidth="m4"
                disabled={true}
                btnValue={srd}
                changeHandler={setSrd}
              />
              <Input
                key="soh"
                btnID="soh"
                btnType="text"
                btnClass=""
                btnText="Source of Hotfix"
                btnWidth="m4"
                disabled={true}
                btnValue={soh}
                changeHandler={setSoh}
              />
            </div>
            <div className="padding-top-20px"></div>
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
  );
};

export default withRouter(HotfixDetails);
