import Switch from "../inputs/Switch";

import React, { useState } from "react";
import { DatePicker } from "date-picker-nextjs";
import InputText from "../inputs/InputText";
const EventName = ({ callBack, eventName = "" }) => {
  const [modalDateIsOpen, setModalDateIsOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDatePicker = (e) => {
    setClickedInput(e.target.id);
    setModalDateIsOpen(true);
  };

  const submit = (e) => {
    e.preventDefault();
    // your logic
  };

  return (
    <div className="event-form">
      <InputText
        label={"What is your event name?"}
        name="eventName"
        id="eventName"
        placeHolder={"Event Name.."}
        value={eventName}
        onChange={callBack}
        required
      />

      <Switch
        label={"Event date is decided"}
        children={"Yes"}
        id={"choose-date"}
        isChecked={showDatePicker}
        onChange={() => setShowDatePicker((state) => !state)}
      />

      {showDatePicker && <h1>date picker</h1>}
      {/* <form className="test" onSubmit={submit}>
        <label htmlFor="birthdate">Event Date</label>
        <input
          className="input-field outline-none"
          type="text"
          id="dateOfBirth"
          placeholder="Event Date"
          onClick={handleDatePicker}
        /> */}
      {/* 
      <input type="submit" value="Submit" />
      </form> */}
      {/* <DatePicker
        setModalDateIsOpen={setModalDateIsOpen}
        clickedInput={clickedInput}
      /> */}
    </div>
  );
};

export default EventName;
