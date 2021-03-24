import { Link } from "react-router-dom";

const ReleaseList = ({ typeOfRelease, id, data }) => {
  return (
    <tr key={id}>
      <td className="slnoStyle">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {data.id}
        </Link>
      </td>
      <td className="releaseStyle">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {data.release}
        </Link>
      </td>
      <td className="summaryStyle">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {/* {console.log(data.featuresSummary)} */}
          {data.featuresSummary === undefined
            ? data.description
            : data.featuresSummary}
        </Link>
      </td>
      <td className="center">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {data.releaseType}
        </Link>
      </td>
      <td className="center">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {data.releaseSignOffDate ? data.releaseSignOffDate : "NA"}
        </Link>
      </td>
      <td className="center">
        <Link
          to={`/${
            JSON.parse(localStorage.getItem("credentials")).role
          }/existingrelease/${typeOfRelease}/${id}`}
          className="black-text"
        >
          {data.releaseDate}
        </Link>
      </td>
    </tr>
  );
};

export default ReleaseList;
