import { Component } from "react";
import ValidateURL from "../../../../../validation/ValidateURL";
import Input from "./Input";
import Button from "./Button";
import DatePickerHOC from "./DatePickerHOC";

class Daily extends Component {
  state = {
    item: null,
    pod: null,
    releaseType: null,
    description: null,
    impact: null,
    impactAreas: null,
    releaseStatus: null,
    developerPOC: null,
    tor: null,
    prLink: null,
    releaseDate: null,
    techPRSignoffDate: null,
    sqlApproval: null,
    heavySQLAlter: null,
    qaPOC: null,
    stageQASignoffDate: null,
    integrationQASignoffDate: null,
    rollOut: null,
    requiresBAR: null,
    barDate: null,
  };

  inputOptions1 = [
    {
      btnID: "item",
      btnType: "text",
      btnClass: "validate",
      btnText: "Item",
      btnWidth: "m6",
    },
    {
      btnID: "pod",
      btnType: "text",
      btnClass: "",
      btnText: "POD",
      btnWidth: "m3",
    },
    {
      btnID: "releaseType",
      btnType: "text",
      btnClass: "",
      btnText: "Release Type",
      btnWidth: "m3",
    },
  ];
  inputOptions2 = [
    {
      btnID: "description",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Description",
      btnWidth: "m12",
    },
  ];
  inputOptions3 = [
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m4",
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m4",
    },
    {
      btnID: "releaseStatus",
      btnType: "text",
      btnClass: "",
      btnText: "Release Status",
      btnWidth: "m4",
    },
  ];
  inputOptions4 = [
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m6",
    },
    {
      btnID: "tor",
      btnType: "text",
      btnClass: "",
      btnText: "TOR",
      btnWidth: "m6",
    },
  ];
  inputOptions5 = [
    {
      btnID: "prLink",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "PR Link",
      btnWidth: "m9",
    },
  ];
  inputOptions6 = [
    {
      btnID: "sqlApproval",
      btnType: "text",
      btnClass: "text",
      btnText: "SQL Approval",
      btnWidth: "m3",
    },
    {
      btnID: "heavySQLAlter",
      btnType: "text",
      btnClass: "",
      btnText: "Heavy SQL Alter",
      btnWidth: "m3",
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA POC",
      btnWidth: "m3",
    },
  ];
  inputOptions7 = [
    {
      btnID: "rollOut",
      btnType: "text",
      btnClass: "text",
      btnText: "Rollout",
      btnWidth: "m2",
    },
    {
      btnID: "requiresBAR",
      btnType: "text",
      btnClass: "",
      btnText: "Requires BAR",
      btnWidth: "m2",
    },
    {
      btnID: "barDate",
      btnType: "text",
      btnClass: "",
      btnText: "BAR Date",
      btnWidth: "m2",
    },
  ];

  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    ValidateURL(this.state.prLink)
      ? console.log(this.state)
      : alert("Enter Valid PR Link");
  };
  render() {
    return (
      <div className="container">
        <div className="card z-depth-2 formStyle1">
          <div className="padding-top-20px">
            <form onSubmit={(event) => this.submitHandler(event)}>
              {[
                [this.inputOptions1, 0],
                [this.inputOptions2, 1],
                [this.inputOptions3, 2],
                [this.inputOptions4, 3],
              ].map((option) => (
                <div className="row" key={option[1]}>
                  {option[0].map((element) => (
                    <Input
                      key={element.btnID}
                      btnID={element.btnID}
                      btnType={element.btnType}
                      btnClass={element.btnClass}
                      btnText={element.btnText}
                      btnWidth={element.btnWidth}
                      changeHandler={this.changeHandler}
                    />
                  ))}
                </div>
              ))}
              <div className="row">
                <DatePickerHOC
                  key={4}
                  id="releaseDate"
                  name="Release Date"
                  changeHandler={(event) => this.changeHandler(event)}
                  disabled={true}
                />
                {this.inputOptions5.map((element) => (
                  <Input
                    key={element.btnID}
                    btnID={element.btnID}
                    btnClass={element.btnClass}
                    btnType={element.btnType}
                    btnText={element.btnText}
                    btnWidth={element.btnWidth}
                  />
                ))}
              </div>
              <div className="row">
                <DatePickerHOC
                  key={5}
                  id="techPRSignoffDate"
                  name="Tech PR Signoff Date"
                  changeHandler={(event) => this.changeHandler(event)}
                  disabled={true}
                />
                {this.inputOptions6.map((element) => (
                  <Input
                    key={element.btnID}
                    btnID={element.btnID}
                    btnClass={element.btnClass}
                    btnType={element.btnType}
                    btnText={element.btnText}
                    btnWidth={element.btnWidth}
                  />
                ))}
              </div>
              <div className="row">
                {[
                  ["stageQASignoffDate", "Stage QA Signoff Date", false, 6],
                  [
                    "integrationQASignoffDate",
                    "Integration QA Signoff Date",
                    false,
                    7,
                  ],
                ].map((element) => (
                  <DatePickerHOC
                    id={element[0]}
                    name={element[1]}
                    changeHandler={this.changeHandler}
                    key={element[3]}
                    disabled={element[2]}
                  />
                ))}
                {this.inputOptions7.map((element) => (
                  <Input
                    key={element.btnID}
                    btnID={element.btnID}
                    btnClass={element.btnClass}
                    btnType={element.btnType}
                    btnText={element.btnText}
                    btnWidth={element.btnWidth}
                  />
                ))}
              </div>
              <div className="input-field col s12">
                <Button
                  buttonName="Submit"
                  iconName="send"
                  btnColor="red accent-3"
                />
              </div>
              <div className="padding-top-10px"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Daily;
