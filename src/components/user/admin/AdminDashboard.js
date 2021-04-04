import { withRouter } from 'react-router';
import useFetch from '../../../useFetch';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

const AdminDashboard = (props) => {
  const data = useFetch('http://localhost:8000/login');

  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  // const [editusername, setEditUsername] = useState(null);
  // const [editpassword, setEditPassword] = useState(null);
  // const [editconfirmPassword, setEditConfirmPassword] = useState(null);
  // const [editemail, setEditEmail] = useState(null);
  // const [editemployeeId, setEditEmployeeId] = useState(null);
  // const [editpodId, setEditPodId] = useState(null);
  // const [editRole, setEditRole] = useState(null);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const [podId, setPodId] = useState(null);
  const [role, setRole] = useState(null);

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  // const handleCloseEdit = () => {
  //   setOpenEdit(false);
  // };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const [option, setOption] = useState('1');

  // const clickHandler = (event) => {
  //   if (event !== null) {
  //     setOption(event.value);
  //   }
  // };

  // const optionList = [
  //   { label: 'Developer', value: '1' },
  //   { label: 'Manager', value: '2' },
  //   { label: 'Release Manager', value: '3' },
  //   { label: 'Devops', value: '4' },
  // ];

  // const submitEditHandler = (event) => {
  //   event.preventDefault();
  //   password === confirmPassword ? (
  //     <>
  //       {console.log({
  //         username: username,
  //         password: password,
  //         confirmPassword: confirmPassword,
  //         email: email,
  //         employeeId: employeeId,
  //         podId: podId,
  //       })}
  //       {handleCloseAdd()}
  //     </>
  //   ) : (
  //     window.M.toast({ html: 'Passwords dont match' })
  //   );
  // };

  const submitAddHandler = (event) => {
    event.preventDefault();
    const roleArray = [];
    roleArray.push(role);
    password === confirmPassword ? (
      <>
        {console.log({
          username: username,
          password: password,
          email: email,
          employeeId: employeeId,
          podId: podId,
          role: roleArray,
        })}
        {}
        {fetch('http://localhost:8081/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            eid: employeeId,
            role: roleArray,
            podid: podId,
          }),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => console.log(data))}
        {handleCloseAdd()}
      </>
    ) : (
      window.M.toast({ html: 'Passwords dont match' })
    );
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    console.log('Deleted!');
  };

  const body = (
    <form className="grey darken-4 container formStyle1">
      <div className="row">
        <h1 className="center white-text">Add User</h1>
      </div>
      <div className="padding-top-5px divider red"></div>
      <div className="padding-top-40px"></div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            id="username"
            type="text"
            className="white-text"
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="username" className="white-text">
            Username
          </label>
        </div>
        <div className="input-field col s12 m6">
          <input
            id="email"
            type="email"
            className="white-text validate"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="email" className="white-text">
            Email
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m6">
          <input
            id="password"
            type="password"
            className="white-text validate"
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="password" className="white-text">
            Password
          </label>
        </div>
        <div className="input-field col s12 m6">
          <input
            id="confirmpassword"
            type="password"
            className="white-text validate"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <label htmlFor="confirmpassword" className="white-text">
            Confirm Password
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 m4">
          <input
            id="eid"
            type="text"
            className="white-text validate"
            onChange={(event) => setEmployeeId(event.target.value)}
          />
          <label htmlFor="eid" className="white-text">
            Employee ID
          </label>
        </div>
        <div className="input-field col s12 m4">
          <input
            id="podid"
            type="text"
            className="white-text validate"
            onChange={(event) => setPodId(event.target.value)}
          />
          <label htmlFor="podid" className="white-text">
            Pod ID
          </label>
        </div>
        <div className="input-field col s12 m4">
          <input
            id="role"
            type="text"
            className="white-text validate"
            onChange={(event) => setRole(event.target.value)}
          />
          <label htmlFor="podid" className="white-text">
            Role
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12 center">
          <button
            className="btn waves-effect red waves-light"
            type="submit"
            onClick={(event) => submitAddHandler(event)}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
      <div className="padding-top-10px"></div>
    </form>
  );

  return (
    <div className="padding-top-40px">
      <div className="row">
        <div className="col s12 m2 center">
          <button
            className="btn teal darken-3 btn-large waves-effect waves-light"
            onClick={(event) => handleOpenAdd(event)}
          >
            Add User
          </button>
        </div>
        <div className="col s12 m8 white center">
          <div className="card z-depth-3">
            <table className="highlight responsive">
              <thead>
                <tr className="light-green darken-2 white-text">
                  <th className="center">Employee ID</th>
                  <th className="center">POD ID</th>
                  <th className="center">Employee Name</th>
                  <th className="center">Employee Email</th>
                  <th className="center">Employee Role</th>
                  <th className="center">Edit</th>
                  <th className="center">Delete</th>
                </tr>
              </thead>

              <tbody>
                {data &&
                  data.map((record) => {
                    return (
                      <tr key={record.eid}>
                        <td className="center">{record.eid}</td>
                        <td className="center">{record.podid}</td>
                        <td className="center">{record.username}</td>
                        <td className="left">{record.email}</td>
                        <td>{record.role}</td>
                        <td className="center">
                          <button
                            id={record.eid}
                            className="btn btn-flat transparent waves-effect waves-light"
                            onClick={(event) => handleOpenEdit(event, record)}
                          >
                            <i
                              id={record.eid}
                              className="material-icons amber-text accent-2"
                            >
                              edit
                            </i>
                          </button>
                        </td>
                        <td className="center">
                          <button className="btn btn-flat transparent waves-effect waves-light">
                            <i
                              id={record.eid}
                              className="material-icons red-text accent-2"
                              onClick={(event) => deleteHandler(event)}
                            >
                              delete
                            </i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <Modal
              open={openAdd}
              onClose={handleCloseAdd}
              style={{ padding: '7%' }}
            >
              {body}
            </Modal>
          </div>
        </div>
        {/* <div className="col s12 m2 center">
          <CreatableSelect
            placeholder="All"
            // isClearable
            options={optionList}
            onChange={(event) => {
              clickHandler(event);
            }}
            defaultValue={option}
            maxMenuHeight={170}
          />
        </div> */}
      </div>
    </div>
  );
};

export default withRouter(AdminDashboard);
