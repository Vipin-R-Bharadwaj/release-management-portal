import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { withRouter } from 'react-router';
import DailyList from './DailyList';

const Daily = (props) => {
  const data = JSON.parse(localStorage.getItem('Existing Release')).daily;
  // const parsedData = Object.keys(data).map((key) => [key, data[key]]);
  const optionList = [
    { label: 'All', value: '1' },
    { label: 'Daily Release', value: '2' },
    { label: 'Frontend Release', value: '3' },
    { label: 'Hotfix Relese', value: '4' },
  ];
  const [option, setOption] = useState('2');
  const clickHandler = (event) => {
    if (event !== null) {
      setOption(event.value);
    }
  };
  return (
    <div className="container">
      {/* <div className="container"> */}
      <div className="padding-top-20px"></div>
      <CreatableSelect
        placeholder="Daily"
        // isClearable
        options={optionList}
        onChange={(event) => {
          clickHandler(event);
        }}
        defaultValue="Select release type"
        maxMenuHeight={170}
      />
      {option === '2' ? (
        <div className="row">
          <div className="padding-top-20px">
            <table className="highlight striped white">
              <thead>
                <tr>
                  <th className="center">Sl No</th>
                  <th className="center">Release</th>
                  <th>Feature Summary</th>
                  <th>Release Type</th>
                  <th>Release Signoff Date</th>
                  <th className="center">Release Date</th>
                </tr>
              </thead>
              <tbody>
                {console.log(data)}
                {data &&
                  data.map((element) => (
                    <DailyList
                      key={element.id}
                      id={element.id}
                      data={element}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : option === '1' ? (
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem('credentials')).role
          }/existingrelease/all`
        )
      ) : // <Daily />
      option === '3' ? (
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem('credentials')).role
          }/existingrelease/frontend`
        )
      ) : // <Frontend />
      option === '4' ? (
        props.history.push(
          `/${
            JSON.parse(localStorage.getItem('credentials')).role
          }/existingrelease/hotfix`
        )
      ) : (
        // <Hotfix />
        <> </>
      )}
      <div className="padding-top-20px"></div>
    </div>
  );
};

export default withRouter(Daily);
