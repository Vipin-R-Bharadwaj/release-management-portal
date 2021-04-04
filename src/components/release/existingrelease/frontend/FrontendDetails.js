import { withRouter } from 'react-router';
import Button from './form/Button';
import DatePickerHOC from './form/DatePickerHOC';
import Input from './form/Input';
import { useState } from 'react';

const FrontendDetails = (props) => {
  const data = JSON.parse(localStorage.getItem('Existing Release')).frontend;
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

  const submitHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${
        JSON.parse(localStorage.getItem('credentials')).role
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

  const inputOptions3 = [
    {
      btnID: 'developerPOC',
      btnType: 'text',
      btnClass: '',
      btnText: 'Developer Point of Contact',
      btnWidth: 'm4',
      disabled: true,
      btnValue: { developerPOC },
      changeHandler: { setDeveloperPOC },
    },
    {
      btnID: 'qaPOC',
      btnType: 'text',
      btnClass: '',
      btnText: 'QA Point of Contact',
      btnWidth: 'm5',
      disabled: true,
      btnValue: { qaPOC },
      changeHandler: { setQaPOC },
    },
  ];
  const inputOptions4 = [
    {
      btnID: 'releasePercentage',
      btnType: 'text',
      btnClass: '',
      disabled: true,
      btnText: 'Release Percentage',
      btnWidth: 'm4',
      btnValue: { releasePercentage },
      changeHandler: { setReleasePercentage },
    },
    {
      btnID: 'releaseWindow',
      btnType: 'text',
      btnClass: '',
      disabled: true,
      btnText: 'Release Window',
      btnWidth: 'm5',
      btnValue: { releaseWindow },
      changeHandler: { setReleaseWindow },
    },
  ];
  const dateOptions1 = [
    {
      id: 'releaseSignOffDate',
      disabled: true,
      dateHandler: { setReleaseSignOffDate },
      value: { releaseSignOffDate },
    },
  ];
  const dateOptions2 = [
    {
      id: 'releaseDate',
      disabled: true,
      dateHandler: { setReleaseDate },
      value: { releaseDate },
    },
  ];

  const backHandler = (event) => {
    event.preventDefault();
    props.history.replace(
      `/${JSON.parse(localStorage.getItem('credentials')).role}/newrelease`
    );
  };

  return (
    <div>
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
                    btnValue={featuresSummary}
                    btnWidth="m6"
                    disabled
                    changeHandler={setFeaturesSummary}
                  />
                  <Input
                    key="platform"
                    btnID="platform"
                    btnType="text"
                    btnClass="validate"
                    btnText="Platform"
                    btnWidth="m3"
                    btnValue={platform}
                    disabled
                    changeHandler={setPlatform}
                  />
                  <Input
                    key="releaseType"
                    btnID="releaseType"
                    btnType="text"
                    btnClass="validate"
                    btnText="Release Type"
                    btnWidth="m3"
                    btnValue={releaseType}
                    disabled
                    changeHandler={setReleaseType}
                  />
                </div>
                <div className="row">
                  <Input
                    key="releaseVersion"
                    btnID="releaseVersion"
                    btnType="text"
                    btnClass="validate"
                    btnText="Release Version"
                    btnValue={releaseVersion}
                    btnWidth="m4"
                    disabled
                    changeHandler={setReleaseVersion}
                  />
                  <Input
                    key="impact"
                    btnID="impact"
                    btnType="text"
                    btnClass="validate"
                    btnText="Impact"
                    btnValue={impact}
                    btnWidth="m4"
                    disabled
                    changeHandler={setImpact}
                  />
                  <Input
                    key="impactAreas"
                    btnID="impactAreas"
                    btnType="text"
                    btnClass="validate"
                    btnText="Impact Areas"
                    btnValue={impactAreas}
                    btnWidth="m4"
                    disabled
                    changeHandler={setImpactAreas}
                  />
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
                      disabled={element.disabled}
                      btnValue={element.btnValue}
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
                      btnValue={element.btnValue}
                      disabled={element.disabled}
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
    // <div className="center">
    //   <div className="padding-top-40px"></div>
    //   <div className="card z-depth-2 formStyle1">
    //     <h2 className="blue-grey-text text-darken-2">FRONTEND RELEASE</h2>
    //     <div className="padding-top-20px">
    //       <div className="divider"></div>
    //       <div className="padding-top-20px"></div>
    //       <form onSubmit={(event) => submitHandler(event)}>
    //         <div className="row">
    //           <Input
    //             key="featuresSummary"
    //             btnID="featuresSummary"
    //             btnType="text"
    //             btnClass="validate"
    //             btnText="Features Summary"
    //             btnValue={featuresSummary}
    //             disabled
    //             btnWodth="m6"
    //             changeHandler={setFeaturesSummary}
    //           />
    //           <div className="col s12 m3">
    //             <CreatableSelect
    //               placeholder="Platform"
    //               // isClearable
    //               options={platformList}
    //               onChange={(event) => {
    //                 setPlatform(event.value);
    //               }}
    //               maxMenuHeight={platformList.length * 42.5}
    //             />
    //           </div>
    //           <div className="col s12 m3">
    //             <CreatableSelect
    //               placeholder="Release Type"
    //               // isClearable
    //               options={releaseTypeList}
    //               onChange={(event) => {
    //                 setReleaseType(event.value);
    //               }}
    //               maxMenuHeight={releaseTypeList.length * 42.5}
    //             />
    //           </div>
    //         </div>
    //         <div className="row">
    //           <Input
    //             key="releaseVersion"
    //             btnID="releaseVersion"
    //             btnType="text"
    //             btnClass="validate"
    //             btnText="Release Version"
    //             btnValue={releaseVersion}
    //             btnWodth="m4"
    //             changeHandler={setReleaseVersion}
    //           />
    //           <div className="col s12 m4">
    //             <CreatableSelect
    //               placeholder="Impact"
    //               // isClearable
    //               options={impactList}
    //               onChange={(event) => {
    //                 setImpact(event.value);
    //               }}
    //               maxMenuHeight={impactList.length * 42.5}
    //             />
    //           </div>
    //           <div className="col s12 m4">
    //             <CreatableSelect
    //               placeholder="Impact Areas"
    //               // isClearable
    //               options={impactAreasList}
    //               onChange={(event) => {
    //                 setImpactAreas(event.value);
    //               }}
    //               maxMenuHeight={5 * 42.5}
    //             />
    //           </div>
    //         </div>
    //         <div className="row">
    //           <Input
    //             key="developerPOC"
    //             btnID="developerPOC"
    //             btnType="text"
    //             btnClass=""
    //             btnText="Developer Point of Contact"
    //             btnValue={developerPOC}
    //             btnWodth="m4"
    //             changeHandler={setDeveloperPOC}
    //           />
    //           <Input
    //             key="waPOC"
    //             btnID="qaPOC"
    //             btnType="text"
    //             btnClass=""
    //             btnText="QA Point of Contact"
    //             btnValue={qaPOC}
    //             btnWodth="m5"
    //             changeHandler={setQaPOC}
    //           />
    //           <DatePickerHOC
    //             id="releaseSignOffDate"
    //             label="Release Sign Off Date"
    //             changeHandler={setReleaseSignOffDate}
    //           />
    //           <label htmlFor="releaseSignOffDate"></label>
    //         </div>
    //         <div className="row">
    //           <DatePickerHOC
    //             id="releaseDate"
    //             label="Release Date"
    //             changeHandler={setReleaseDate}
    //           />
    //           <Input
    //             key="releasePercentage"
    //             btnID="releasePercentage"
    //             btnType="text"
    //             btnClass=""
    //             btnText="Release Percentage"
    //             btnValue={releasePercentage}
    //             btnWodth="m4"
    //             changeHandler={setReleasePercentage}
    //           />
    //         </div>
    //         <div className="row">
    //           <Button
    //             btnName="Submit"
    //             iconName="send"
    //             iconAlign="right"
    //             btnColor="light-green darken-2"
    //             clickHandler={submitHandler}
    //           />
    //         </div>
    //         <div className="padding-top-10px"></div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default withRouter(FrontendDetails);
