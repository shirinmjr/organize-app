import React, { useState } from "react";
import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";

const EventName = ({ callBack, eventName = "" }) => {
  return (
    <InputWrapper>
      <div className="event-form">
        <div className="flex gap-7">
          <h3 className="">What is your event name?</h3>
        </div>
        <InputText
          name="eventName"
          placeholder={"Event Name.."}
          value={eventName}
          onChange={callBack}
          required
        />
      </div>
    </InputWrapper>
  );
};

export default EventName;
