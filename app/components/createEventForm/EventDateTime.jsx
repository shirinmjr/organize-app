import React, { useEffect, useState } from "react";
import InputWrapper from "../inputs/InputWrapper";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { orange } from "@mui/material/colors";

const EventDateTime = () => {
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const todayDate = dayjs();
  useEffect(() => {
    console.log("date", eventDate);
  }, [eventDate]);

  return (
    <div className="flex flex-col items-center justify-start  rounded-full">
      <InputWrapper
        htmlFor="event-date"
        label="">
        <div className="flex items-center">
          <div className="flex flex-col">
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
        <div className="flex items-center"></div>
      </InputWrapper>
    </div>
  );
};

export default EventDateTime;
