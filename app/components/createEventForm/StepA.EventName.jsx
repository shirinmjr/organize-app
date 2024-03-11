import Switch from "../inputs/Switch";

import React, { useState } from "react";
import InputText from "../inputs/InputText";
const EventName = ({ callBack, eventName = "" }) => {
  //   const handleDatePicker = (e) => {
  //     setClickedInput(e.target.id);
  //     //setModalDateIsOpen(true);
  //   };

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
    </div>
  );
};

export default EventName;
