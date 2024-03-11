import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
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
        <div className="flex items-center justify-start  rounded-full">
          <InputWrapper htmlFor="event-date" label="">
            <div className="flex items-center justify-around my-4">
              <input
                className=" p-2 border-4 border-blue-400 rounded-full"
                type="text"
                id="eventDate"
                placeholder="Enter Date"
                onClick={handleDatePicker}
              />
              <FontAwesomeIcon icon={faCalendarDays} />
              {modalDateIsOpen && (
                <div>
                  <DatePicker
                    className="block"
                    setModalDateIsOpen={setModalDateIsOpen}
                    clickedInput={clickedInput}
                  />
                </div>
              )}
            </div>
            <div className="flex items-center justify-around my-4">
              <input
                className="p-2 border-4 border-blue-400 rounded-full "
                type="text"
                id="eventTime"
                placeholder="Enter Time"
                onClick={handleDatePicker}
              />
              <FontAwesomeIcon icon={faClock} />
            </div>
          </InputWrapper>
        </div>
      )}
    </div>
  );
};

export default EventName;
