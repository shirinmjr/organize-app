"use Client";
const GetUserInfo = () => {

  const handleChange = () => {
    console.log("contact info changed ");
  };

  return (
    <div>
      <h1>

        Last step, what is your name and phone number?
      </h1>

      <label className="block mb-2 text-sm font-bold text-gray-600">First Name</label>
      <input
        type="text"
        name="firstName"
        value={""}

        className="w-full p-2 border rounded-md"
        required
      />

      <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={""}

        className="w-full p-2 border rounded-md"
        required
      />

      <label className="block mt-4 mb-2 text-sm font-bold text-gray-600">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        value={""}

        className="w-full p-2 border rounded-md"
        required
      />

    </div>
  );
};

export default GetUserInfo;