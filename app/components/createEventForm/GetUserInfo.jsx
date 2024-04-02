"use Client";
import React, { useState, useEffect } from "react";
import InputText from "../inputs/InputText";
import InputWrapper from "../inputs/InputWrapper";

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
      <h3 className=""> Last step, Create your account to send your feedback request.</h3>
      <InputWrapper>
        <InputText
          type="text"
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder={"First Name..."}
          value={organizerInfo.firstName}
          onChange={handleChange}
          required
        />
        <InputText
          type="text"
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder={"Last Name..."}
          value={organizerInfo.lastName}
          onChange={handleChange}
          required
        />
        <InputText
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          placeholder={"Phone Number..."}
          value={organizerInfo.phoneNumber}
          onChange={handleChange}
          required
        />
      </InputWrapper>
    </div>
  );
};

export default GetUserInfo;
