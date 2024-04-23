import React, { useEffect, useState } from "react";
import InputWrapper from "../inputs/InputWrapper";
import InputChooseOne from "../inputs/InputChooseOne";
import Switch from "@/app/components/inputs/Switch";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { orange } from "@mui/material/colors";

// export interface IQuestionOption {
//   option_id: string | number | Boolean;
//   option: string;
// }
const EventDateTime = () => {
  const [datePickerChecked, setDatePickerChecked] = useState(false);

  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const todayDate = dayjs();
  const hasDate = [
    {
      option: "Yes we have decided on a date.",
      option_id: true,
    },
    {
      option: "No we need to decided",
      option_id: false,
    },
  ];
  useEffect(() => {
    console.log("date", eventDate);
  }, [eventDate, datePickerChecked]);

  return (
    <div className="event-form">
      <h3>Event Date and Time:</h3>
      <div className="flex items-center font-bold justify-center">
        <InputChooseOne
          name={"event-date"}
          label={"Have you decided on a date?"}
          options={hasDate}
          // onChange={(selected) => onChoiceChange([selected])}
        />

        {/* <Switch
          isChecked={datePickerChecked}
          callBack={() => setDatePickerChecked(!datePickerChecked)}
                isChecked={datePickerChecked}
          callBack={() => setDatePickerChecked(!datePickerChecked)}
        /> */}
      </div>
      {!datePickerChecked && (
        <InputWrapper
          htmlFor="event-date"
          label="">
          <div className="flex items-center mr-4">
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "MobileDatePicker", "DesktopDatePicker", "StaticDatePicker"]}>
                  <DemoItem label="Event Date">
                    <MobileDatePicker
                      sx={{
                        border: 2,
                        borderColor: "brandBlue",
                        borderRadius: "8px",
                        "&:hover": { borderColor: orange[300] },
                      }}
                      defaultValue={todayDate}
                      name={"eventDate"}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={[
                  //  "TimePicker",
                  "MobileTimePicker",
                  // "DesktopTimePicker",
                  // "StaticTimePicker",
                ]}>
                <DemoItem label="Event Time">
                  <MobileTimePicker
                    sx={{
                      margin: 2,
                      padding: 0,
                      width: 1 / 5,
                      border: 2,
                      borderColor: "brandBlue",
                      borderRadius: "8px",
                      "&:hover": { borderColor: orange[300] },
                    }}
                    name="eventTime"
                    defaultValue={todayDate}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </InputWrapper>
      )}
    </div>
  );
};

export default EventDateTime;
