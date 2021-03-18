const Input = ({ inputType, changeHandler }) => {
  return (
    <div className="input-field col s12">
      {/* input field */}
      <input
        id={inputType}
        type={inputType}
        className="validate inputSpacing"
        onChange={(event) => changeHandler(event)}
      />
      <label
        htmlFor={inputType}
        className="inputPadding light-green-text text-darken-1"
      >
        {inputType}
      </label>
      {/* helper text only for Email validation */}
      {inputType === "Email" ? (
        <span
          className="helper-text inputPadding light-green-text text-darken-1"
          data-error="wrong"
          data-success="right"
        ></span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
