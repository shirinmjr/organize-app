import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
//import { DatePicker } from "date-picker-nextjs";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
        <div className="flex flex-col items-center justify-start  rounded-full">
          <InputWrapper htmlFor="event-date" label="">
            <div className="flex items-center">
              <input
                className=" p-2 border-4 border-blue-400 rounded-full"
                type="text"
                id="eventDate"
                placeholder="Enter Date"
                onClick={handleDatePicker}
              />
              <FontAwesomeIcon icon={faCalendarDays} />
              {/* {modalDateIsOpen && (
                <div>
                  <DatePicker
                    className="block"
                    setModalDateIsOpen={setModalDateIsOpen}
                    clickedInput={clickedInput}
                  />
                </div>
              )} */}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs("2022-04-17")}
                  name="startDate"
                />
              </LocalizationProvider>
            </div>
            <div className="flex items-center">
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
