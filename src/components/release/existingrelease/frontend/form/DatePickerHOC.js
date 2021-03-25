import DatePicker from "./DatePicker";

const DatePickerHOC = ({ id, disabled, label, changeHandler }) => {
  return (
    <div className="col s12 m3">
      <DatePicker id={id} changeHandler={changeHandler} disabled={disabled} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default DatePickerHOC;
