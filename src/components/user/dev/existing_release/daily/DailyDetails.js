import { useState, useEffect } from "react";
import ValidateURL from "../../../../../validation/ValidateURL";
import Input from "./form/Input";
import Button from "./form/Button";
import DatePickerHOC from "./form/DatePickerHOC";

const DailyDetails = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    fetch("http://localhost:8000/daily", { signal: abortCont.signal })
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

  const [item, setItem] = useState(null);
  const [pod, setPOD] = useState(null);
  const [releaseType, setReleaseType] = useState(null);
  const [description, setDescription] = useState(null);
  const [impact, setImpact] = useState(null);
  const [impactAreas, setImpactAreas] = useState(null);
  const [releaseStatus, setReleaseStatus] = useState(null);
  const [developerPOC, setDeveloperPOC] = useState(null);
  const [tor, setTOR] = useState(null);
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

  // state = {
  //   item: null,
  //   pod: null,
  //   releaseType: null,
  //   description: null,
  //   impact: null,
  //   impactAreas: null,
  //   releaseStatus: null,
  //   developerPOC: null,
  //   tor: null,
  //   prLink: null,
  //   releaseDate: null,
  //   techPRSignoffDate: null,
  //   sqlApproval: null,
  //   heavySQLAlter: null,
  //   qaPOC: null,
  //   stageQASignoffDate: null,
  //   integrationQASignoffDate: null,
  //   rollOut: null,
  //   requiresBAR: null,
  //   barDate: null,
  // };

  const inputOptions1 = [
    {
      btnID: "item",
      btnType: "text",
      btnClass: "validate",
      btnText: "Item",
      btnWidth: "m6",
      btnValue: data && data[0][1].item,
      changeHandler: { setItem },
    },
    {
      btnID: "pod",
      btnType: "text",
      btnClass: "",
      btnText: "POD",
      btnWidth: "m3",
      btnValue: data && data[0][1].pod,
      changeHandler: { setPOD },
    },
    {
      btnID: "releaseType",
      btnType: "text",
      btnClass: "",
      btnText: "Release Type",
      btnWidth: "m3",
      btnValue: data && data[0][1].releaseType,
      changeHandler: { setReleaseType },
    },
  ];
  const inputOptions2 = [
    {
      btnID: "description",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Description",
      btnWidth: "m12",
      btnValue: data && data[0][1].description,
      changeHandler: { setDescription },
    },
  ];
  const inputOptions3 = [
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m4",
      btnValue: data && data[0][1].impact,
      changeHandler: { setImpact },
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m4",
      btnValue: data && data[0][1].impactAreas,
      changeHandler: { setImpactAreas },
    },
    {
      btnID: "releaseStatus",
      btnType: "text",
      btnClass: "",
      btnText: "Release Status",
      btnWidth: "m4",
      btnValue: data && data[0][1].releaseStatus,
      changeHandler: { setReleaseStatus },
    },
  ];
  const inputOptions4 = [
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m6",
      btnValue: data && data[0][1].developerPOC,
      changeHandler: { setDeveloperPOC },
    },
    {
      btnID: "tor",
      btnType: "text",
      btnClass: "",
      btnText: "TOR",
      btnWidth: "m6",
      btnValue: data && data[0][1].tor,
      changeHandler: { setTOR },
    },
  ];
  const inputOptions5 = [
    {
      btnID: "prLink",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "PR Link",
      btnWidth: "m9",
      btnValue: data && data[0][1].prLink,
      changeHandler: { setPrLink },
    },
  ];
  const inputOptions6 = [
    {
      btnID: "sqlApproval",
      btnType: "text",
      btnClass: "text",
      btnText: "SQL Approval",
      btnWidth: "m3",
      btnValue: data && data[0][1].sqlApproval,
      changeHandler: { setSqlApproval },
    },
    {
      btnID: "heavySQLAlter",
      btnType: "text",
      btnClass: "",
      btnText: "Heavy SQL Alter",
      btnWidth: "m3",
      btnValue: data && data[0][1].heavySQLAlter,
      changeHandler: { setHeavySQLAlter },
    },
    {
      btnID: "qaPOC",
      btnType: "text",
      btnClass: "",
      btnText: "QA POC",
      btnWidth: "m3",
      btnValue: data && data[0][1].qaPOC,
      changeHandler: { setQaPOC },
    },
  ];
  const inputOptions7 = [
    {
      btnID: "rollOut",
      btnType: "text",
      btnClass: "text",
      btnText: "Rollout",
      btnWidth: "m2",
      btnValue: data && data[0][1].rollOut,
      changeHandler: { setRollOut },
    },
    {
      btnID: "requiresBAR",
      btnType: "text",
      btnClass: "",
      btnText: "Requires BAR",
      btnWidth: "m2",
      btnValue: data && data[0][1].requiresBAR,
      changeHandler: { setRequiresBAR },
    },
    {
      btnID: "barDate",
      btnType: "text",
      btnClass: "",
      btnText: "BAR Date",
      btnWidth: "m2",
      btnValue: data && data[0][1].barDate,
      changeHandler: { setBarDate },
    },
  ];

  return (
    <div className="card z-depth-2 formStyle1">
      <div className="padding-top-20px">
        <form onSubmit={(event) => submitHandler(event)}>
          {[
            [inputOptions1, 0],
            [inputOptions2, 1],
            [inputOptions3, 2],
            [inputOptions4, 3],
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
                  btnValue={element.btnValue}
                  changeHandler={element.changeHandler}
                />
              ))}
            </div>
          ))}
          <div className="row">
            <DatePickerHOC
              key={4}
              id="releaseDate"
              name="Release Date"
              changeHandler={(event) => setReleaseDate(event.target.value)}
              disabled={true}
            />
            {inputOptions5.map((element) => (
              <Input
                key={element.btnID}
                btnID={element.btnID}
                btnClass={element.btnClass}
                btnType={element.btnType}
                btnText={element.btnText}
                btnWidth={element.btnWidth}
                btnValue={element.btnValue}
                changeHandler={element.changeHandler}
              />
            ))}
          </div>
          <div className="row">
            <DatePickerHOC
              key={5}
              id="techPRSignoffDate"
              name="Tech PR Signoff Date"
              changeHandler={(event) =>
                setTechPRSignoffDate(event.target.value)
              }
              disabled={true}
            />
            {inputOptions6.map((element) => (
              <Input
                key={element.btnID}
                btnID={element.btnID}
                btnClass={element.btnClass}
                btnType={element.btnType}
                btnText={element.btnText}
                btnWidth={element.btnWidth}
                btnValue={element.btnValue}
                changeHandler={element.changeHandler}
              />
            ))}
          </div>
          <div className="row">
            {[
              [
                "stageQASignoffDate",
                "Stage QA Signoff Date",
                false,
                6,
                setStageQASignoffDate,
              ],
              [
                "integrationQASignoffDate",
                "Integration QA Signoff Date",
                false,
                7,
                setIntegrationQASignoffDate,
              ],
            ].map((element) => (
              <DatePickerHOC
                id={element[0]}
                name={element[1]}
                changeHandler={element[4]}
                key={element[3]}
                disabled={element[2]}
              />
            ))}
            {inputOptions7.map((element) => (
              <Input
                key={element.btnID}
                btnID={element.btnID}
                btnClass={element.btnClass}
                btnType={element.btnType}
                btnText={element.btnText}
                btnWidth={element.btnWidth}
                btnValue={element.btnValue}
                changeHandler={element.changeHandler}
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
  );
};

export default DailyDetails;
