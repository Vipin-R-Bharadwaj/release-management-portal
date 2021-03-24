import { Link } from "react-router-dom";

const DevFrontendList = ({ id, data }) => {
  return (
    <tr key={id}>
      <td className="slnoStyle">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.id}
        </Link>
      </td>
      <td className="releaseStyle">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.release}
        </Link>
      </td>
      <td className="summaryStyle">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.featuresSummary}
        </Link>
      </td>
      <td className="center">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.releaseType}
        </Link>
      </td>
      <td className="center">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.releaseSignOffDate}
        </Link>
      </td>
      <td className="center">
        <Link to={`/dev/existingrelease/frontend/${id}`} className="black-text">
          {data.releaseDate}
        </Link>
      </td>
    </tr>
  );
};

export default DevFrontendList;
