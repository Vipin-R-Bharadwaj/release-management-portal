// import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Button from "./form/Button";
import DatePickerHOC from "./form/DatePickerHOC";
import Input from "./form/Input";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";

const FrontendDetails = (props) => {
  // const [data, setData] = useState(data[0].);
  const data = JSON.parse(localStorage.getItem("Existing Release")).frontend;
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

  const impactList = getDropdown(
    JSON.parse(localStorage.getItem("FrontendDropdown")).impact
  );
  const impactAreasList = getDropdown(
    JSON.parse(localStorage.getItem("FrontendDropdown")).impact_areas
  );
  const platformList = getDropdown(
    JSON.parse(localStorage.getItem("FrontendDropdown")).platform
  );
  const releaseTypeList = getDropdown(
    JSON.parse(localStorage.getItem("FrontendDropdown")).release_type
  );

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${
        JSON.parse(localStorage.getItem("credentials")).role
      }/existingrelease/frontend`
    );
  };

  const [featuresSummary, setFeaturesSummary] = useState(
    data[0].featuresSummary
  );
  const [platform, setPlatform] = useState(data[0].platform);
  const [releaseType, setReleaseType] = useState(data[0].releaseType);
  const [releaseVersion, setReleaseVersion] = useState(data[0].releaseVersion);
  const [impact, setImpact] = useState(data[0].impact);
  const [impactAreas, setImpactAreas] = useState(data[0].impactAreas);
  const [developerPOC, setDeveloperPOC] = useState(data[0].developerPOC);
  const [qaPOC, setQaPOC] = useState(data[0].qaPOC);
  const [releasePercentage, setReleasePercentage] = useState(
    data[0].releasePercentage
  );
  const [releaseWindow, setReleaseWindow] = useState(data[0].releaseWindow);
  const [releaseSignOffDate, setReleaseSignOffDate] = useState(
    data[0].releaseSignOffDate
  );
  const [releaseDate, setReleaseDate] = useState(data[0].releaseDate);

  return (
    <div className="center">
      <div className="padding-top-40px"></div>
      <div className="card z-depth-2 formStyle1">
        <h2 className="blue-grey-text text-darken-2">FRONTEND RELEASE</h2>
        <div className="padding-top-20px">
          <div className="divider"></div>
          <div className="padding-top-20px">
            <form onSubmit={(event) => submitHandler(event)}>
              <div className="row">
                <Input
                  key="featuresSummary"
                  btnID="featuresSummary"
                  btnType="text"
                  btnClass="validate"
                  btnText="Features Summary"
                  btnValue={featuresSummary}
                  btnWodth="m6"
                  changeHandler={setFeaturesSummary}
                />
                <div className="col s12 m3">
                  <CreatableSelect
                    placeholder="Platform"
                    // isClearable
                    options={platformList}
                    onChange={(event) => {
                      setPlatform(event.value);
                    }}
                    maxMenuHeight={platformList.length * 42.5}
                  />
                </div>
                <div className="col s12 m3">
                  <CreatableSelect
                    placeholder="Release Type"
                    // isClearable
                    options={releaseTypeList}
                    onChange={(event) => {
                      setReleaseType(event.value);
                    }}
                    maxMenuHeight={releaseTypeList.length * 42.5}
                  />
                </div>
              </div>
              <div className="row">
                <Input
                  key="releaseVersion"
                  btnID="releaseVersion"
                  btnType="text"
                  btnClass="validate"
                  btnText="Release Version"
                  btnValue={releaseVersion}
                  btnWodth="m4"
                  changeHandler={setReleaseVersion}
                />
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Impact"
                    // isClearable
                    options={impactList}
                    onChange={(event) => {
                      setImpact(event.value);
                    }}
                    maxMenuHeight={impactList.length * 42.5}
                  />
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Impact Areas"
                    // isClearable
                    options={impactAreasList}
                    onChange={(event) => {
                      setImpactAreas(event.value);
                    }}
                    maxMenuHeight={5 * 42.5}
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
                  btnValue={developerPOC}
                  btnWodth="m4"
                  changeHandler={setDeveloperPOC}
                />
                <Input
                  key="waPOC"
                  btnID="qaPOC"
                  btnType="text"
                  btnClass=""
                  btnText="QA Point of Contact"
                  btnValue={qaPOC}
                  btnWodth="m5"
                  changeHandler={setQaPOC}
                />
                <DatePickerHOC
                  id="releaseSignOffDate"
                  label="Release Sign Off Date"
                  changeHandler={setReleaseSignOffDate}
                />
                <label htmlFor="releaseSignOffDate"></label>
              </div>
              <div className="row">
                <DatePickerHOC
                  id="releaseDate"
                  label="Release Date"
                  changeHandler={setReleaseDate}
                />
                <Input
                  key="releasePercentage"
                  btnID="releasePercentage"
                  btnType="text"
                  btnClass=""
                  btnText="Release Percentage"
                  btnValue={releasePercentage}
                  btnWodth="m4"
                  changeHandler={setReleasePercentage}
                />
              </div>
              <div className="row">
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

export default withRouter(FrontendDetails);
