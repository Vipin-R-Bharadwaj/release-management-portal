const DevReleaseList = ({ state }) => {
  const tableHeading = Object.keys(state).map((key) => [key, state[key]]);
  return (
    <div>
      <table className="responsive-table highlight">
        <thead>
          <tr>
            {tableHeading.map((element) => {
              return <th key={element[0]}>{element[0]}</th>;
            })}
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

export default DevReleaseList;
