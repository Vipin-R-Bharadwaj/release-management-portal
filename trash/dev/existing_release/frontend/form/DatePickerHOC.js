import DatePicker from "./DatePicker";

const DatePickerHOC = ({ id, disabled, changeHandler, name, width }) => {
  const fieldWidth = "col s12 " + width;
  return (
    <div className={fieldWidth}>
      <DatePicker
        id={id}
        name={name}
        disabled={disabled}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default DatePickerHOC;
