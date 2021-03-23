import DatePicker from "./DatePicker";

const DatePickerHOC = ({ id, disabled, changeHandler }) => {
  return (
    <div className="col s12 m2">
      <DatePicker id={id} changeHandler={changeHandler} disabled={disabled} />
    </div>
  );
};

export default DatePickerHOC;
