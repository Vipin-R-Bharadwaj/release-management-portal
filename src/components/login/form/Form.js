import Button from "./Button";
import Input from "./Input";

const Form = ({ submitHandler, changeHandler }) => {
  return (
    <div className="row">
      <div className="card center">
        <div className="card-panel grey-lighten-4 input-field col s12 formStyle">
          {/* heading */}
          <h2>ENTER YOUR CREDENTIALS</h2>
          <div className="divider"></div>
          <div className="loginFormPadding">
            <form onSubmit={(event) => submitHandler(event)}>
              {/* Email input field */}
              <Input
                inputId="email"
                inputType="Email"
                inputText="Email"
                changeHandler={changeHandler}
              />
              {/* Password input field */}
              <Input
                inputId="password"
                inputType="Password"
                inputText="Password"
                changeHandler={changeHandler}
              />
              {/* submit button */}
              <Button submitHandler={submitHandler} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
