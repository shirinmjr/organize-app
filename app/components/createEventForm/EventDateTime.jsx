import React, { useEffect, useState } from "react";
import InputWrapper from "../inputs/InputWrapper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import { orange } from "@mui/material/colors";

// export interface IQuestionOption {
//   option_id: string | number | Boolean;
//   option: string;
// }
const EventDateTime = () => {
  const [datePickerChecked, setDatePickerChecked] = useState();
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const todayDate = dayjs();

  useEffect(() => {
    console.log("date", eventDate);
  }, [eventDate, datePickerChecked]);

  return (
    <div className="event-form">
      <h3>Have you decided on a date?</h3>
      <div className="flex items-center font-bold justify-center">
        {/* name={"event-date"}
          label={"Have you decided on a date?"}
          options={}
          // onChange={(selected) => onChoiceChange([selected])}
         */}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => setDatePickerChecked(e.target.value === "true" ? true : false)}>
          <FormControlLabel
            value={true}
            control={<Radio />}
            label="Yes"
          />
          <FormControlLabel
            value={false}
            control={<Radio />}
            label="No"
          />
        </RadioGroup>
      </div>
      {datePickerChecked && (
        <InputWrapper
          htmlFor="event-date"
          label="">
          <div className="flex items-center justify-center">
            <div className="mx-2">
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
                      onChange={(newValue) => setEventDate(newValue.toISOString())}
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

      {!datePickerChecked && (
        <InputWrapper
          htmlFor="event-date"
          label="">
          <div className="">
            <h3>Propose up to 5 options. </h3>
            <h2
              className="my-2 text-brandBlue hover:cursor-pointer hover:text-blue-800"
              // onClick={handleAddQuestion}
            >
              Add&nbsp;
              <FontAwesomeIcon icon={faCirclePlus} />
            </h2>
          </div>
        </InputWrapper>
      )}
    </div>
  );
};

export default EventDateTime;
