"use Client";
import React, { useState, useEffect } from "react";
import InputText from "../inputs/InputText";

const GetUserInfo = ({ callBack, organizerData = "" }) => {
  // const initialOrganizerInfo = {
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",

  // };

  const [organizerInfo, setOrganizerInfo] = useState(organizerData);

  useEffect(() => {
    console.log("organizer info is: ", organizerInfo);
    callBack(organizerInfo);
  }, [organizerInfo]);

  const handleChange = (e) => {
    setOrganizerInfo({
      ...organizerInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="event-form">
      <div>
        <div className="flex gap-7 form-q-title">
          <h3 className=""> Last step, what is your name and phone number?</h3>
        </div>

        <InputText
          type="text"
          id="firstName"
          name="firstName"
          label="First Name"
          placeHolder={"First Name..."}
          value={organizerInfo.firstName}
          onChange={handleChange}
          required
        />
        <InputText
          type="text"
          id="lastName"
          name="lastName"
          label="Last Name"
          placeHolder={"Last Name..."}
          value={organizerInfo.lastName}
          onChange={handleChange}
          required
        />
        <InputText
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          placeHolder={"Phone Number..."}
          value={organizerInfo.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default GetUserInfo;
