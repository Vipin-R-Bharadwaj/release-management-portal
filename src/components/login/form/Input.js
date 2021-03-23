const Input = ({ inputId, inputText, inputType, changeHandler }) => {
  return (
    <div className="input-field col s12">
      {/* input field */}
      <input
        id={inputId}
        type={inputType}
        className="validate inputSpacing"
        onChange={(event) => changeHandler(event)}
      />
      <label
        htmlFor={inputId}
        className="inputPadding light-green-text text-darken-1"
      >
        {inputText}
      </label>
      {/* helper text only for Email validation */}
      {/* {inputType === "Email" ? (
        <span
          className="helper-text inputPadding light-green-text text-darken-1"
          data-error="wrong"
          data-success="right"
        ></span>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default Input;
