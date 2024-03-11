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
      <div className="flex gap-7 form-q-title">
        <h3 className="">What is your event name?</h3>
      </div>
      <InputText
        name="eventName"
        id="eventName"
        placeHolder={"Event Name.."}
        value={eventName}
        onChange={callBack}
        required
      />
      <Switch
        label={"Is Your Event Date Decided?"}
        children={<span>Yes</span>}
      />
    </div>
  );
};

export default EventName;
