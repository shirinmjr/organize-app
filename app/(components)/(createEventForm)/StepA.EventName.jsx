const EventName = () => {
    return (
        <div className="q-title flex flex-col items-center justify-center h-screen mx-5 mb-4">
            <h2 className="mb-4">What is your event name?</h2>
            <input type="text" id="eventName" name="eventName" className="w-full px-3 py-2  text-border-3 rounded text-blue-600" required />
        </div>
    );
};

export default EventName;