import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const WhoToInvite = () => {
  return (
    <div className=" my-10">
      <div className="flex flex-col w-full">
        <h3 className="mb-4">Who do you want to invite?</h3>
        <div className="flex flex-col-3">
          <input
            className="text-field w-full  py-2  text-border-3 rounded text-blue-600"
            required
            type="text"
            id="whoToInvite"
            name="whoToInvite"
            placeholder="Name"
          />
          <input
            className="text-field w-full  py-2  text-border-3 rounded text-blue-600"
            required
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
          />

          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-blue-600 hover:cursor-pointer hover:text-blue-00 "
          />
        </div>
      </div>
    </div>
  );
};

export default WhoToInvite;

