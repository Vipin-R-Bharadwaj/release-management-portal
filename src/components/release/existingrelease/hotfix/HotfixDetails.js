import { withRouter } from "react-router";
// import ValidateURL from "../../../../../validation/ValidateURL";
import Button from "./form/Button";
import DatePicker from "./form/DatePicker";
import Input from "./form/Input";

const HotfixDetails = (props) => {
  // const [data, setData] = useState(null);
  const data = props.HotfixData && props.HotfixData;

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace("/dev/existingrelease/hotfix");
  };
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
  //   releaseWindow: null,
  //   approvedBy: null,
  //   heavySQLAlter: null,
  //   qaBy: null,
  //   srd: null,
  //   soh: null,
  // };

  const inputOptions1 = [
    {
      btnID: "item",
      btnType: "text",
      btnClass: "",
      btnText: "Item",
      btnWidth: "m6",
      btnValue: data && data[0].item,
    },
    {
      btnID: "pod",
      btnType: "text",
      btnClass: "",
      btnText: "POD",
      btnWidth: "m3",
      btnValue: data && data[0].pod,
    },
    {
      btnID: "releaseType",
      btnType: "text",
      btnClass: "",
      btnText: "Release Type",
      btnWidth: "m3",
      btnValue: data && data[0].releaseType,
    },
  ];
  const inputOptions2 = [
    {
      btnID: "description",
      btnType: "text",
      btnClass: "materialize-textarea",
      btnText: "Description",
      btnWidth: "m12",
      btnValue: data && data[0].description,
    },
  ];
  const inputOptions3 = [
    {
      btnID: "impact",
      btnType: "text",
      btnClass: "",
      btnText: "Impact",
      btnWidth: "m4",
      btnValue: data && data[0].impact,
    },
    {
      btnID: "impactAreas",
      btnType: "text",
      btnClass: "",
      btnText: "Impact Areas",
      btnWidth: "m4",
      btnValue: data && data[0].impactAreas,
    },
    {
      btnID: "releaseStatus",
      btnType: "text",
      btnClass: "",
      btnText: "Release Status",
      btnWidth: "m4",
      btnValue: data && data[0].releaseStatus,
    },
  ];
  const inputOptions4 = [
    {
      btnID: "developerPOC",
      btnType: "text",
      btnClass: "",
      btnText: "Developer Point of Contact",
      btnWidth: "m6",
      btnValue: data && data[0].developerPOC,
    },
    {
      btnID: "tor",
      btnType: "text",
      btnClass: "",
      btnText: "Type of Release",
      btnWidth: "m6",
      btnValue: data && data[0].tor,
    },
  ];
  const inputOptions5 = [
    {
      btnID: "prLink",
      btnType: "text",
      btnClass: "",
      btnText: "PR Link",
      btnWidth: "m9",
      btnValue: data && data[0].prLink,
    },
  ];
  const inputOptions6 = [
    {
      btnID: "releaseWindow",
      btnType: "text",
      btnClass: "",
      btnText: "Release Window",
      btnWidth: "m4",
      btnValue: data && data[0].releaseWindow,
    },
    {
      btnID: "approvedBy",
      btnType: "text",
      btnClass: "",
      btnText: "Approved By",
      btnWidth: "m4",
      btnValue: data && data[0].approvedBy,
    },
    {
      btnID: "heavySQLAlter",
      btnType: "text",
      btnClass: "",
      btnText: "Heavy SQL Alter",
      btnWidth: "m4",
      btnValue: data && data[0].heavySQLAlter,
    },
  ];
  const inputOptions7 = [
    {
      btnID: "qaBy",
      btnType: "text",
      btnClass: "",
      btnText: "QA By",
      btnWidth: "m4",
      btnValue: data && data[0].qaBy,
    },
    {
      btnID: "srd",
      btnType: "text",
      btnClass: "",
      btnText: "Source Release Date",
      btnWidth: "m4",
      btnValue: data && data[0].srd,
    },
    {
      btnID: "soh",
      btnType: "text",
      btnClass: "",
      btnText: "Source of Hotfix (Previous release)",
      btnWidth: "m4",
      btnValue: data && data[0].soh,
    },
  ];

  return (
    <div className="container center">
      <div className="card z-depth-2 formStyle1">
        <div className="padding-top-20px">
          <form onSubmit={(event) => submitHandler(event)}>
            {[inputOptions1, inputOptions2, inputOptions3, inputOptions4].map(
              (option) => (
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
                      // changeHandler={changeHandler}
                    />
                  ))}
                </div>
              )
            )}
            <div className="row">
              <div className="col s12 m3 valign-wrapper">
                <DatePicker
                  id="releaseDate"
                  // changeHandler={(event) => changeHandler(event)}
                  disabled={true}
                />
              </div>
              {inputOptions5.map((element) => (
                <Input
                  key={element.btnID}
                  btnID={element.btnID}
                  btnType={element.btnType}
                  btnClass={element.btnClass}
                  btnText={element.btnText}
                  btnWidth={element.btnWidth}
                  btnValue={element.btnValue}
                  // changeHandler={changeHandler}
                />
              ))}
            </div>
            {[inputOptions6, inputOptions7].map((option) => (
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
                    // changeHandler={changeHandler}
                  />
                ))}
              </div>
            ))}
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
};

export default withRouter(HotfixDetails);
