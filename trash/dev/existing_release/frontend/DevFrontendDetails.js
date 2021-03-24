import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Button from "./form/Button";
import DatePickerHOC from "./form/DatePickerHOC";
import Input from "./form/Input";

const DevFrontendDetails = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch("http://localhost:8000/frontend", { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data from endpoint");
        }
        return res.json();
      })
      .then((info) => {
        var result = Object.keys(info).map((key) => [key, info[key]]);
        console.log(result);
        setData(result);
      })
      .catch((err) => {
        if (err.name === "AboutError") console.log(err);
      });
    return () => abortCont.abort();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace("/dev/existingrelease/frontend");
  };

  const inputOptions1 = [
    {
      btnID: "featuresSummary",
      btnType: "text",
      btnClass: "validate",
      btnText: "Features Summary",
      btnWidth: "m12",
      btnValue: data && data[0][1].featuresSummary,
    },
  ];
  const inputOptions2 = [
    {
      btnID: "platform",
      btnType: "text",
      btnClass: "",
      btnText: "Platform",
      btnWidth: "m4",
      btnValue: data && data[0][1].platform,
    },
    {
      btnID: "releaseType",
      btnType: "text",
      btnClass: "",
      btnText: "Release Type",
      btnWidth: "m4",
      btnValue: data && data[0][1].releaseType,
    },
    {
      btnID: "releaseVersion",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Release Version",
      btnWidth: "m4",
      btnValue: data && data[0][1].releaseVersion,
    },
  ];
  const inputOptions3 = [
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m3",
      btnValue: data && data[0][1].impact,
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m3",
      btnValue: data && data[0][1].impactAreas,
    },
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m3",
      btnValue: data && data[0][1].developerPOC,
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA Point of Contact",
      btnWidth: "m3",
      btnValue: data && data[0][1].qaPOC,
    },
  ];
  const inputOptions4 = [
    {
      btnID: "releasePercentage",
      btnType: "text",
      btnClass: "",
      btnText: "Release Percentage",
      btnWidth: "m3",
      btnValue: data && data[0][1].releasePercentage,
    },
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m3",
      btnValue: data && data[0][1].releaseWindow,
    },
  ];
  const dateOptions = [
    {
      id: "releaseSignOffDate",
      name: "Release SignOff Date",
      width: "m3",
      disabled: true,
      btnValue: data && data[0][1].releaseSignOffDate,
    },
    {
      id: "releaseDate",
      name: "Release Date",
      width: "m3",
      disabled: false,
      btnValue: data && data[0][1].releaseDate,
    },
  ];

  return (
    <div className="container center">
      <div className="card z-depth-2 formStyle1">
        <div className="padding-top-20px">
          <form onSubmit={(event) => submitHandler(event)}>
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

export default withRouter(DevFrontendDetails);
