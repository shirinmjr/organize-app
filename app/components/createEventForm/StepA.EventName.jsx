const EventName = ({ callBack, eventName = "" }) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <h3 className="">What is your event name?</h3>
            <input
                className="w-full bg-white p-4 rounded border-blue-600 border-4 shadow-lg" required
                type="text"
                id="eventName"
                name="eventName"
                value={eventName || ""}
                onChange={callBack}
            />
        </div>
    );
};

export default EventName;