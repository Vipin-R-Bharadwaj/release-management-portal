const Input = ({
  btnID,
  btnType,
  btnClass,
  changeHandler,
  btnText,
  btnWidth,
}) => {
  const divClass = "input-field col s12 " + btnWidth;
  const clickHandler = (event) => {
    changeHandler(event.target.value);
  };
  return (
    <div className={divClass}>
      <input
        id={btnID}
        type={btnType}
        className={btnClass}
        onChange={(event) => clickHandler(event)}
      />
      <label htmlFor={btnID}>{btnText}</label>
    </div>
  );
};

export default Input;
