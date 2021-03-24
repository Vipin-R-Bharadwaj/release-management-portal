// import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Button from "./form/Button";
import DatePickerHOC from "./form/DatePickerHOC";
import Input from "./form/Input";

const FrontendDetails = (props) => {
  // const [data, setData] = useState(null);
  const data = props.FrontendData && props.FrontendData;

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${
        JSON.parse(localStorage.getItem("credentials")).role
      }/existingrelease/frontend`
    );
  };

  const inputOptions1 = [
    {
      btnID: "featuresSummary",
      btnType: "text",
      btnClass: "validate",
      btnText: "Features Summary",
      btnWidth: "m12",
      btnValue: data && data[0].featuresSummary,
    },
  ];
  const inputOptions2 = [
    {
      btnID: "platform",
      btnType: "text",
      btnClass: "",
      btnText: "Platform",
      btnWidth: "m4",
      btnValue: data && data[0].platform,
    },
    {
      btnID: "releaseType",
      btnType: "text",
      btnClass: "",
      btnText: "Release Type",
      btnWidth: "m4",
      btnValue: data && data[0].releaseType,
    },
    {
      btnID: "releaseVersion",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Release Version",
      btnWidth: "m4",
      btnValue: data && data[0].releaseVersion,
    },
  ];
  const inputOptions3 = [
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m3",
      btnValue: data && data[0].impact,
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m3",
      btnValue: data && data[0].impactAreas,
    },
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m3",
      btnValue: data && data[0].developerPOC,
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA Point of Contact",
      btnWidth: "m3",
      btnValue: data && data[0].qaPOC,
    },
  ];
  const inputOptions4 = [
    {
      btnID: "releasePercentage",
      btnType: "text",
      btnClass: "",
      btnText: "Release Percentage",
      btnWidth: "m3",
      btnValue: data && data[0].releasePercentage,
    },
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m3",
      btnValue: data && data[0].releaseWindow,
    },
  ];
  const dateOptions = [
    {
      id: "releaseSignOffDate",
      name: "Release SignOff Date",
      width: "m3",
      disabled: true,
      btnValue: data && data[0].releaseSignOffDate,
    },
    {
      id: "releaseDate",
      name: "Release Date",
      width: "m3",
      disabled: false,
      btnValue: data && data[0].releaseDate,
    },
  ];

  return (
    <div className="center">
      <div className="padding-top-40px"></div>
      <div className="card z-depth-2 formStyle1">
        <h2 className="red-text text-darken-1">FrontEnd Release</h2>
        <div className="padding-top-20px"></div>
        <div className="divider"></div>
        <div className="padding-top-20px">
          <form onSubmit={(event) => submitHandler(event)}>
            <div className="padding-top-20px"></div>
            {[inputOptions1].map((option) => (
              <div className="row">
                {option.map((element) => (
                  <Input
                    key={element.btnID}
                    btnID={element.btnID}
                    btnType={element.btnType}
                    btnClass={element.btnClass}
                    btnText={element.btnText}
                    btnWidth={element.btnWidth}
                    btnValue={element.btnValue}
                    // changeHandler={this.changeHandler}
                  />
                ))}
              </div>
            ))}
            {[inputOptions2, inputOptions3].map((option) => (
              <div className="row">
                {option.map((element) => (
                  <Input
                    key={element.btnID}
                    btnID={element.btnID}
                    btnType={element.btnType}
                    btnClass={element.btnClass}
                    btnText={element.btnText}
                    btnWidth={element.btnWidth}
                    btnValue={element.btnValue}
                    // changeHandler={this.changeHandler}
                  />
                ))}
              </div>
            ))}
            <div className="row">
              {inputOptions4.map((element) => (
                <Input
                  key={element.btnID}
                  btnID={element.btnID}
                  btnType={element.btnType}
                  btnClass={element.btnClass}
                  btnText={element.btnText}
                  btnWidth={element.btnWidth}
                  btnValue={element.btnValue}
                  // changeHandler={this.changeHandler}
                />
              ))}
              {dateOptions.map((element) => (
                <DatePickerHOC
                  key={element.id}
                  id={element.id}
                  name={element.name}
                  width={element.width}
                  disabled={element.disabled}
                  btnValue={element.btnValue}

                  // changeHandler={this.dateHandler}
                />
              ))}
            </div>
            <div className="input-field col s12">
              <Button />
              {/* <Button submitHandler={submitHandler} /> */}
            </div>
            <div className="padding-top-10px"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FrontendDetails);
