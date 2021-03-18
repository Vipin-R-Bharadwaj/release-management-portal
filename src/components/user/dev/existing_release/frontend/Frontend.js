import { Component } from "react";
import Button from "./Button";
import DatePickerHOC from "./DatePickerHOC";
import Input from "./Input";

class Frontend extends Component {
  state = {
    featuresSummary: null,
    platform: null,
    releaseType: null,
    releaseVersion: null,
    impact: null,
    impactAreas: null,
    developerPOC: null,
    qaPOC: null,
    releaseSignOffDate: null,
    releaseDate: new Date(),
    releasePercentage: null,
    releaseWindow: null,
  };

  inputOptions1 = [
    {
      btnID: "featuresSummary",
      btnType: "text",
      btnClass: "validate",
      btnText: "Features Summary",
      btnWidth: "m6",
    },
    {
      btnID: "platform",
      btnType: "text",
      btnClass: "",
      btnText: "Platform",
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
      btnID: "releaseVersion",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Release Version",
      btnWidth: "m3",
    },
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m2",
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m3",
    },
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m4",
    },
  ];
  inputOptions3 = [
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA Point of Contact",
      btnWidth: "m3",
    },
  ];
  inputOptions4 = [
    {
      btnID: "releasePercentage",
      btnType: "text",
      btnClass: "",
      btnText: "Release Percentage",
      btnWidth: "m3",
    },
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m2",
    },
  ];

  dateOptions = [
    { id: "releaseSignOffDate", disabled: true },
    { id: "releaseDate", disabled: false },
  ];
  render() {
    return (
      <div className="card z-depth-2 formStyle1">
        <div className="padding-top-20px">
          <form onSubmit={(event) => this.submitHandler(event)}>
            {[this.inputOptions1, this.inputOptions2].map((option) => (
              <div className="row">
                {option.map((element) => (
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
              {this.inputOptions3.map((element) => (
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
              {this.dateOptions.map((element) => (
                <DatePickerHOC
                  key={element.id}
                  id={element.id}
                  disabled={element.disabled}
                  changeHandler={this.dateHandler}
                />
              ))}
              {this.inputOptions4.map((element) => (
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
            <div className="input-field col s12">
              <Button submitHandler={this.submitHandler} />
            </div>
            <div className="padding-top-10px"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Frontend;
