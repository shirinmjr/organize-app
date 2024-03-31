import React, { useState } from "react";
import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";
import Switch from "../inputs/Switch";

const EventName = ({ callBack, eventName = "" }) => {
  const [datePickerChecked, setDatePickerChecked] = useState(false);

  return (
    <InputWrapper>
      <div className="event-form">
        <div className="flex gap-7">
          <h3 className="">What is your event name?</h3>
        </div>
        <InputText
          name="eventName"
          placeHolder={"Event Name.."}
          value={eventName}
          onChange={callBack}
          required
        />
      </div>
    </InputWrapper>
  );
};

export default EventName;
