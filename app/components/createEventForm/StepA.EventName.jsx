import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import InputWrapper from "../inputs/InputWrapper";
import InputText from "../inputs/InputText";
import Switch from "../inputs/Switch";

const EventName = ({ callBack, eventName = "" }) => {
  const [datePickerChecked, setDatePickerChecked] = useState(false);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const todayDate = dayjs();
  useEffect(() => {
    console.log(datePickerChecked);
    console.log("date", eventDate);
    //callBack(eventDate);
  }, [datePickerChecked, eventDate]);

  //   const handleDatePicker = (e) => {
  //     setEventDate(new Date(e.$d).toISOString().substring(0, 10));
  // callBack()
  //     // setModalDateIsOpen(true);
  //   };

  return (
    <div className="event-form">
      <div className="flex gap-7 form-q-title">
        <h3 className="">What is your event name?</h3>
      </div>
      <InputText
        name="eventName"
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
              <div className="flex flex-col">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker defaultValue={todayDate} name={"eventDate"} />
                </LocalizationProvider>
              </div>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  //  "TimePicker",
                  "MobileTimePicker",
                  // "DesktopTimePicker",
                  // "StaticTimePicker",
                ]}
              >
                <MobileTimePicker name="eventTime" defaultValue={todayDate} />
              </DemoContainer>
            </LocalizationProvider>
            <div className="flex items-center"></div>
          </InputWrapper>
        </div>
      )}
    </div>
  );
};

export default EventName;
