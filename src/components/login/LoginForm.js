import Form from "./form/Form";
import { Component } from "react";
import pageImg from "../../images/page_img.png";
import ValidateInput from "../../validation/ValidateInput";
import { withRouter } from "react-router";
// import axios from "axios";
// import https from "https";

class LoginForm extends Component {
  // state variable with email and password attributes
  state = {
    Email: "vipin@moneyview.in",
    Password: null,
  };
  // set value to state variable
  changeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };
  getData = async () => {
    const api_call = await fetch(`http://localhost:8088/user/`);
    const data = await api_call.json();
    console.log(data);
    if (this.state.Email === "vipin@moneyview.in") {
      const myData = data.map((i) => {
        return i.id === 14221 ? i : false;
      });
      myData.forEach((element) => {
        if (element !== false) {
          console.log(element);
        }
      });
    }
    // const options = {
    //   mode: "no-cors",
    //   method: "post",
    //   url: "http://localhost:8088/user/",
    //   data: {
    //     firstName: "Finn",
    //     lastName: "Williams",
    //   },
    //   transformResponse: [
    //     (data) => {
    //       // transform the response

    //       return data;
    //     },
    //   ],
    // };

    // // send the request
    // axios(options);

    // Simple POST request with a JSON body using axios
    // const article = { title: "React POST Request Example" };
    // const httpsAgent = new https.Agent({ rejectUnauthorized: false });
    // axios
    //   .post("https://localhost:3000/articles", { httpsAgent }, article)
    //   .then((response) => console.log(response));

    fetch(`http://localhost:8088/user/`, {
      Allow: "POST",
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log("Success: ", response))
      .catch((error) => console.error("Error: ", error));

    // const user = {
    //   name: "Dummy",
    // };

    // axios.post(`http://localhost:8088/user/`, { user }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    ValidateInput(this.state.Email, this.props.history);
  };
  render() {
    return (
      <div className="row">
        {/* left half to display data */}
        <div className="col s12 m6">
          <div className="imgPadding">
            <img src={pageImg} alt="" className="imgSize" />
          </div>
        </div>
        {/* right half of the page to input credentials */}
        <div className="col s12 m6">
          <div className="container loginFormPadding">
            {/* form to take login input */}
            <Form
              changeHandler={this.changeHandler}
              submitHandler={this.submitHandler}
            />
          </div>
          <div className="input-field col s12">
            <button
              className="btn waves-effect waves-light btn-large btnStyling"
              onClick={() => this.getData()}
            >
              Click Me!
            </button>
          </div>
        </div>
        {/* display login failed message if incorrect login credentials is entered */}
      </div>
    );
  }
}

export default withRouter(LoginForm);
