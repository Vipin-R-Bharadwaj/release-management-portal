import { withRouter } from 'react-router';
import Button from './Button';
import DatePicker from './DatePicker';
import Input from './Input';
import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';

const HotfixForm = (props) => {
  const getDropdown = (arr) => {
    console.log(arr);
    var tmp = [];
    for (var i = 0; i < arr.length; ++i) {
      if (arr[i] !== undefined) {
        tmp.push({ label: arr[i], value: arr[i] });
      }
    }
    return tmp;
  };

  const podList = getDropdown(JSON.parse(localStorage.getItem('Dropdown')).pod);

  const releaseTypeList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).releaseType
  );

  const impactList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).impact
  );

  const impactAreasList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).impactAreas
  );

  const releaseStatusList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).releaseStatus
  );

  const torList = getDropdown(JSON.parse(localStorage.getItem('Dropdown')).tor);

  const approvedByList = getDropdown(
    JSON.parse(localStorage.getItem('Dropdown')).approvedBy
  );

  const heavySQLAlterList = [
    {
      label: 'Yes',
      value: 'Yes',
    },
    {
      label: 'No',
      value: 'No',
    },
  ];

  const [item, setItem] = useState(null);
  const [pod, setPod] = useState(null);
  const [releaseType, setReleaseType] = useState(null);
  const [description, setDescription] = useState(null);
  const [impact, setImpact] = useState(null);
  const [impactAreas, setImpactAreas] = useState(null);
  const [releaseStatus, setReleaseStatus] = useState(null);
  const [developerPOC, setDeveloperPOC] = useState(null);
  const [tor, setTor] = useState(null);
  const [prLink, setPrLink] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [releaseWindow, setReleaseWindow] = useState(null);

  const [approvedBy, setApprovedBy] = useState(null);
  const [heavySQLAlter, setHeavySQLAlter] = useState(null);
  const [qaBy, setQaBy] = useState(null);
  const [srd, setSrd] = useState(null);
  const [soh, setSoh] = useState(null);

  const inputOptions7 = [
    {
      btnID: 'qaBy',
      btnType: 'text',
      btnClass: '',
      btnText: 'QA By',
      btnWidth: 'm4',
      changeHandler: { setQaBy },
    },
    {
      btnID: 'srd',
      btnType: 'text',
      btnClass: '',
      btnText: 'Source Release Date',
      btnWidth: 'm4',
      changeHandler: { setSrd },
    },
    {
      btnID: 'soh',
      btnType: 'text',
      btnClass: '',
      btnText: 'Source of Hotfix',
      btnWidth: 'm4',
      changeHandler: { setSoh },
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Form Submitted!');
    props.history.push(
      `/${JSON.parse(localStorage.getItem('credentials')).role}/newrelease`
    );
    // ValidateURL(state.prLink)
    //   ? console.log(state)
    //   : alert("Enter Valid PR Link");
  };
  const backHandler = (event) => {
    event.preventDefault();
    props.history.push(
      `/${JSON.parse(localStorage.getItem('credentials')).role}/newrelease`
    );
  };

  return (
    <div className="container">
      <div className="padding-top-40px"></div>
      <div className="center">
        <div className="card z-depth-2 formStyle1">
          <h2 className="red-text text-darken-1">Hotfix Release</h2>
          <div className="padding-top-20px"></div>
          <div className="divider"></div>
          <div className="padding-top-20px">
            <form onSubmit={(event) => submitHandler(event)}>
              <div className="row">
                <Input
                  key="item"
                  btnID="item"
                  btnType="text"
                  btnClass="validate"
                  btnText="Item"
                  btnWidth="m6"
                  changeHandler={setItem}
                />
                <div className="col s12 m3">
                  <CreatableSelect
                    placeholder="POD"
                    // isClearable
                    options={podList}
                    onChange={(event) => {
                      setPod(event.value);
                    }}
                    maxMenuHeight={8 * 42.5}
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
                  key="description"
                  btnID="description"
                  btnType="text"
                  btnClass="validate"
                  btnText="Description"
                  btnWidth="m12"
                  changeHandler={setItem}
                />
              </div>
              <div className="row">
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
                    maxMenuHeight={8 * 42.5}
                  />
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Release Status"
                    // isClearable
                    options={releaseStatusList}
                    onChange={(event) => {
                      setReleaseStatus(event.value);
                    }}
                    maxMenuHeight={releaseStatusList.length * 42.5}
                  />
                </div>
              </div>
              <div className="row">
                <Input
                  key="developerPOC"
                  btnID="developerPOC"
                  btnType="text"
                  btnClass=""
                  btnText="Developer Point of Contact"
                  btnWidth="m6"
                  changeHandler={setDeveloperPOC}
                />
                <div className="col s12 m6">
                  <CreatableSelect
                    placeholder="Type of Release"
                    // isClearable
                    options={torList}
                    onChange={(event) => {
                      setTor(event.value);
                    }}
                    maxMenuHeight={8 * 42.5}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s12 m3 valign-wrapper">
                  <DatePicker
                    id="releaseDate"
                    changeHandler={(event) => setReleaseDate(event)}
                    disabled={true}
                  />
                </div>
                <Input
                  key="prLink"
                  btnID="prLink"
                  btnType="text"
                  btnClass=""
                  btnText="PR Link"
                  btnWidth="m9"
                  changeHandler={setPrLink}
                />
              </div>
              <div className="row">
                <Input
                  key="releaseWindow"
                  btnID="releaseWindow"
                  btnType="text"
                  btnClass=""
                  btnText="Release Window"
                  btnWidth="m4"
                  changeHandler={setReleaseWindow}
                />
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Approved By"
                    // isClearable
                    options={approvedByList}
                    onChange={(event) => {
                      setApprovedBy(event.value);
                    }}
                    maxMenuHeight={approvedByList.length * 42.5}
                  />
                </div>
                <div className="col s12 m4">
                  <CreatableSelect
                    placeholder="Heavy SQL Alter"
                    // isClearable
                    options={heavySQLAlterList}
                    onChange={(event) => {
                      setHeavySQLAlter(event.value);
                    }}
                    maxMenuHeight={heavySQLAlterList.length * 42.5}
                  />
                </div>
              </div>

              {[inputOptions7].map((option) => (
                <div className="row">
                  {option.map((element) => (
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
              ))}
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
  );
};

export default withRouter(HotfixForm);
