import DatePicker from "./DatePicker";

const DatePickerHOC = ({
  id,
  key,
  disabled,
  btnlabel,
  changeHandler,
  name,
}) => {
  return (
    <div className="col s12 m3">
      <DatePicker
        id={id}
        key={key}
        disabled={disabled}
        changeHandler={changeHandler}
        name={name}
      />
      <label className="active" htmlFor={id}>
        {btnlabel}
      </label>
    </div>
  );
};

export default DatePickerHOC;
