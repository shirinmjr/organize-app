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
        <div className='q-title flex flex-col mx-5 m-10'>
          <h3>
            Last step, what is your name and phone number?
          </h3>
        </div>
        <label className="block mb-2 text-sm font-bold text-gray-600">First Name</label>
        <input
          className="w-full field-option rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 focus:border-orange-500"
          type="text"
          id="firstName"
          name="firstName"

          value={organizerInfo.firstName || ""}
          required
          onChange={handleChange}
        />

        <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Last Name</label>
        <input
          className="w-full field-option rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 focus:border-orange-500"
          type="text"
          id="lastName"
          name="lastName"
          value={organizerInfo.lastName || ""}
          required
          onChange={handleChange}
        />

        <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Phone Number</label>
        <input
          className="w-full field-option rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-200 focus:border-orange-500"
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