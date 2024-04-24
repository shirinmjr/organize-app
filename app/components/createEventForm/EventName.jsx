import React from "react";
import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";

const EventName = ({ callBack, eventName = "" }) => {
  return (
    <InputWrapper>
      <div className="event-form">
        <h3 className="">What is your event name?</h3>
        <InputText
          name="eventName"
          placeholder={"Event Name..."}
          value={eventName}
          onChange={callBack}
          required
        />
      </div>
    </InputWrapper>
  );
};

export default EventName;
