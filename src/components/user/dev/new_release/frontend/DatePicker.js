import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    props.changeHandler(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        // margin="normal"
        disabled={props.disabled}
        id="date-picker-dialog"
        label="Release Date"
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={(event) => handleDateChange(event)}
      />
    </MuiPickersUtilsProvider>
  );
}
