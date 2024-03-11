import React, { useEffect, useState } from "react";
import { DatePicker } from "date-picker-nextjs";
import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";
import Switch from "../inputs/Switch";

const EventName = ({ callBack, eventName = "" }) => {
  const [datePickerChecked, setDatePickerChecked] = useState(false);
  const [modalDateIsOpen, setModalDateIsOpen] = useState(false);
  const [clickedInput, setClickedInput] = useState(null);

  useEffect(() => {
    console.log(datePickerChecked);
  }, [datePickerChecked]);

  const handleDatePicker = (e) => {
    setClickedInput(e.target.id);
    setModalDateIsOpen(true);
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
        label={"Have you decided on a date?"}
        isChecked={datePickerChecked}
        callBack={() => setDatePickerChecked(!datePickerChecked)}
      />
      {datePickerChecked && (
        <div>
          <InputWrapper htmlFor="event-date" label="Event Date">
            <input
              className=" flex-row border-4 input-field outline-none"
              type="text"
              id="eventDate"
              placeholder="Event Date"
              onClick={handleDatePicker}
            />

            {modalDateIsOpen && (
              <DatePicker
                className="block"
                setModalDateIsOpen={setModalDateIsOpen}
                clickedInput={clickedInput}
              />
            )}
          </InputWrapper>
        </div>
      )}
    </div>
  );
};

export default EventName;
