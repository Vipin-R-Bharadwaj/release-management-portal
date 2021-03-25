import { useState } from "react";
import { withRouter } from "react-router";
import Button from "./Button";
import DatePickerHOC from "./DatePickerHOC";
import Input from "./Input";
import CreatableSelect from "react-select/creatable";

const FrontendForm = (props) => {
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

  const [featuresSummary, setFeaturesSummary] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [releaseType, setReleaseType] = useState(null);
  const [releaseVersion, setReleaseVersion] = useState(null);
  const [impact, setImpact] = useState(null);
  const [impactAreas, setImpactAreas] = useState(null);
  const [developerPOC, setDeveloperPOC] = useState(null);
  const [qaPOC, setQaPOC] = useState(null);
  const [releasePercentage, setReleasePercentage] = useState(null);
  const [releaseWindow, setReleaseWindow] = useState(null);
  const [releaseSignOffDate, setReleaseSignOffDate] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);

  const inputOptions3 = [
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m4",
      changeHandler: { setDeveloperPOC },
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA Point of Contact",
      btnWidth: "m5",
      changeHandler: { setQaPOC },
    },
  ];
  const inputOptions4 = [
    {
      btnID: "releasePercentage",
      btnType: "text",
      btnClass: "",
      btnText: "Release Percentage",
      btnWidth: "m4",
      changeHandler: { setReleasePercentage },
    },
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m5",
      changeHandler: { setReleaseWindow },
    },
  ];
  const dateOptions1 = [
    {
      id: "releaseSignOffDate",
      disabled: false,
      dateHandler: { setReleaseSignOffDate },
    },
  ];
  const dateOptions2 = [
    { id: "releaseDate", disabled: false, dateHandler: { setReleaseDate } },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      featuresSummary: featuresSummary,
      platform: platform,
      releaseType: releaseType,
      releaseVersion: releaseVersion,
      impact: impact,
      impactAreas: impactAreas,
      developerPOC: developerPOC,
      qaPOC: qaPOC,
      releasePercentage: releasePercentage,
      releaseWindow: releaseWindow,
      releaseSignOffDate: releaseSignOffDate,
      releaseDate: releaseDate,
    });
    console.log("Form Submitted!");
    props.history.push(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
    // ValidateURL(state.prLink)
    //   ? console.log(state)
    //   : alert("Enter Valid PR Link");
  };
  const backHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
  };

  return (
    <div className="container">
      <div className="padding-top-40px"></div>
      <div className="center">
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
                    btnWidth="m6"
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
                    btnWidth="m4"
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
                  {inputOptions3.map((element) => (
                    <Input
                      key={element.btnID}
                      btnID={element.btnID}
                      btnType={element.btnType}
                      btnClass={element.btnClass}
                      btnText={element.btnText}
                      btnWidth={element.btnWidth}
                      changeHandler={element.changeHandler}
                    />
                  ))}
                  {dateOptions1.map((element) => (
                    <DatePickerHOC
                      key={element.id}
                      id={element.id}
                      disabled={element.disabled}
                      changeHandler={element.dateHandler}
                    />
                  ))}
                </div>
                <div className="row">
                  {dateOptions2.map((element) => (
                    <DatePickerHOC
                      key={element.id}
                      id={element.id}
                      disabled={element.disabled}
                      changeHandler={element.dateHandler}
                    />
                  ))}
                  {inputOptions4.map((element) => (
                    <Input
                      key={element.btnID}
                      btnID={element.btnID}
                      btnType={element.btnType}
                      btnClass={element.btnClass}
                      btnText={element.btnText}
                      btnWidth={element.btnWidth}
                      changeHandler={element.changeHandler}
                    />
                  ))}
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
    </div>
  );
};

export default withRouter(FrontendForm);
