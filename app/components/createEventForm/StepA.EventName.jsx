const EventName = ({ callBack, eventName = "" }) => {
    return (
        <div className="event-form">
            <h3 className="mb-4">What is your event name?</h3>
            <input
                className="text-field" required
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