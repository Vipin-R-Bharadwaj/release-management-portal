import { Component } from "react";
import { withRouter } from "react-router";
import Button from "./Button";
import DatePickerHOC from "./DatePickerHOC";
import Input from "./Input";

class DevFrontendForm extends Component {
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
      btnWidth: "m4",
    },
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
  ];
  inputOptions3 = [
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m4",
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA Point of Contact",
      btnWidth: "m4",
    },
  ];
  inputOptions4 = [
    {
      btnID: "releasePercentage",
      btnType: "text",
      btnClass: "",
      btnText: "Release Percentage",
      btnWidth: "m4",
    },
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m4",
    },
  ];
  dateOptions1 = [{ id: "releaseSignOffDate", disabled: true }];
  dateOptions2 = [{ id: "releaseDate", disabled: false }];

  changeHandler = (event) => {
    if (event) {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  };

  dateHandler = (event) => {
    console.log(event);
    if (event) {
      this.setState({
        [event.id]: event.value,
      });
    }
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted!");
    this.props.history.push("/dev/newrelease");
    // ValidateURL(this.state.prLink)
    //   ? console.log(this.state)
    //   : alert("Enter Valid PR Link");
  };
  backHandler = (event) => {
    event.preventDefault();
    this.props.history.replace("/dev/newrelease");
  };
  render() {
    return (
      <div className="container">
        <div className="padding-top-40px"></div>
        <div className="container center">
          <div className="card z-depth-2 formStyle1">
            <h2 className="red-text text-darken-1">Frontend Release</h2>
            <div className="padding-top-20px">
              <div className="divider"></div>
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
                    {this.dateOptions1.map((element) => (
                      <DatePickerHOC
                        key={element.id}
                        id={element.id}
                        disabled={element.disabled}
                        changeHandler={this.dateHandler}
                      />
                    ))}
                  </div>
                  <div className="row">
                    {this.dateOptions1.map((element) => (
                      <DatePickerHOC
                        key={element.id}
                        id={element.id}
                        disabled={element.disabled}
                        changeHandler={this.dateHandler}
                      />
                    ))}
                    {/* <p className="range-field">
                    <input
                      type="range"
                      id="test5"
                      min="0"
                      max="100"
                      onChange={(event) => console.log(event.target.value)}
                    />
                  </p> */}
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
      </div>
    );
  }
}

export default withRouter(DevFrontendForm);
