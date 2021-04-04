import { useState } from 'react';
import Input from './form/Input';
import Button from './form/Button';
import DatePickerHOC from './form/DatePickerHOC';
import CreatableSelect from 'react-select/creatable';
import { withRouter } from 'react-router';

const DailyDetails = (props) => {
  // const [data, setData] = useState(DailyData);
  const data = JSON.parse(localStorage.getItem('Existing Release')).daily;

  const getDropdown = (arr) => {
    var tmp = [];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] !== undefined) {
        tmp.push({ label: arr[i], value: arr[i] });
      }
    }
    return tmp;
  };

  const releaseStatusList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).release_status
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
        JSON.parse(localStorage.getItem('credentials')).role
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
                  disabled
                  btnValue={item}
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
                  disabled
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
                  disabled
                  changeHandler={setReleaseType}
                />
              </div>
              <div className="row">
                <Input
                  key="description"
                  btnID="description"
                  btnType="text"
                  btnClass="materialize-textarea"
                  btnText="Description"
                  btnWidth="m12"
                  disabled
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
                  disabled
                  changeHandler={setImpact}
                />
                <Input
                  key={impactAreas}
                  btnID={impactAreas}
                  btnType="text"
                  btnClass="validate"
                  btnText="Impact Areas"
                  btnWidth="m4"
                  btnValue={impactAreas}
                  disabled
                  changeHandler={setImpactAreas}
                />
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
                  disabled
                  btnValue={developerPOC}
                  changeHandler={setDeveloperPOC}
                />
                <Input
                  key={tor}
                  btnID={tor}
                  btnType="text"
                  btnClass="validate"
                  btnText="Type of Release"
                  btnWidth="m4"
                  btnValue={tor}
                  disabled
                  changeHandler={setTor}
                />
              </div>
              <div className="row">
                <DatePickerHOC
                  key={4}
                  id="releaseDate"
                  btnlabel="Release Date"
                  changeHandler={setReleaseDate}
                  disabled={true}
                />
                <Input
                  key="prLink"
                  btnID="prLink"
                  btnClass="materialize-textarea"
                  btnType="text"
                  btnText="PR Link"
                  btnWidth="m9"
                  disabled
                  btnValue={prLink}
                  changeHandler={setPrLink}
                />
              </div>
              <div className="row">
                <DatePickerHOC
                  key={5}
                  id="techPRSignoffDate"
                  btnlabel="Tech PR Signoff Date"
                  changeHandler={setTechPRSignoffDate}
                  disabled={true}
                />
                <Input
                  key={sqlApproval}
                  btnID={sqlApproval}
                  btnClass="materialize-textarea"
                  btnType="text"
                  btnText="SQL Approval"
                  btnWidth="m9"
                  disabled
                  btnValue={sqlApproval}
                  changeHandler={setSqlApproval}
                />
                <Input
                  key={heavySQLAlter}
                  btnID={heavySQLAlter}
                  btnClass="materialize-textarea"
                  btnType="text"
                  btnText="Heavy SQL Alter"
                  btnWidth="m9"
                  disabled
                  btnValue={heavySQLAlter}
                  changeHandler={setHeavySQLAlter}
                />
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
                  disabled
                  changeHandler={setQaPOC}
                />
                {[
                  [
                    'stageQASignoffDate',
                    true,
                    6,
                    setStageQASignoffDate,
                    'Stage QA Signoff Date',
                  ],
                  [
                    'integrationQASignoffDate',
                    true,
                    7,
                    setIntegrationQASignoffDate,
                    'Integration QA Signoff Date',
                  ],
                ].map((element) => (
                  <DatePickerHOC
                    id={element[0]}
                    changeHandler={element[3]}
                    key={element[2]}
                    btnlabel={element[4]}
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
                  disabled
                  changeHandler={setRollOut}
                />
                <Input
                  key="requiresBar"
                  btnID="requiresBar"
                  btnType="text"
                  btnClass=""
                  btnText="requiresBar"
                  btnWidth="m4"
                  btnValue={requiresBAR}
                  disabled
                  changeHandler={setRequiresBAR}
                />
                <DatePickerHOC
                  id="barDate"
                  key={barDate}
                  btnlabel="Bar Date"
                  disabled
                  changeHandler={setBarDate}
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
