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
    <div>
      <div>
        <h1>
          Last step, what is your name and phone number?
        </h1>
        <label className="block mb-2 text-sm font-bold text-gray-600">First Name</label>
        <input
          className="w-full p-2 border rounded-md"
          type="text"
          id="firstName"
          name="firstName"

          value={organizerInfo.firstName || ""}
          required
          onChange={handleChange}
        />

        <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Last Name</label>
        <input
          className="w-full p-2 border rounded-md"
          type="text"
          id="lastName"
          name="lastName"
          value={organizerInfo.lastName || ""}
          required
          onChange={handleChange}
        />

        <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Phone Number</label>
        <input
          className="w-full p-2 border rounded-md"
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