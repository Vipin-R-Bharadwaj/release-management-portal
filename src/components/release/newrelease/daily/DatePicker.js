import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker({ id, disabled, changeHandler }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function formatDate(tempdate) {
    var d = new Date(tempdate),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const handleDateChange = (tempdate) => {
    const formattedDate = formatDate(tempdate);
    console.log(formattedDate);
    setSelectedDate(formattedDate);
    changeHandler(formattedDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        id={id}
        label={id}
        format="MM/dd/yyyy"
        disabled={disabled}
        // placeholder={selectedDate}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
}
