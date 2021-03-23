import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ id, changeHandler, disabled }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

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
        label="Release Date"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={(event) => handleDateChange(event)}
      />
    </MuiPickersUtilsProvider>
  );
}
