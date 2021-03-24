import Form from "./form/Form";
import { useState } from "react";
import pageImg from "../../images/page_img.png";
// import ValidateInput from "../../validation/ValidateInput";
import { withRouter } from "react-router";
import useFetch from "../../useFetch";
import { useEffect } from "react";

const LoginForm = (props) => {
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [loginData, setLoginData] = useState(null);
  const Data = useFetch("http://localhost:8000/login");

  useEffect(() => {
    localStorage.clear();
  }, []);

  const changeHandler = (event) => {
    if (event.target.id === "password") {
      setpassword(event.target.value);
    } else if (event.target.id === "email") {
      setEmail(event.target.value);
    }
  };

  const loginSuccess = (role, eid) => {
    localStorage.setItem(
      "credentials",
      JSON.stringify({
        eid: eid,
        email: email,
        password: password,
        role: role,
      })
    );
    role === "developer"
      ? props.history.push({ pathname: "/dev/newrelease", role: "dev" })
      : props.history.push({
          pathname: "/manager/newrelease",
          role: "manager",
        });
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
        ? loginSuccess(loginStatus[0][1].role, loginStatus[0][1].eid)
        : setErrorMessage(
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

// import Form from "./form/Form";
// import { Component, useState } from "react";
// import pageImg from "../../images/page_img.png";
// import ValidateInput from "../../validation/ValidateInput";
// import { withRouter } from "react-router";

// class LoginForm extends Component {
//   // state variable with email and password attributes
//   state = {
//     Email: null,
//     Password: null,
//   };
//   render() {
//     var errorMessage = "";
//     const setErrorMessage = () => {
//       errorMessage = <h3 className="red-text text-darken-4">Login Failed!</h3>;
//     };
//     // set value to state variable
//     const changeHandler = (event) => {
//       this.setState({
//         [event.target.id]: event.target.value,
//       });
//     };
//     const getData = async () => {
//       console.log("Called getData");
//       // this.props.history.push({ pathname: "/dev/newrelease" });

//       // const api_call = await fetch(`http://localhost:8088/user/`);
//       // const data = await api_call.json();
//       // console.log(data);
//       // if (this.state.Email === "vipin@moneyview.in") {
//       //   const myData = data.map((i) => {
//       //     return i.id === 14221 ? i : false;
//       //   });
//       //   myData.forEach((element) => {
//       //     if (element !== false) {
//       //       console.log(element);
//       //     }
//       //   });
//       // }
//     };
//     const submitHandler = (event) => {
//       event.preventDefault();
//       console.log("Form Submitted");
//       if (ValidateInput(this.state.Email)) {
//         getData();
//       } else {
//         setErrorMessage();
//       }
//     };
//     return (
//       <div className="row">
//         {/* left half to display data */}
//         <div className="col s12 m6">
//           <div className="imgPadding">
//             <img src={pageImg} alt="" className="imgSize" />
//           </div>
//         </div>
//         {/* right half of the page to input credentials */}
//         <div className="col s12 m6">
//           <div className="container loginFormPadding">
//             {/* form to take login input */}
//             <Form changeHandler={changeHandler} submitHandler={submitHandler} />
//           </div>
//         </div>
//         {/* display login failed message if incorrect login credentials is entered */}
//         <div className="center">{errorMessage}</div>
//       </div>
//     );
//   }
// }

// export default withRouter(LoginForm);
