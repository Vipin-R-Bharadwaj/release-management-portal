// import ValidateURL from "../../../../../validation/ValidateURL";
import Input from "./Input";
import Button from "./Button";
import DatePickerHOC from "./DatePickerHOC";
import { withRouter } from "react-router";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";

const DailyForm = (props) => {
  const getDropdown = (arr) => {
    var tmp = [];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] !== undefined) {
        tmp.push({ label: arr[i], value: arr[i] });
      }
    }
    return tmp;
  };
  const sqlApprovalOptions = getDropdown(
    JSON.parse(localStorage.getItem("sqlApprovalArray"))
  );

  const [item, setItem] = useState(null);
  const [pod, setPod] = useState(null);
  const [releaseType, setReleaseType] = useState(null);
  const [description, setDescription] = useState(null);
  const [impact, setImpact] = useState(null);
  const [impactAreas, setImpactAreas] = useState(null);
  const [releaseStatus, setReleaseStatus] = useState(null);
  const [developerPOC, setDeveloperPOC] = useState(null);
  const [tor, setTor] = useState(null);
  const [prLink, setPrLink] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [techPRSignoffDate, setTechPRSignoffDate] = useState(null);
  const [sqlApproval, setSqlApproval] = useState(null);
  const [heavySQLAlter, setHeavySQLAlter] = useState(null);
  const [qaPOC, setQaPOC] = useState(null);
  const [stageQASignoffDate, setStageQASignoffDate] = useState(null);
  const [integrationQASignoffDate, setIntegrationQASignoffDate] = useState(
    null
  );
  const [rollOut, setRollOut] = useState(null);
  const [requiresBAR, setRequiresBAR] = useState(null);
  const [barDate, setBarDate] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      JSON.stringify({
        item: item,
        pod_id: pod,
        type_of_release: releaseType,
        Description: description,
        impact: impact,
        impact_area: impactAreas,
        release_status: releaseStatus,
        dev_poc: developerPOC,
        type_of_release2: tor,
        prlink: prLink,
        release_date: releaseDate,
        tech_pr_signoff: techPRSignoffDate,
        sql_approval: sqlApproval,
        heavy_sql_alter: heavySQLAlter,
        qa_poc: qaPOC,
        stage_qa_signoff: stageQASignoffDate,
        stage_integration_signoff: integrationQASignoffDate,
        roll_out_percentage: rollOut,
        requires_bar: requiresBAR,
        bar_date: barDate,
      })
    );
    console.log("Form Submitted!");
    props.history.push(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
  };

  const backHandler = (event) => {
    event.preventDefault();
    props.history.push(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
  };

  return (
    <div className="container">
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
                  changeHandler={setItem}
                />
                <div className="col s12 m3">
                  <CreatableSelect
                    placeholder="POD"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setPod(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
                  />
                </div>
                <div className="col s12 m3">
                  <CreatableSelect
                    placeholder="Release Type"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setReleaseType(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
                  />
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
                  changeHandler={setDescription}
                />
              </div>
              <div className="row">
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Impact"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setImpact(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
                  />
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Impact Areas"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setImpactAreas(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
                  />
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Release Status"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setReleaseStatus(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
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
                  changeHandler={setDeveloperPOC}
                />
                <div className="col s12 m6">
                  <CreatableSelect
                    placeholder="Release Type"
                    // isClearable
                    options={sqlApprovalOptions}
                    onChange={(event) => {
                      setReleaseType(event.value);
                    }}
                    maxMenuHeight={sqlApprovalOptions.length * 42.5}
                  />
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
                <div className="row">
                  <div className="col s12 m5">
                    <CreatableSelect
                      placeholder="SQL Approval"
                      // isClearable
                      options={sqlApprovalOptions}
                      onChange={(event) => {
                        setSqlApproval(event.value);
                      }}
                      maxMenuHeight={sqlApprovalOptions.length * 42.5}
                    />
                  </div>
                  <div className="col s12 m4">
                    <CreatableSelect
                      placeholder="Heavy SQL Alter"
                      // isClearable
                      options={sqlApprovalOptions}
                      onChange={(event) => {
                        setHeavySQLAlter(event.value);
                      }}
                      maxMenuHeight={sqlApprovalOptions.length * 42.5}
                    />
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
                  <div className="col s12 m4">
                    <CreatableSelect
                      placeholder="Requires BAR"
                      // isClearable
                      options={sqlApprovalOptions}
                      onChange={(event) => {
                        setRequiresBAR(event.value);
                      }}
                      maxMenuHeight={sqlApprovalOptions.length * 42.5}
                    />
                  </div>
                  <Input
                    key="rollOut"
                    btnID="rollOut"
                    btnType="text"
                    btnClass=""
                    btnText="RollOut"
                    btnWidth="m5"
                    changeHandler={setRollOut}
                  />
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DailyForm);
