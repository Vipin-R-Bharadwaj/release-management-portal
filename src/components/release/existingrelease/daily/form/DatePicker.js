import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ id, key, disabled, changeHandler, name }) {
  const [selectedDate, setSelectedDate] = React.useState(key);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    changeHandler(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        // margin="normal"
        disabled={disabled}
        id={id}
        label={name}
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}
