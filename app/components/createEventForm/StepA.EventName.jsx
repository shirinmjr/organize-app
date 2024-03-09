const EventName = ({ callBack, eventName = "" }) => {
  return (
    <div className="event-form">
      <h3 className="form-q-title">What is your event name?</h3>
      <input
        className="input-main"
        required
        type="text"
        id="eventName"
        name="eventName"
        value={eventName || ""}
        onChange={callBack}
      />
      <div class="flex items-center mx-2">
        <h3>I Have a date </h3>
        <label
          for="check"
          className="bg-gray-100 w-20 h-10 cursor-pointer relative m-3 rounded-full"
        >
          <input type="checkbox" id="check" className="sr-only peer" />
          <span className="w-2/4 h-4/5 text-white bg-blue-200 absolute rounded-full left-1 top-1 peer-checked:bg-brandBlue peer-checked:left-10 transition-all duration-500 items-center p-1">
            Yes
          </span>
        </label>
      </div>
    </div>
  );
};

export default EventName;
