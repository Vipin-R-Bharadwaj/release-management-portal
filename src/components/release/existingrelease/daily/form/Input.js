const Input = ({
  btnID,
  btnType,
  btnClass,
  changeHandler,
  btnText,
  btnValue,
  btnWidth,
  disabled,
}) => {
  const divClass = "input-field col s12 " + btnWidth;
  return (
    <div className={divClass}>
      <input
        id={btnID}
        type={btnType}
        className={btnClass}
        value={btnValue}
        disabled={disabled}
        onChange={(event) => changeHandler(event)}
      />
      <label className="active" htmlFor={btnID}>
        {btnText}
      </label>
    </div>
  );
};

export default Input;
