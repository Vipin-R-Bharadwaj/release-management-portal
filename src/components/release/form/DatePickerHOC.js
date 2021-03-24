import DatePicker from "./DatePicker";

const DatePickerHOC = ({ id, disabled, changeHandler, name }) => {
  return (
    <div className="col s12 m3">
      <DatePicker
        id={id}
        disabled={disabled}
        changeHandler={changeHandler}
        name={name}
      />
    </div>
  );
};

export default DatePickerHOC;
