import React, { useState } from "react";
import DatePicker from "react-datindex.jsepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h4>DatePicker</h4>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default DatePicker;
