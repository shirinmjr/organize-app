"use Client";
import React, { useState, useEffect } from 'react';

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
    <div className='event-form'>
      <div >
        <h3 className='form-q-title' >
          Last step, what is your name and phone number?
        </h3>
        <label>First Name</label>
        <input
          className="input-secondary"
          type="text"
          id="firstName"
          name="firstName"

          value={organizerInfo.firstName || ""}
          required
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          className="input-secondary"
          type="text"
          id="lastName"
          name="lastName"
          value={organizerInfo.lastName || ""}
          required
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <input
          className="input-secondary"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={organizerInfo.phoneNumber || ""}
          required
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default GetUserInfo;