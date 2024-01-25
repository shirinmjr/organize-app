const EventName = () => {
    return (
        <div className="q-title flex flex-col items-center  h-screen mx-5 m-10">
            <h3 className="mb-4">What is your event name?</h3>
            <input type="text" id="eventName" name="eventName" className="w-full  py-2  text-border-3 rounded text-blue-600" required />
        </div>
    );
};

export default EventName;