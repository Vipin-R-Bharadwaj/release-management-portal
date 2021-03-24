import { Component } from "react";
import { withRouter } from "react-router";
// import ValidateURL from "../../../../../validation/ValidateURL";
import Button from "./Button";
import DatePicker from "./DatePicker";
import Input from "./Input";

class HotfixForm extends Component {
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
    releaseWindow: null,
    approvedBy: null,
    heavySQLAlter: null,
    qaBy: null,
    srd: null,
    soh: null,
  };

  inputOptions1 = [
    {
      btnID: "item",
      btnType: "text",
      btnClass: "",
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
      btnText: "Type of Release",
      btnWidth: "m6",
    },
  ];
  inputOptions5 = [
    {
      btnID: "prLink",
      btnType: "text",
      btnClass: "",
      btnText: "PR Link",
      btnWidth: "m9",
    },
  ];
  inputOptions6 = [
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m4",
    },
    {
      btnID: "approvedBy",
      btnType: "text",
      btnClass: "",
      btnText: "Approved By",
      btnWidth: "m4",
    },
    {
      btnID: "heavySQLAlter",
      btnType: "text",
      btnClass: "",
      btnText: "Heavy SQL Alter",
      btnWidth: "m4",
    },
  ];
  inputOptions7 = [
    {
      btnID: "qaBy",
      btnType: "text",
      btnClass: "",
      btnText: "QA By",
      btnWidth: "m4",
    },
    {
      btnID: "srd",
      btnType: "text",
      btnClass: "",
      btnText: "Source Release Date",
      btnWidth: "m4",
    },
    {
      btnID: "soh",
      btnType: "text",
      btnClass: "",
      btnText: "Source of Hotfix",
      btnWidth: "m4",
    },
  ];

  dateOptions = [
    { id: "releaseDate", disabled: false },
    { id: "releaseDate", disabled: false },
  ];

  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    this.props.history.push(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
    // ValidateURL(this.state.prLink)
    //   ? console.log(this.state)
    //   : alert("Enter Valid PR Link");
  };
  backHandler = (event) => {
    event.preventDefault();
    this.props.history.push(
      `/${JSON.parse(localStorage.getItem("credentials")).role}/newrelease`
    );
  };

  render() {
    return (
      <div className="container">
        <div className="padding-top-40px"></div>
        <div className="container center">
          <div className="card z-depth-2 formStyle1">
            <h2 className="red-text text-darken-1">Hotfix Release</h2>
            <div className="padding-top-20px"></div>
            <div className="divider"></div>
            <div className="padding-top-20px">
              <form onSubmit={(event) => this.submitHandler(event)}>
                {[
                  this.inputOptions1,
                  this.inputOptions2,
                  this.inputOptions3,
                  this.inputOptions4,
                ].map((option) => (
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
                  <div className="col s12 m3 valign-wrapper">
                    <DatePicker
                      id="releaseDate"
                      changeHandler={(event) => this.changeHandler(event)}
                      disabled={true}
                    />
                  </div>
                  {this.inputOptions5.map((element) => (
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
                {[this.inputOptions6, this.inputOptions7].map((option) => (
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
                  <Button
                    btnName="Back"
                    iconName="arrow_back"
                    iconAlign="left"
                    btnColor="red darken-1"
                    clickHandler={this.backHandler}
                  />
                  <Button
                    btnName="Submit"
                    iconName="send"
                    iconAlign="right"
                    btnColor="light-green darken-2"
                    clickHandler={this.submitHandler}
                  />
                </div>
                <div className="padding-top-10px"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HotfixForm);
