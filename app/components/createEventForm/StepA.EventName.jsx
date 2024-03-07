const EventName = ({ callBack, eventName = "" }) => {
    return (
        <div className="event-form">
            <h3 className="form-q-title">What is your event name?</h3>
            <input
                className="input-main" required
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