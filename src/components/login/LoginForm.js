import Form from './form/Form';
import { useState } from 'react';
import pageImg from '../../images/about_bg.png';
// import ValidateInput from "../../validation/ValidateInput";
import { withRouter } from 'react-router';
import useFetch from '../../useFetch';
import { useEffect } from 'react';
import loginSuccess from './LoginSuccess';

const LoginForm = (props) => {
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const Data = useFetch('http://localhost:8000/login');

  useEffect(() => {
    localStorage.clear();
  }, []);

  const makeCall = async () => {
    const credentials = {
      email: email,
      password: password,
    };
    fetch('http://localhost:8000/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  };

  const changeHandler = (event) => {
    if (event.target.id === 'password') {
      setpassword(event.target.value);
    } else if (event.target.id === 'email') {
      setEmail(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const parsedData = Data && Object.keys(Data).map((key) => [key, Data[key]]);
    const loginStatus = parsedData.filter((data) => {
      if (data[1].email === email) return data[1];
      return null;
    });

    // console.log(localStorage.getItem("credentials"));
    loginStatus.length !== 0
      ? loginStatus[0][1].email === email &&
        loginStatus[0][1].password === password
        ? loginSuccess(
            email,
            password,
            loginStatus[0][1].role,
            loginStatus[0][1].eid,
            props.history.push
          )
        : // loginSuccess(loginStatus[0][1].role, loginStatus[0][1].eid)
          setErrorMessage(
            <h2 className="red-text text-accent-3">LOGIN FAILED!</h2>
          )
      : setErrorMessage(
          <h2 className="red-text text-accent-3">Invalid Credentials!</h2>
        );
  };

  return (
    <div className="row">
      {/* left half to display data */}
      <div className="col s12 m7">
        <div className="imgPadding">
          <img src={pageImg} alt="" className="imgSize" />
        </div>
      </div>
      {/* right half of the page to input credentials */}
      <div className="col s12 m5">
        <div className="container loginFormPadding">
          {/* form to take login input */}
          <Form changeHandler={changeHandler} submitHandler={submitHandler} />
        </div>
      </div>
      {/* display login failed message if incorrect login credentials is entered */}
      <div className="center">{errorMessage}</div>
    </div>
  );
};

export default withRouter(LoginForm);
